let lastQuery = "";
let activeCommand = "";

let commandData = {};
let commandAliases = {};
let commandAliasesArray = [];


async function getCommandData() {
    let response = await fetch("/js/commands.json");

    commandData = await response.json();
    let aliases = {};

    let commandScroll = $(".command-commands-buttons-container");

    for (let command of Object.entries(commandData)) {
        let name = command[0];
        let data = command[1];

        let cmdHtml = `<div class="command-command-btn" id="cmd-button-${name}" data-cmd-name="${name}"><span>${name}</span></div>`;

        commandScroll.append(cmdHtml);


        aliases[name] = name;
        data.aliases.forEach(element => {
            aliases[element] = name
        });
    }

    commandAliases = aliases;
    commandAliasesArray = Object.keys(commandAliases);

    $("#command-search-bar").keyup(updateSearch);
    
    $(".command-command-btn").click(commandClick)


    let redirected = handleRedirect();

    if (!redirected) {
        let lastCommand = localStorage.getItem("commands-last");

        lastCommand = lastCommand ? lastCommand : commandAliases[commandAliasesArray[0]];

        showCommand(lastCommand, commandData[lastCommand]);
    }

    updateSearch();
}



function handleRedirect() {
    let params = new URLSearchParams(document.location.search);

    let command = params.get("command");

    if (command) {

        switchCommand(command.toLowerCase());

        return true
    }

    return false
}



function updateSearch() {
    let query = $("#command-search-bar")[0].value.toLowerCase();

    if (query == lastQuery) { return }

    lastQuery = query;

    let commands = [];

    commandAliasesArray.forEach((alias) => {
        if (alias.includes(query)) {
            commands.push(commandAliases[alias]);
        }
    })

    commands = new Set(commands);

    $(".command-command-btn").hide();

    commands.forEach((command) => {
        $(`#cmd-button-${command}`).show();
    })
}



function commandClick(e) {
    let button = e.currentTarget;

    let command = button.getAttribute("data-cmd-name");

    switchCommand(command);
}


function switchCommand(command) {
    if (command == activeCommand) {
        return
    }
    
    let data = commandData[command];

    if (data) {
        showCommand(command, data);
    }
}


function showCommand(command, data) {
    activeCommand = command;

    localStorage.setItem("commands-last", command);

    window.history.pushState({}, command, `/commands/${command}`);
    

    $(".command-active").removeClass("command-active");

    $(`#cmd-button-${command}`).addClass("command-active");


    $(".command-name").text(command);

    $("#command-info-description").text(data["description"]);


    let guideElement = $("#command-usage-guide");

    guideElement.html("")

    for (let i = 0; i < data["usage"].length; i++) {
        let usage = data["usage"][i];

        let hasDescription = usage.description !== null && usage.description !== undefined;
        let hasUsage = usage.usage !== null && usage.usage !== undefined;
        let hasExample = usage.example !== null && usage.example !== undefined;
        let isAlias = usage.alias;
        let noMargin = usage["no-margin"];

        let lastChild = guideElement.children().slice(-1)[0];

        
        if (hasDescription) {
            guideElement.append(`<p class="command-text ${hasUsage ? "" : "command-less-margin-bottom"}">${usage.description}</p>`);
        }


        if (hasUsage) {
            if (!hasDescription && lastChild.classList.contains("command-example")) {
                $(lastChild).addClass("command-less-margin-bottom");
            }

            if (hasExample) {
                guideElement.append(`<p class="command-example ${noMargin ? "command-less-margin-bottom" : ""}">
                        <span class="command-example-text command-example-available">${isAlias ? "" : command} ${usage.usage}</span>
                        <span class="command-example-text command-example-available" style="display: none;">${isAlias ? "" : command} ${usage.example}</span>
                    </p>`);
            } else {
                guideElement.append(`<p class="command-example ${noMargin ? "command-less-margin-bottom" : ""}">
                        <span class="command-example-text">${isAlias ? "" : command} ${usage.usage}</span>
                    </p>`);
            }
        }
    }



    
    $("#command-attribute-category > p").text(data["category"] ? data["category"] : "No category");

    $("#command-attribute-cooldown > p").text(data["cooldown"] != "0" ? data["cooldown"] + "s" : "No cooldown");

    $("#command-attribute-role > p").text(`${data["role"]["name"]} (${data["role"]["role"]})`);

    $("#command-attribute-level > p").text(`${data["level"]["name"]} (${data["level"]["level"]})`);

    if (data["aliases"].length) {
        $("#command-attribute-alias > h4").text(data["aliases"].length == 1 ? "Alias" : "Aliases");
        $("#command-attribute-alias > p").text(data["aliases"].join(", "));
    } else {
        $("#command-attribute-alias > h4").text("Aliases");
        $("#command-attribute-alias > p").text("This command has no aliases.");
    }

    if (data["flags"].length) {
        $("#command-attribute-flags > p").text("");
        $(".command-attribute-flags-container").html(" ");

        data["flags"].forEach((element) => {
            $(".command-attribute-flags-container").append(`
                    <div class="command-attribute-flag">
                        <p>${element["flags"].join(", ")}</p>
                        <ul>
                            <li>Description: ${element["description"]}</li>
                            <li>Type: ${element["type"]}</li>
                            <li>Usage: ${element["usage"]}</li>
                        </ul>
                    </div>
                `);
        });

    } else {
        $(".command-attribute-flags-container").html(" ");
        $("#command-attribute-flags > h4").text("Flags");
        $("#command-attribute-flags > p").text("This command has no flags.");
    }

    $("#command-info-description").text(data["description"]);


    $(".command-example-available").click(toggleExample);
}



function toggleExample(e) {
    let clickedExmaple = $(e.currentTarget);
    let hiddenExample = clickedExmaple.siblings();

    clickedExmaple.hide();
    hiddenExample.show();
}


getCommandData();