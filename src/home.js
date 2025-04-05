function addUserToken(hash) {
    const params = new URLSearchParams(hash)
    const accessToken = params.get("access_token")
    const scopes = params.get("scope").split(" ")

    console.log("Oauth detected, saving token...")
    console.log("Token: " + accessToken.slice(0, 10) + "********************")
    console.log("Scopes: " + scopes)

    if (localStorage.getItem("accessTokens")) {
      const accessTokens = JSON.parse(localStorage.getItem("accessTokens"))

      for (const i of accessTokens) {
        if (i["date"] < Date.now() - 5184*10**6 || JSON.stringify(scopes) == JSON.stringify(i["scopes"]) || accessToken == i["accessToken"]) {
          console.log(`Removed token: "${i['accessToken']}" - expired: ${Boolean(i["date"] < Date.now() - 5184*10**6)}, duplicate scopes: ${Boolean(JSON.stringify(scopes) == JSON.stringify(i["scopes"]))}, duplicate token: ${Boolean(accessToken == i["accessToken"])}`)
          accessTokens.splice(accessTokens.indexOf(i), 1)
        }
      }

      accessTokens.push({"accessToken": accessToken, "scopes": scopes, "date": Date.now()})
      localStorage.setItem("accessTokens", JSON.stringify(accessTokens))
    } else {
      localStorage.setItem("accessTokens", JSON.stringify([{"accessToken": accessToken, "scopes": scopes, "date": Date.now()}]))
    }
}

function setUserInfo() {
    if (localStorage.getItem("accessTokens")) {
        let accessToken = JSON.parse(localStorage.getItem("accessTokens"))[0]["accessToken"]
        fetch("https://api.twitch.tv/helix/users", {
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Client-ID": "02im991evpic87q63afh291vm9i0sw",
            }
            })
            .then(response => {
                if (response.ok) {
                    console.log("Succesfully fetched user info")
                    return response.json()
                } else {
                    console.log("Request failed")
                    throw new Error('Network response was not ok.')
                }
            })
            .then(data => {
                data = data['data'][0]
                localStorage.setItem("username", data['login'])
                localStorage.setItem("display", data['display_name'])
                localStorage.setItem("pfpURL", data['profile_image_url'])
                localStorage.setItem("uid", data['id'])

                fetch("https://api.twitch.tv/helix/chat/color?user_id=" + data["id"], {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Client-Id": "02im991evpic87q63afh291vm9i0sw"
                }
                })
                .then(response => {
                if (response.ok) {
                    console.log("Successfully fetched user color")
                    return response.json()
                } else {
                    console.log("request failed")
                    throw new Error("Failed to get user color")
                }
                })
                .then(data => {
                color = data["data"][0]["color"]
                localStorage.setItem("color", color)
                })
                .catch(error => {
                    console.error('Fetch error:', error)
                })

            })
            .catch(error => {
                console.error('Fetch error:', error)
            })
    }    
}