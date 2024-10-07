commands = {
    "1": {
        "7tvset": {
            "response": "{active set}, id: {set id} - link: https://7tv.app/emote-sets/{set id} - {usage}/{slots}",
            "arguments": "7tvset {username}",
            "note": "defaults current channel",
            "cooldown": "5s",
        },
        "7tvuser": {
            "response": "@{username} - {active set}: {usage}/{capacity} - Emote sets: {total sets} - Editors: {editors} ({total editors}/15), Roles: {roles}, - https://7tv.app/users/{user id} ",
            "arguments": "7tvuser {username}",
            "note": "defaults sender",
            "cooldown": "5s",
            "alias": ["7tvu"]
        },
        "emotelink": {
            "response": "https://cdn.7tv.app/emote/{emote id}/{file type}",
            "arguments": "el {emote} {file type}",
            "cooldown": "5s",
            "alias": ["el"]
        },
        "epoch": {
            "response": "epoch: {unix time}, CET: {long date}, relative: {relative time}",
            "arguments": "epoch {unix time}",
            "note": "only accepts seconds (for now)",
            "cooldown": "5s",
        },
        "ic": {
            "response": "󠀀",
            "arguments": "ic",
            "cooldown": "5s",
            "alias": ["invischar", "invisisblechar", "invischaracter", "invisiblecharacter"]
        },
        "level": {
            "response": "{username}'s level: {level}, {level name}",
            "arguments": "level {username}",
            "cooldown": "5s",
        },
        "potatoinfo": {
            "response": "potato: {potato ready at}, steal: {steal ready at}, cdr: {cdr ready at}, quiz: {quiz ready at}",
            "arguments": "potatoinfo {username}",
            "cooldown": "5s",
            "alias": ["poinfo"]
        },
        "time": {
            "response": "{date} {time (24h)} {timezone}",
            "arguments": "time {timezone}",
            "cooldown": "5s",
        },
        "user": {
            "response": "{username} | uid: {twitch id} | roles: {twitch roles} | description: {twitch description} | created at: {date} {time}",
            "arguments": "user {username}",
            "cooldown": "5s",
            "alias": ["u"]
        },
        "uid": {
            "response": "{twitch id} | id: {bot id} | 7tv: {7tv id} | first seen: {unix time}",
            "arguments": "uid",
            "cooldown": "5s",
        }
    },
    "2": {
        "usercard": {
            "response": "@{sender} https://www.twitch.tv/popout/{channel}/viewercard/{username}",
            "arguments": "usercard {username} {channel}",
            "note": "defaults sender and current channel",
            "cooldown": "5s",
            "alias": ["uc"]
        }
    },
    "3": {
        "command": {
            "cooldown": "5s",
            "note:": "adding -global at the end selects the global command",
            "subcommands": {
                "alias": {
                    "arguments": "command alias {command} {action} {alias}",
                    "note": "actions: add/delete",
                    "subcommands": {
                        "add": {
                            "response": "Successfully added alias {alias} to {command}",
                        },
                        "delete": {
                            "response": "Successfully deleted alias {alias} from {command}",
                        }
                    }
                },
                "add": {
                    "response": "Added command: {command name}",
                    "arguments": "command add {command name} {response}",
                    "note": "does not add trigger",
                },
                "delete": {
                    "response": "Deleted command: {command}",
                    "arguments": "command delete {command}",
                },
                "edit": {
                    "response": "Succesfully edited command {command}",
                    "arguments": "command edit {command} {response}",
                },
                "options": {
                    "response": "Succesfully updated command: {command}",
                    "arguments": "command options {command} {flags}",
                    "note": "flags: -enable, -disable, -level {level 1-4}, -gcd {global cd in s}, -ucd {user cd in s}",
                },
            }
        },
        "commands": {
            "response": "https://lolspers.github.io/commands",
            "arguments": "commands",
            "cooldown": "5s",
        },
        "disable": {
            "response": "Disabled command {command}",
            "arguments": "disable {command}",
            "note": "disables bot command in current channel",
            "cooldown": "5s",
        },
        "enable": {
            "response": "Enabled command {command}",
            "arguments": "enable {command}",
            "note": "enables bot command in current channel",
            "cooldown": "5s",
        },
        "ping": {
            "response": "On: {bool} | Uptime: {uptime} | Channels: {channels} | Response: {delay}ms | Last: {last ping}",
            "arguments": "ping",
            "cooldown": "5s",
        }
    },
    "4": {
        "asay": {
            "response": "{message}",
            "arguments": "asay",
            "note": "not finished",
        },
        "list": {
            "response": "(1). {list item} | (2). (list item) | etc.",
            "arguments": "list",
            "subcommands": {
                "list add": {
                    "response": "added to list: {item}",
                    "arguments": "list add {item}",
                },
                "list clear": {
                    "response": "cleared list: {whole list}",
                    "arguments": "list clear",
                },
                "list len": {
                    "response": "list len",
                    "arguments": "Character length: {total characters}, item amount: {total items}",
                },
                "list remove": {
                    "response": "Removed from list: {item}",
                    "arguments": "list remove {index}",
                },
            }
        },
        "massping": {
            "response": "@{user1}, @{user2}, etc.",
            "arguments": "massping",
        },
        "pyramid": {
            "arguments": "pyramid {word/sentence} {width}",
        },
        "say": {
            "response": "{message}",
            "arguments": "say {message}",
        },
        "seplist": {
            "response": "(1). {list item} | (2). (list item) | etc.",
            "arguments": "seplist {list name}",
            "subcommands": {
                "add": {
                    "response": "Added \"{item}\" to {list}",
                    "arguments": "seplist add {list} {item}",
                },
                "create": {
                    "response": "Created list: \"{list name}\"",
                    "arguments": "seplist create {seplist name}",
                },
                "delete": {
                    "response": "Deleted seplist: \"{list}\", with items: (1). {list item} | (2). (list item) | etc.",
                    "arguments": "",
                    "note": "",
                },
                "info": {
                    "response": "Total seplists: {total lists}, Current seplists: {list 1} | {list 2} | {list 3}, Total items: {total combined items}, Total characters: {total combined characters}",
                    "arguments": "seplist info",
                },
                "remove": {
                    "response": "Removed: \"{item}\", from seplist: \"{list}\"",
                    "arguments": "seplist remove {list} {item/index}",
                },
            }
        },
        "spam": {
            "arguments": "spam {message/sentence} {amount}",
        },
        "ulevel": {
            "response": "Set iolsper's level to {level name}",
            "arguments": "ulevel {user} {level}",
        }
    }
}
