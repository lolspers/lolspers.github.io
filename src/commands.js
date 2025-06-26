import { commandsPerLevel } from "./commandData.js"

let commands = {}
Object.keys(commandsPerLevel).forEach((l) => {
    commands = {...commands, ...commandsPerLevel[l]}
})

const allCommandNames = [], allCommandAliases = {}, categories = []
export function loadCommands() {
    for (let l in commandsPerLevel) {
        $(".sbButtons").append(`
            <div class="sbCmdSeperator sb-seperator-${l}">
                <div class="sbCmdLButton">
                    <p>Hide</p>
                </div>
                <h1>${l}</h1>
                <hr>
                <h1>${l}</h1>
            </div>
            <div class="sbLvlContainer sbCmdL${l}"> 
    
            </div>`
        )
    
        $(".cmdMenus").append(`
            <div class="cmdSeperator">
                <div class="cmdLButton">
                    <p>Hide</p>
                </div>
                <h1>${l}</h1>
                <hr>
                <h1>${l}</h1>
            </div>
            <div style="display: flex; flex-flow: wrap;" class="cmdL${l}">
    
            </div>
        `)
    
        for (let c in commandsPerLevel[l]) {
            let cmdData = commandsPerLevel[l][c]
    
            allCommandNames.push(c)
            allCommandAliases[c] = c
            if (cmdData.alias) {
                cmdData.alias.forEach((e) => allCommandAliases[e] = c)
            }
    
            $(`.sbCmdL${l}`).append(`
                <div class="sbCmdButton sb-cmd-${c}">
                    <p class="commandButtonText">${c}</p>
                </div>
            `)
    
            $(`.cmdL${l}`).append(`
            <div class="cmdMenu cmd-category-${cmdData.category}" id="cmd-${c}">
                <div class="cmdShort" id="${c}">
                    <h1>${c}
                    ${cmdData.category ? `<img draggable="false" src="img/${cmdData.category}.webp" class="categoryIcon">` : ""}</h1>
                    <img draggable="false" src="img/arrow.png" class="arrow">
                </div>
                <div class="cmdLong">
                    <div class="cmdLongText"> <h3>Arguments:</h3> <p>${cmdData.arguments}</p> </div>
                    <div class="cmdLongText"> <h3>Description:</h3> <p>${cmdData.description}</p> </div>
                    <div class="cmdLongText"> <h3>Cooldown:</h3><p>${cmdData.cooldown}s</p> </div>
                    <div class="cmdLongText"> <h3>Level:</h3> <p>${l}</p> </div>
                    ${cmdData.alias ? `<div class="cmdLongText"> <h3>Aliases:</h3> <p>${cmdData.alias.join(", ")}</p> </div>` : ""}
                </div>
            </div>
            `)
            if (cmdData.category && !categories.includes(cmdData.category)) {
                categories.push(cmdData.category)
                $(".categories").append(`<div class="categorybutton button-category-${cmdData.category}" value="${cmdData.category}"><img draggable="false" src="img/${cmdData.category}.webp"> - ${cmdData.category}</div>`)
            }
        }
    }

    $(".cmdLong").hide();
    $(".cmdShort").click(toggleCommandMenu);
    $(".sbCmdButton").click(goToCommand);
    $(".cmdLButton").click(toggleCmdL);
    $(".sbCmdLButton").click(toggleSbCmdL);


    let hash = document.location.hash.substring(1)
    if (allCommandNames.includes(hash)) {
      toggleCommandMenu(hash)
    }
}

export function toggleCommandMenu(e) {
    const command = typeof e === 'string' ? e : e.currentTarget.id 
    let cmdMenu = $("#"+command)
    cmdMenu.next(".cmdLong").slideToggle();
    const arrow = cmdMenu.children(".arrow")[0];

    if (!cmdMenu.hasClass("max")) {
        cmdMenu.toggleClass("max");
        arrow.style.transition = "transform 0.4s";
        arrow.style.transform = "rotate(0deg)";

    } else {
        setTimeout(() => {
            cmdMenu.toggleClass("max")
        }, 350);
        arrow.style.transition = "transform 0.5s";
        arrow.style.transform = "rotate(90deg)";
    }
}


export function commandSearch() {
    let searchText = $("#searchBar")[0].value;
    let matchedCommands = Object.keys(allCommandAliases).filter((e) => e.includes(searchText));

    $(".sbCmdButton").hide();
    $(".sbCmdSeperator").hide()
    matchedCommands.forEach((e) => {
        let c = allCommandAliases[e];
        $(`.sb-cmd-${c}`).show();
        $(".sb-seperator-"+commands[c].level).show();
    })
}

export function goToCommand() {
    let cmd = $(this).children("p").text();
    location.href = "#"+cmd

    $(`#${cmd}`).addClass("max");
    $(`#${cmd}`).next(".cmdLong").slideDown();

    const arrow = $(`#${cmd}`).children(".arrow")[0];
    arrow.style.transform = "rotate(0deg)";
}

export function toggleCmdL() {
    const level = $(this).next("h1").text();
    $(`.cmdL${level}`).slideToggle();

    if ($(this).children("p").text() == "Hide") {
        $(this).children("p").text("Show");
    } else {
        $(this).children("p").text("Hide");
    }
}

export function toggleSbCmdL() {
    const level = $(this).next("h1").text();
    $(`.sbCmdL${level}`).slideToggle();

    if ($(this).children("p").text() == "Hide") {
        $(this).children("p").text("Show");
    } else {
        $(this).children("p").text("Hide");
    }
}

export function showHelpPopup() {
    $(".helpPopup").show()
    $(".helpPopup").css("filter", "opacity(1)")
    $(".helpPopup").css("top", "2em")
    $(".sbContainer").css("filter", "blur(3px)")
    $(".cmdMenusContainer").css("filter", "blur(3px)")
}

export function hideHelpPopup() {
    $(".helpPopup").css("filter", "opacity(0)")
    $(".helpPopup").css("top", "5em")
    setTimeout(() => {
        $(".helpPopup").hide()
    }, 170)
    $(".sbContainer").css("filter", "")
    $(".cmdMenusContainer").css("filter", "")
}

export function showCategories(e) {
    let category = this.attributes.value.value

    $(e.currentTarget).toggleClass("unselected")
    $(".cmd-category-"+category).toggle()
}

export function sortCommands(e) {
    let sort = e.currentTarget.value

    let commandOrder
    if (sort == "a-z") {
        commandOrder = allCommandNames
    } else if (sort == "z-a") {
        commandOrder = [...allCommandNames].reverse()
    } else if (sort == "category") {
        commandOrder = Object.keys(commands).map((c) => {
            return [c, commands[c]["category"]]
        })
        commandOrder.sort((a,b) => {
            if (!a[1]) { return 1 }
            if (!b[1]) { return -1 }
            return a[1].localeCompare(b[1])
        })
        commandOrder.forEach((e) => {
            return e[0]
        })
        commandOrder = commandOrder.map((c) => c[0])
    }

    let n = 0
    commandOrder.forEach((e) => {
        n += 1
        $("#cmd-"+e).css("order", n)
    })
}


export function parseParams(params) {
    let category = params.get("category")

    if (!category) { return }
    category = category.toLowerCase()

    if (!categories.includes(category) && category != "null") { return }

    for (let c of categories) {
        if ( c == category ) { continue }
        $(`.button-category-${c}`).toggleClass("unselected")
        $(".cmd-category-"+c).toggle()
    }
    if (category != "null") {
        $(".button-category-null").toggleClass("unselected")
        $(".cmd-category-null").toggle()
    }
}