commands = {
    "1": {
        "bot": {
            "arguments": "bot",
            "cooldown": 5,
            "description": "Gives a small description of the bot"
        },
        "b64": {
            "arguments": "b64 {encode/decode} {text}",
            "cooldown": 5,
            "description": "Encode/decode base64",
            "alias": [
                "base64"
            ]
        },
        "cdata": {
            "arguments": "cdata",
            "cooldown": 5,
            "description": "Gets an estimated chance for each cookie roll based on logs for @ThePositiveBot, this is not updated in real time"
        },
        "choice": {
            "arguments": "choice {option 1} {option 2}",
            "cooldown": 5,
            "description": "Pick a random option form the provided options",
            "alias": [
                "pick"
            ]
        },
        "commands": {
            "arguments": "commands",
            "cooldown": 5,
            "description": "Show a list of custom commands in the current channel",
            "alias": [
                "customcommands"
            ]
        },
        "emotelink": {
            "arguments": "emotelink {emote} {file type}",
            "cooldown": 5,
            "description": "Returns the 7tv cdn link of the specified 7tv emote",
            "alias": [
                "el"
            ]
        },
        "epoch": {
            "arguments": "epoch {unix timestamp in s/ms}",
            "cooldown": 5,
            "description": "Returns date and time and relative time",
            "alias": [
                "unix"
            ]
        },
        "followage": {
            "arguments": "followage {username}",
            "cooldown": 5,
            "description": "See how long someone has been following the current channel",
            "alias": [
                "fa"
            ]
        },
        "fullunscramble": {
            "arguments": "fullunscramble {letters}",
            "cooldown": 5,
            "description": "Returns all possible words that can be made using the provided letters",
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
            "alias": [
                "haspotatbotat"
            ]
        },
        "help": {
            "arguments": "help {command}",
            "cooldown": 5,
            "description": "Returns information about a command, or a list of commands is no command was provided"
        },
        "ic": {
            "arguments": "ic",
            "cooldown": 5,
            "description": "Returns the zero width space, which is an invisible character that can be sent on twitch",
            "alias": [
                "invisiblecharacter"
            ]
        },
        "level": {
            "arguments": "level {user} {level}",
            "cooldown": 5,
            "description": "Set or return a users user level",
            "alias": [
                "ul",
                "ulevel",
                "userlevel"
            ]
        },
        "list": {
            "arguments": "list {list} add/remove {item}",
            "cooldown": 5,
            "description": "Add or remove an item from the list, if no list is provided it goes in the main list"
        },
        "morse": {
            "arguments": "morse {text}",
            "cooldown": 5,
            "description": "Encode/decode morse code, decode needs to be the same format as encode returns"
        },
        "namechange": {
            "arguments": "namechange {username}",
            "cooldown": 5,
            "description": "Get the name change history of a user, add -dates to get the date for each namechange",
            "alias": [
                "nc"
            ]
        },
        "ping": {
            "arguments": "ping",
            "cooldown": 5,
            "description": "Returns basic information about the bot"
        },
        "pipe": {
            "arguments": "pipe {command1} | {command2}",
            "cooldown": 5,
            "description": "Execute multiple commands in an order, seperate commands with \" | \", the result of the previous command is the input for the next command, or use indexes like {1} {1+} {+1} anywhere in the command"
        },
        "potatocooldowns": {
            "arguments": "potatocooldowns {user}",
            "cooldown": 5,
            "description": "Get @PotatBotat (potat.app) cooldowns",
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
            "alias": [
                "answer"
            ]
        },
        "stvsa": {
            "arguments": "7tvsa {username}",
            "cooldown": 5,
            "description": "Get 7tv subscription data",
            "alias": [
                "7tvsa",
                "7tvsubage"
            ]
        },
        "stvset": {
            "arguments": "stvset {channel}",
            "cooldown": 5,
            "description": "Get data about the active 7tv set",
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
            "alias": [
                "stvu",
                "7tvuser",
                "7tvu"
            ]
        },
        "suggest": {
            "arguments": "suggest {suggestion/suggestion id}",
            "cooldown": 5,
            "description": "Suggest a feature to the bot or make a bug report, or check the status of a suggestion through the id"
        },
        "time": {
            "arguments": "time {timezone/country/country code}",
            "cooldown": 5,
            "description": "Get the current date and time from a timezone or country, defaults to CET",
            "alias": [
                "timezone",
                "tz"
            ]
        },
        "uid": {
            "arguments": "uid {user}",
            "cooldown": 5,
            "description": "Get the ids of a user",
            "alias": [
                "id",
                "userid"
            ]
        },
        "unscramble": {
            "arguments": "unscramble {letters}",
            "cooldown": 5,
            "description": "Get all possible words using all of the letters once.",
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
            "alias": [
                "u"
            ]
        },
        "usercard": {
            "arguments": "usercard {user} {channel}",
            "cooldown": 5,
            "description": "Get the usercard link of a user in a channel",
            "alias": [
                "uc"
            ]
        },
        "usertime": {
            "arguments": "usertime {username} / usertime {set} {timezone/country/country code}",
            "cooldown": 5,
            "description": "Returns the current time and timezone for a user, this is manually set by me",
            "alias": [
                "utime",
                "ut"
            ]
        },
        "vanish": {
            "arguments": "vanish",
            "cooldown": 5,
            "description": "Get timed out for 1s to delete all your messages"
        }
    },
    "2": {
        "ascii": {
            "arguments": "ascii {emote}",
            "cooldown": 5,
            "description": "Make a shit ascii art of a 7tv emote"
        }
    },
    "3": {
        "add": {
            "arguments": "add {emote}",
            "cooldown": 0,
            "description": "Add a 7tv emote, uses exact match query"
        },
        "command": {
            "arguments": "command add/edit {trigger} {response} / command delete {trigger} / command options {trigger} {flags} (flags: -ucd {usercd}, -gcd {globalcd}, -enable/disable, -mod, -vip, -sub, -level {userlevel}) / command alias/keyword add/remove {keyword} / command show",
            "cooldown": 5,
            "description": "add: add a custom command - edit: edit a custom command - delete: delete a custom command - options: change settings of a custom command (like level or cooldown) - alias/keyword: add a alias/keyword to a custom command - show: show the raw response of a custom command"
        },
        "disable": {
            "arguments": "disable {command}",
            "cooldown": 5,
            "description": "Disable a command in the current channel"
        },
        "enable": {
            "arguments": "enable {command}",
            "cooldown": 5,
            "description": "Enable a command in the current channel"
        },
        "pyramid": {
            "arguments": "pyramid {width} {word/sentence}",
            "cooldown": 5,
            "description": "Send a word or sentence in a pyramid"
        },
        "remove": {
            "arguments": "remove {emote}",
            "cooldown": 0,
            "description": "Remove a 7tv emote from the current set"
        },
        "spam": {
            "arguments": "spam {word/sentence} {amount}",
            "cooldown": 0,
            "description": "Spam a word or sentence, max amount is 50"
        }
    },
    "4": {
        "part": {
            "arguments": "part {channel}",
            "cooldown": 0,
            "description": "Part a channel"
        },
        "trigger": {
            "arguments": "trigger {trigger}",
            "cooldown": 5,
            "description": "Set a custom trigger"
        }
    },
    "5": {
        "join": {
            "arguments": "join {channel}",
            "cooldown": 0,
            "description": "Join a channel"
        },
        "say": {
            "arguments": "say {message}",
            "cooldown": 0,
            "description": "Make the bot send anything",
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
            "description": "Say something through one of my alts"
        },
        "download": {
            "arguments": "download {emote} {file type}",
            "cooldown": 0,
            "description": "Download a 7tv emote on my pc"
        },
        "py": {
            "arguments": "py {code}",
            "cooldown": 0,
            "description": "Executes python code",
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
            "alias": [
                "restart"
            ]
        },
        "request": {
            "arguments": "request {method} {endpoint} {headers} {json} {params}",
            "cooldown": 0,
            "description": "Make an api request",
            "alias": [
                "api"
            ]
        }
    }
}