const commandsPerLevel = {
    "1": {
        "bot": {
            "arguments": "bot",
            "cooldown": 5,
            "description": "Gives a small description of the bot",
            "category": "bot",
            "level": 1
        },
        "b64": {
            "arguments": "b64 {encode/decode} {text}",
            "cooldown": 5,
            "description": "Encode/decode base64",
            "category": null,
            "level": 1,
            "alias": [
                "base64"
            ]
        },
        "cat": {
            "arguments": "cat",
            "cooldown": 3,
            "description": "Work in progress cat mini game, full help will be on the website soon\u2122 - \u26a0\ufe0fthings can change at any time!",
            "category": "minigame",
            "level": 1,
            "alias": [
                "cats"
            ]
        },
        "cdata": {
            "arguments": "cdata",
            "cooldown": 5,
            "description": "Gets an estimated chance for each cookie roll based on logs for @ThePositiveBot, this is not updated in real time",
            "category": null,
            "level": 1
        },
        "choice": {
            "arguments": "choice {option 1} {option 2}",
            "cooldown": 5,
            "description": "Pick a random option from the provided options",
            "category": null,
            "level": 1,
            "alias": [
                "pick"
            ]
        },
        "commands": {
            "arguments": "commands",
            "cooldown": 5,
            "description": "Show a list of custom commands in the current channel",
            "category": "settings",
            "level": 1,
            "alias": [
                "customcommands"
            ]
        },
        "emote": {
            "arguments": "emote {emote}",
            "cooldown": 5,
            "description": "Get basic information about a 7tv emote",
            "category": "7tv",
            "level": 1,
            "alias": [
                "7tvemote"
            ]
        },
        "emotelink": {
            "arguments": "emotelink {emote} {file type}",
            "cooldown": 5,
            "description": "Returns the 7tv cdn link of the specified 7tv emote",
            "category": "7tv",
            "level": 1,
            "alias": [
                "el"
            ]
        },
        "epoch": {
            "arguments": "epoch {unix timestamp in s/ms}",
            "cooldown": 5,
            "description": "Returns date and time and relative time",
            "category": "time",
            "level": 1,
            "alias": [
                "unix"
            ]
        },
        "fish": {
            "arguments": "fish",
            "cooldown": 5,
            "description": "Fishing",
            "category": "minigame",
            "level": 1
        },
        "followage": {
            "arguments": "followage {username}",
            "cooldown": 5,
            "description": "See how long someone has been following the current channel",
            "category": "twitch",
            "level": 1,
            "alias": [
                "fa"
            ]
        },
        "fullunscramble": {
            "arguments": "fullunscramble {letters}",
            "cooldown": 5,
            "description": "Returns all possible words that can be made using the provided letters",
            "category": null,
            "level": 1,
            "alias": [
                "unscramblefull",
                "unscrambleall",
                "fus"
            ]
        },
        "haspotat": {
            "arguments": "haspotat {channel}",
            "cooldown": 5,
            "description": "Check if a channel has PotatBotat added",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "haspotatbotat"
            ]
        },
        "help": {
            "arguments": "help {command}",
            "cooldown": 5,
            "description": "Returns information about a command, or a list of commands is no command was provided",
            "category": "bot",
            "level": 1
        },
        "hint": {
            "arguments": "hint",
            "cooldown": 5,
            "description": "Get 4 possible options for the active trivia",
            "category": null,
            "level": 1
        },
        "ic": {
            "arguments": "ic",
            "cooldown": 5,
            "description": "Returns the zero width space, which is an invisible character that can be sent on twitch",
            "category": null,
            "level": 1,
            "alias": [
                "invisiblecharacter"
            ]
        },
        "level": {
            "arguments": "level {user} {level}",
            "cooldown": 5,
            "description": "Set or return a users user level",
            "category": "bot",
            "level": 1,
            "alias": [
                "ul",
                "ulevel",
                "userlevel"
            ]
        },
        "list": {
            "arguments": "list {list} add/remove {item}",
            "cooldown": 5,
            "description": "Add or remove an item from the list, if no list is provided it goes in the main list",
            "category": null,
            "level": 1
        },
        "morse": {
            "arguments": "morse {text}",
            "cooldown": 5,
            "description": "Encode/decode morse code, decode needs to be the same format as encode returns",
            "category": null,
            "level": 1
        },
        "namechange": {
            "arguments": "namechange {username}",
            "cooldown": 5,
            "description": "Get the name change history of a user, add -dates to get the date for each namechange",
            "category": "twitch",
            "level": 1,
            "alias": [
                "nc"
            ]
        },
        "ping": {
            "arguments": "ping",
            "cooldown": 5,
            "description": "Returns basic information about the bot",
            "category": "bot",
            "level": 1
        },
        "pipe": {
            "arguments": "pipe {command1} | {command2}",
            "cooldown": 5,
            "description": "Execute multiple commands in an order, seperate commands with \" | \", the result of the previous command is the input for the next command, or use indexes like {1} {1+} {+1} anywhere in the command",
            "category": "bot",
            "level": 1
        },
        "potatocooldowns": {
            "arguments": "potatocooldowns {user}",
            "cooldown": 5,
            "description": "Get @PotatBotat (potat.app) cooldowns",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "pocooldowns",
                "pocooldown",
                "poc",
                "pc"
            ]
        },
        "potatoinfo": {
            "arguments": "potatoinfo {user}",
            "cooldown": 5,
            "description": "Get @PotatBotat (potat.app) farming stats that you can't get through normal commands",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "pd",
                "potatodata",
                "potatostats",
                "poinfo"
            ]
        },
        "quiz": {
            "arguments": "quiz {quiz}",
            "cooldown": 5,
            "description": "Get the answer of a @PotatBotat (potat.app) quiz",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "answer"
            ]
        },
        "reply": {
            "arguments": "reply",
            "cooldown": 5,
            "description": "Toggle whether or not to reply to your message",
            "category": "settings",
            "level": 1
        },
        "stvsa": {
            "arguments": "7tvsa {username}",
            "cooldown": 5,
            "description": "Get 7tv subscription data",
            "category": "7tv",
            "level": 1,
            "alias": [
                "7tvsa",
                "7tvsubage"
            ]
        },
        "stvset": {
            "arguments": "stvset {channel}",
            "cooldown": 5,
            "description": "Get data about the active 7tv set",
            "category": "7tv",
            "level": 1,
            "alias": [
                "set",
                "7tvset",
                "emoteset"
            ]
        },
        "stvuser": {
            "arguments": "stvuser {user}",
            "cooldown": 5,
            "description": "Get data about a 7tv user through their twitch connection",
            "category": "7tv",
            "level": 1,
            "alias": [
                "stvu",
                "7tvuser",
                "7tvu"
            ]
        },
        "suggest": {
            "arguments": "suggest {suggestion/suggestion id}",
            "cooldown": 5,
            "description": "Suggest a feature to the bot or make a bug report, or check the status of a suggestion through the id",
            "category": "bot",
            "level": 1
        },
        "time": {
            "arguments": "time {timezone/country/country code}",
            "cooldown": 5,
            "description": "Get the current date and time from a timezone or country, defaults to CET",
            "category": "time",
            "level": 1,
            "alias": [
                "timezone",
                "tz"
            ]
        },
        "trivia": {
            "arguments": "trivia",
            "cooldown": 5,
            "description": "Alright",
            "category": null,
            "level": 1
        },
        "uid": {
            "arguments": "uid {user}",
            "cooldown": 5,
            "description": "Get the ids of a user",
            "category": "bot",
            "level": 1,
            "alias": [
                "id",
                "userid"
            ]
        },
        "unscramble": {
            "arguments": "unscramble {letters}",
            "cooldown": 5,
            "description": "Get all possible words using all of the letters once.",
            "category": null,
            "level": 1,
            "alias": [
                "scramble",
                "scrambled",
                "us"
            ]
        },
        "user": {
            "arguments": "user {user}",
            "cooldown": 5,
            "description": "Get twitch information about a user",
            "category": "twitch",
            "level": 1,
            "alias": [
                "u"
            ]
        },
        "usercard": {
            "arguments": "usercard {user} {channel}",
            "cooldown": 5,
            "description": "Get the usercard link of a user in a channel",
            "category": "twitch",
            "level": 1,
            "alias": [
                "uc"
            ]
        },
        "usertime": {
            "arguments": "usertime {username} / usertime {set} {timezone/country/country code}",
            "cooldown": 5,
            "description": "Returns the current time and timezone for a user, this is manually set by me",
            "category": "time",
            "level": 1,
            "alias": [
                "utime",
                "ut"
            ]
        },
        "vanish": {
            "arguments": "vanish",
            "cooldown": 5,
            "description": "Get timed out for 1s to delete all your messages",
            "category": "twitch",
            "level": 1
        }
    },
    "2": {
        "ascii": {
            "arguments": "ascii {emote}",
            "cooldown": 5,
            "description": "Make a shit ascii art of a 7tv emote",
            "category": "7tv",
            "level": 2
        }
    },
    "3": {
        "add": {
            "arguments": "add {emote}",
            "cooldown": 0,
            "description": "Add a 7tv emote, uses exact match query",
            "category": "7tv",
            "level": 3
        },
        "command": {
            "arguments": "command add/edit {trigger} {response} / command delete {trigger} / command options {trigger} {flags} (flags: -ucd {usercd}, -gcd {globalcd}, -enable/disable, -mod, -vip, -sub, -level {userlevel}) / command alias/keyword add/remove {keyword} / command show",
            "cooldown": 5,
            "description": "add: add a custom command - edit: edit a custom command - delete: delete a custom command - options: change settings of a custom command (like level or cooldown) - alias/keyword: add a alias/keyword to a custom command - show: show the raw response of a custom command",
            "category": "settings",
            "level": 3
        },
        "disable": {
            "arguments": "disable {command}",
            "cooldown": 5,
            "description": "Disable a command in the current channel",
            "category": "settings",
            "level": 3
        },
        "enable": {
            "arguments": "enable {command}",
            "cooldown": 5,
            "description": "Enable a command in the current channel",
            "category": "settings",
            "level": 3
        },
        "pyramid": {
            "arguments": "pyramid {width} {word/sentence}",
            "cooldown": 5,
            "description": "Send a word or sentence in a pyramid",
            "category": null,
            "level": 3
        },
        "remove": {
            "arguments": "remove {emote}",
            "cooldown": 0,
            "description": "Remove a 7tv emote from the current set",
            "category": "7tv",
            "level": 3
        },
        "spam": {
            "arguments": "spam {word/sentence} {amount}",
            "cooldown": 10,
            "description": "Spam a word or sentence, max amount is 50",
            "category": null,
            "level": 3
        }
    },
    "4": {
        "part": {
            "arguments": "part {channel}",
            "cooldown": 0,
            "description": "Part a channel",
            "category": "bot",
            "level": 4
        },
        "trigger": {
            "arguments": "trigger {trigger}",
            "cooldown": 5,
            "description": "Set a custom trigger",
            "category": "settings",
            "level": 4
        }
    },
    "5": {
        "join": {
            "arguments": "join {channel}",
            "cooldown": 0,
            "description": "Join a channel",
            "category": "bot",
            "level": 5
        },
        "say": {
            "arguments": "say {message}",
            "cooldown": 0,
            "description": "Make the bot send anything",
            "category": "bot",
            "level": 5,
            "alias": [
                "sudo",
                "s"
            ]
        }
    },
    "6": {
        "asay": {
            "arguments": "asay {alt} {message}",
            "cooldown": 0,
            "description": "Say something through one of my alts",
            "category": null,
            "level": 6
        },
        "download": {
            "arguments": "download {emote} {file type}",
            "cooldown": 0,
            "description": "Download a 7tv emote on my pc",
            "category": "7tv",
            "level": 6
        },
        "py": {
            "arguments": "py {code}",
            "cooldown": 0,
            "description": "Executes python code",
            "category": "bot",
            "level": 6,
            "alias": [
                "python",
                "eval",
                "e"
            ]
        },
        "reload": {
            "arguments": "reload {module}",
            "cooldown": 0,
            "description": "Reload something, add module to reload a command",
            "category": "bot",
            "level": 6,
            "alias": [
                "restart"
            ]
        },
        "request": {
            "arguments": "request {method} {endpoint} {headers} {json} {params}",
            "cooldown": 0,
            "description": "Make an api request",
            "category": null,
            "level": 6,
            "alias": [
                "api"
            ]
        },
        "sql": {
            "arguments": "sql {query}",
            "cooldown": 0,
            "description": "Execute a SQL query",
            "category": "bot",
            "level": 6
        }
    }
}
let commands = {}
Object.keys(commandsPerLevel).forEach((l) => {
    commands = {...commands, ...commandsPerLevel[l]}
})
console.log(commands)

