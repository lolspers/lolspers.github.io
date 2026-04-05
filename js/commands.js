let lastQuery = "";
let activeCommand = "";

let commandData = {};
let commandAliases = {};
let commandAliasesArray = [];


function exists(e) {
    return e !== null && e !== undefined;
}


async function getCommandData() {
    let response = await fetch("js/commands.json");

    commandData = await response.json();
    let aliases = {};

    let commandScroll = $(".command-commands-container");

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

    if (!data) {
        window.history.replaceState({}, "", "/commands");

        $(".command-name").text("Command not found");

        return
    }

    showCommand(command, data);
}


function showCommand(command, data) {
    activeCommand = command;

    localStorage.setItem("commands-last", command);

    if (!localStorage.getItem("no-command-redirect")) {
        window.history.pushState({}, command, `/commands/${command}`);
    }


    $(".command-active").removeClass("command-active");

    $(`#cmd-button-${command}`).addClass("command-active");


    $(".command-name").text(command);

    $("#command-info-description").html(`${formatHelpString(data.description)} ${data.extra ? formatHelpString(data.extra) : ""}`);


    let guideElement = $("#command-usage-guide");

    guideElement.html("")

    for (let i = 0; i < data["usage"].length; i++) {
        let usage = data["usage"][i];

        let hasDescription = exists(usage.description);
        let hasUsage = exists(usage.usage);
        let noMargin = usage["no-margin"];

        let lastChild = guideElement.children().slice(-1)[0];

        
        if (hasDescription) {
            let description = usage.description;
            description = formatHelpString(description);

            guideElement.append(`<p class="command-text ${hasUsage ? "" : "command-less-margin-bottom"} ${usage.bold ? "bold" : ""}">${description}</p>`);
        }


        if (hasUsage) {
            if (!hasDescription && lastChild.classList.contains("command-usage")) {
                $(lastChild).addClass("command-less-margin-bottom");
            }

            let usageCommand = usage.alias == true ? "" : command;
            let usageText = `${usageCommand} ${usage.usage}`;
            let exampleText = exists(usage.example) ? `${usageCommand} ${usage.example}` : undefined;

            let usageEl = generateUsageEl(usageText, exampleText);
            usageEl.addClass("command-usage")
            
            if (noMargin) {
                usageEl.addClass("command-less-margin-bottom");
            }

            guideElement.append(usageEl);
        }

        if (exists(usage.table)) {
            let tableEl = $("<table><tbody></tbody></table>");
            tableEl.addClass("command-table");

            for (let i = 0; i < usage.table.length; i++) {
                let row = usage.table[i];
                let rowEl = $("<tr></tr>");

                for (let i = 0; i < row.length; i++) {
                    let cellContent = row[i];
                    let rawCellData, cellData = {};

                    if (cellContent.startsWith("<") && cellContent.split(" ")[0].endsWith(">")) {
                        [rawCellData, cellContent] = cellContent.split("> ");
                        cellData = Object.fromEntries(Array.from(rawCellData.slice(1).split(";"), (e) => {
                            return e.split("=");
                        }));
                    }

                    let cellEl = cellData.header ? $("<th></th>") : $("<td></td>");
                    cellContent = formatHelpString(cellContent);
                    cellEl.html(cellContent);

                    if (cellData.colspan) {
                        cellEl.attr("colspan", cellData.colspan);
                    }
                    
                    rowEl.append(cellEl);
                }
                tableEl.append(rowEl);
            }
            guideElement.append(tableEl);
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
                            <li>Description: ${formatHelpString(element["description"])}</li>
                            <li>Type: ${element["type"]}</li>
                            <li>Usage: ${formatHelpString(element["usage"])}</li>
                        </ul>
                    </div>
                `);
        });

    } else {
        $(".command-attribute-flags-container").html(" ");
        $("#command-attribute-flags > h4").text("Flags");
        $("#command-attribute-flags > p").text("This command has no flags.");
    }


    $("p:has(> .command-example-text)").children().click((e) => {
        $(e.currentTarget).parent().children().toggle();
    });
    // only select <span> on triple click (instead of whole <p>)
    $(".command-text-quote, command-example-text").click((e) => {
        if (e.detail == 3) {
            window.getSelection().selectAllChildren(e.currentTarget);
        }
    });
}


function generateUsageEl(usage, example) {
    let el = $(`<p></p>`);

    let usageEl = $(`<span class="command-text-quote"></span>`);
    let innerSpanEl = $(`<span>${usage}</span>`);
    usageEl.html(innerSpanEl);
    el.append(usageEl);

    if (typeof example !== "undefined") {
        let exampleEl = $(`<span class="command-example-text"></span>`);
        exampleEl.text(example);
        exampleEl.hide()
        el.append(exampleEl);
    }

    return el;
}


function formatHelpString(string) {
    function handleEscapes(replacement) {
        return (match, p1, p2) => {
            return p2 ? replacement.replaceAll("$2", p2) : p1;
        }
    }
    
    string = string.replace(/\\(`)|`([\S ]+?)`<`([\S ]+?)`/g, (match, p1, p2, p3) => {
        return p2 ? generateUsageEl(p2, p3)[0].outerHTML : p1;
    });
    string = string.replace(/\\([()\[\]])|\(([\S ]+?)\)\[([\S ]+?)\]/g, (match, p1, p2, p3) => {
        return p2 ? `<a href="${p3}" target="_blank">${p2}</a>` : p1;
    });
    string = string.replace(/\\(`)|`([\S ]+?)`/g, handleEscapes("<span class='command-text-quote'>$2</span>"));
    string = string.replace(/\\(\*)|\*\*([\S ]+?)\*\*/g, handleEscapes("<span class='bold'>$2</span>"));
    string = string.replace(/\\(\*)|\*([\S ]+?)\*/g, handleEscapes("<span style='font-style: italic;'>$2</span>"));

    return string;
}


getCommandData();