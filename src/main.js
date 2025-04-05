
$(".authButton").click(() => {
    window.location.href = "https://shorturl.at/F52Tf"
})
$(".tbButton").click((e) => {
    button = e.target.attributes.value.value
    console.log(button)
    window.location.href = button
})

function removeExpiredTokens () {
    console.log(localStorage.getItem("username"), localStorage.getItem("pfpURL"))
    if (localStorage.getItem("accessTokens")) {
        const accessTokens = JSON.parse(localStorage.getItem("accessTokens"))
        for (const i of accessTokens) {
            if (i['date'] < Date.now() - 5184*10**6) {
                accessTokens.splice(accessTokens.indexOf(i), 1)
                console.log("Token " + i["accessToken"] + "expired")
                if (accessTokens == {}) {
                localStorage.removeItem("accessTokens")
                } else {
                localStorage.setItem("accessTokens", accessTokens)
                }
            }
        }
    }
}


function login() {
    if (localStorage.getItem("accessTokens")) {
        const displayName = localStorage.getItem("display"), pfpURL = localStorage.getItem("pfpURL"), color = localStorage.getItem("color")
        if (![displayName, pfpURL, color].includes(null)) {
            $(".authButton").hide()
            $(".left").append("<div class=userButton> <p class='tbButtonText' id='twitchProfile'> " + displayName + " </p> <img src=" + pfpURL +" class=userPfp> </div>")
            $("#twitchProfile").css("color", color)
        }
    }
}


function toggleDarkTheme() {
    $("body").removeClass("lightTheme")
    $("body").addClass("darkTheme")
} 

function toggleLightTheme() {
    $("body").removeClass("darkTheme")
    $("body").addClass("lightTheme")
}
(e) => {
    let theme = e.target.id;
    if (theme == "theme-dark") {
        toggleDarkTheme();
    } else if (theme == "theme-light") {
        toggleLightTheme();
    }
  }
function changeTheme(e) {
    let theme = typeof e === "string" ? e : e.target.id
    
    localStorage.setItem("theme", theme)

    if (theme == "theme-dark") {
        toggleDarkTheme()
    } else if (theme == "theme-light") {
        toggleLightTheme()
    }
}

let userTheme = localStorage.getItem("theme")
if (userTheme) {
    changeTheme(userTheme)
} else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkTheme()
    } else {
        toggleLightTheme()
    }
}