const allCommandNames = [], allCommandAliases = {}
function loadCommands() {
    for (l in commandsPerLevel) {
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
            <div class="cmdL${l}">
    
            </div>
        `)
    
        for (c in commandsPerLevel[l]) {
            cmdData = commandsPerLevel[l][c]
    
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
            <div class="cmdMenu">
                <div class="cmdShort" id="${c}">
                    <h1>${c}
                    ${cmdData.category ? `<img src="img/${cmdData.category}.webp" class="categoryIcon">` : ""}</h1>
                    <img src="img/arrow.png" class="arrow">
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

function toggleCommandMenu(e) {
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


function commandSearch() {
    let searchText = $("#searchBar")[0].value;
    let matchedCommands = Object.keys(allCommandAliases).filter((e) => e.includes(searchText));

    $(".sbCmdButton").hide();
    $(".sbCmdSeperator").hide()
    matchedCommands.forEach((e) => {
        c = allCommandAliases[e];
        $(`.sb-cmd-${c}`).show();
        $(".sb-seperator-"+commands[c].level).show();
    })
}

function goToCommand() {
    let cmd = $(this).children("p").text();
    location.href = "#"+cmd

    $(`#${cmd}`).addClass("max");
    $(`#${cmd}`).next(".cmdLong").slideDown();

    const arrow = $(`#${cmd}`).children(".arrow")[0];
    arrow.style.transform = "rotate(0deg)";
}

function toggleCmdL() {
    const level = $(this).next("h1").text();
    $(`.cmdL${level}`).slideToggle();

    if ($(this).children("p").text() == "Hide") {
        $(this).children("p").text("Show");
    } else {
        $(this).children("p").text("Hide");
    }
}

function toggleSbCmdL() {
    const level = $(this).next("h1").text();
    $(`.sbCmdL${level}`).slideToggle();

    if ($(this).children("p").text() == "Hide") {
        $(this).children("p").text("Show");
    } else {
        $(this).children("p").text("Hide");
    }
}

function showHelpPopup() {
    $(".helpPopup").show()
    $(".helpPopup").css("filter", "opacity(1)")
    $(".helpPopup").css("top", "2em")
    $(".sbContainer").css("filter", "blur(3px)")
    $(".cmdMenusContainer").css("filter", "blur(3px)")
}

function hideHelpPopup() {
    $(".helpPopup").css("filter", "opacity(0)")
    $(".helpPopup").css("top", "5em")
    setTimeout(() => {
        $(".helpPopup").hide()
    }, 170)
    $(".sbContainer").css("filter", "")
    $(".cmdMenusContainer").css("filter", "")
}
//$(".subCmdHeader").click(function hideSubCmd() {
//    console.log($(this).next())
//    $(this).next(".subCmds").slideToggle()
//})