export const commandsPerLevel = {
    "1": {
        "add": {
            "arguments": "add {emote/emote id}",
            "cooldown": 5,
            "description": "Add 7tv emote(s), searches with exact match. An id or link can also be provided. Use as:{alias} to add it as an alias, and use in:{channel} to add it in a different channel. If you're adding to a different channel and there is an emote in the message, it will add this emote.",
            "category": "7tv",
            "level": 1
        },
        "afk": {
            "arguments": "afk {message}",
            "cooldown": 5,
            "description": "Go AFK and a message, sends a message for how long you were AFK with the message when you type again.",
            "category": null,
            "level": 1
        },
        "b64": {
            "arguments": "b64 {encode/decode} {text}",
            "cooldown": 5,
            "description": "Encode text to base64 or decode text from base64.",
            "category": null,
            "level": 1,
            "alias": [
                "base64"
            ]
        },
        "cat": {
            "arguments": "cat",
            "cooldown": 3,
            "description": "Collect the fish your cat has caught. Your cat catches 1 fish every 30 minutes. See all minigame commands <a href='?category=minigame'>here</a>",
            "category": "minigame",
            "level": 1,
            "alias": [
                "catch",
                "cats"
            ]
        },
        "cdata": {
            "arguments": "cdata",
            "cooldown": 5,
            "description": "Gets the average for each type of cookie from @ThePositiveBot. This simply uses a lot of logs and is not updated in real time.",
            "category": null,
            "level": 1
        },
        "choice": {
            "arguments": "choice {option 1} {option 2}",
            "cooldown": 5,
            "description": "Pick one of the options from the provided options.",
            "category": null,
            "level": 1,
            "alias": [
                "pick"
            ]
        },
        "commands": {
            "arguments": "commands",
            "cooldown": 5,
            "description": "Show a list of the custom commands and their id in a channel.",
            "category": "settings",
            "level": 1,
            "alias": [
                "customcommands"
            ]
        },
        "editorfor": {
            "arguments": "editorfor {username}",
            "cooldown": 5,
            "description": "Get the 7tv channels a user is editor in. This also gives their 7tv profile links and the state if it's not accepted.",
            "category": "7tv",
            "level": 1
        },
        "emote": {
            "arguments": "emote {emote}",
            "cooldown": 5,
            "description": "Get some information about a 7tv emote from the channel and who and when added it.",
            "category": "7tv",
            "level": 1,
            "alias": [
                "7tvemote"
            ]
        },
        "emotelink": {
            "arguments": "emotelink {emote} {file type}",
            "cooldown": 5,
            "description": "Get the cdn link of a 7tv emote, the default size is 4x and default file type is avif.",
            "category": "7tv",
            "level": 1,
            "alias": [
                "el"
            ]
        },
        "epoch": {
            "arguments": "epoch {unix timestamp in s/ms}",
            "cooldown": 5,
            "description": "Get the relative time and the date for a unix timestamp.",
            "category": "time",
            "level": 1,
            "alias": [
                "unix"
            ]
        },
        "fish": {
            "arguments": "fish",
            "cooldown": 5,
            "description": "Fish for fish, base catch chance is 10% and chance for a special catch is 10%. See all minigame commands <a href='?category=minigame'>here</a>",
            "category": "minigame",
            "level": 1
        },
        "followage": {
            "arguments": "followage {username} {channel}",
            "cooldown": 5,
            "description": "See how long a user has been following a channel.",
            "category": "twitch",
            "level": 1,
            "alias": [
                "fa"
            ]
        },
        "fullunscramble": {
            "arguments": "fullunscramble {letters}",
            "cooldown": 5,
            "description": "Get all the possible words that can be made with the letters, use min:{number} or max:{number} to cap the length of the words.",
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
            "description": "See if a channel has PotatBotat and who and when it was added, and some other channel specific information.",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "haspotatbotat",
                "hasbotat"
            ]
        },
        "help": {
            "arguments": "help {command}",
            "cooldown": 5,
            "description": "Get help and the usage for a command. Also gives the alias(es), the level if it's not 1 and the help page for this command, or provides the command list if no command is provided.",
            "category": "bot",
            "level": 1
        },
        "hint": {
            "arguments": "hint",
            "cooldown": 5,
            "description": "Get a hint for the active trivia, this can either be 4 options or reveals ~20% of the letters.",
            "category": null,
            "level": 1
        },
        "ic": {
            "arguments": "ic",
            "cooldown": 5,
            "description": "Get the zero width space, an invisible character.",
            "category": null,
            "level": 1,
            "alias": [
                "invisiblecharacter"
            ]
        },
        "join": {
            "arguments": "join {channel}",
            "cooldown": 5,
            "description": "Join a twitch channel, you can only join your own channel.",
            "category": "bot",
            "level": 1
        },
        "leaderboard": {
            "arguments": "leaderboard {fish/catfood}",
            "cooldown": 5,
            "description": "Show the leaderboard, ranked prestige, rank and then either fish or catfood.",
            "category": "minigame",
            "level": 1,
            "alias": [
                "lb"
            ]
        },
        "level": {
            "arguments": "level {user} {level}",
            "cooldown": 5,
            "description": "Get the global level for a user, or set a level if you're a high enough level.",
            "category": "bot",
            "level": 1,
            "alias": [
                "ul",
                "ulevel",
                "userlevel"
            ]
        },
        "list": {
            "arguments": "list {list} {action} {arguments}",
            "cooldown": 5,
            "description": "If no list is provided it uses your main list. Actions: \n<b>See a list</b> \"<i>list {list}</i>\": See the items and indexes of a list \n<b>Show</b> \"<i>list show</i>\": Show all your lists \n<b>Create</b> \"<i>list {name} create</i>\": Create a list \n<b>Add</b> \"<i>list {list} add {item}</i>\": Add an item to a list \n<b>Remove</b> \"<i>list {list} remove {index}</i>\": Remove an item from a list with its index (the number of the item) \n<b>Delete</b> \"<i>list {list} delete</i>\": Delete one of your lists \n<b>Restore</b> \"<i>list {list} restore</i>\": Restore one of your deleted lists, only works if no new list with this name has been created",
            "category": null,
            "level": 1
        },
        "morse": {
            "arguments": "morse {text}",
            "cooldown": 5,
            "description": "Encode or decode a message to morse code, this only supports some symbols.",
            "category": null,
            "level": 1
        },
        "namechange": {
            "arguments": "namechange {username}",
            "cooldown": 10,
            "description": "See if a user has changed their username before. To get the dates of each name change add -dates.",
            "category": "twitch",
            "level": 1,
            "alias": [
                "nc"
            ]
        },
        "part": {
            "arguments": "part {channel}",
            "cooldown": 5,
            "description": "Part the bot from a channel, this can only be your own channel.",
            "category": "bot",
            "level": 1
        },
        "ping": {
            "arguments": "ping",
            "cooldown": 5,
            "description": "Get the uptime and some other basic information about the bot.",
            "category": "bot",
            "level": 1
        },
        "pipe": {
            "arguments": "pipe {command1} | {command2}",
            "cooldown": 5,
            "description": "Pipe multiple commands, seperate commands with \" | \", the previous result is used as the input for the next command, or provide indexes of the result to add them, if the index is not in the result, it adds nothing.",
            "category": "bot",
            "level": 1
        },
        "potatask": {
            "arguments": "potatask {prompt}",
            "cooldown": 15,
            "description": "This uses PotatBotat api to execute the ask command, please only use this if the channel does not have PotatBotat, help page: https://potat.app/help/ask.",
            "category": "potatbotat",
            "level": 1
        },
        "potatgpt": {
            "arguments": "potatgpt {prompt}",
            "cooldown": 15,
            "description": "This uses PotatBotat api to execute the gpt command, please only use this if the channel does not have PotatBotat, help page: https://potat.app/help/gpt.",
            "category": "potatbotat",
            "level": 1
        },
        "potatocooldowns": {
            "arguments": "potatocooldowns {user}",
            "cooldown": 5,
            "description": "Get the PotatBotat minigame cooldowns for a user, only use this if the channel does not have PotatBotat.",
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
            "description": "Get some extra farming stats for PotatBotat that you can't see with #stats, like gambling/quizes",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "pd",
                "potatodata",
                "potatostats",
                "poinfo"
            ]
        },
        "prestige": {
            "arguments": "prestige",
            "cooldown": 5,
            "description": "Prestige to get a 10% cat food multiplier and coins to buy upgrades.",
            "category": "minigame",
            "level": 1
        },
        "quiz": {
            "arguments": "quiz {quiz}",
            "cooldown": 5,
            "description": "Get the answer of a PotatBotat quiz.",
            "category": "potatbotat",
            "level": 1,
            "alias": [
                "answer"
            ]
        },
        "rank": {
            "arguments": "rank",
            "cooldown": 5,
            "description": "See stats about your current rank, like catch chance, multipliers capacity and rankup cost.",
            "category": "minigame",
            "level": 1
        },
        "rankup": {
            "arguments": "rankup",
            "cooldown": 5,
            "description": "Rankup to the next rank, this gives multiple bonuses.",
            "category": "minigame",
            "level": 1
        },
        "remove": {
            "arguments": "remove {emote/emote id}",
            "cooldown": 5,
            "description": "Remove 7tv emote(s) from the channel, if an id is provided it removes all aliases of that emote.",
            "category": "7tv",
            "level": 1
        },
        "rename": {
            "arguments": "rename {emote} {new alias}",
            "cooldown": 5,
            "description": "Rename a 7tv emote to a new alias.",
            "category": "7tv",
            "level": 1
        },
        "reply": {
            "arguments": "reply",
            "cooldown": 5,
            "description": "Change how the bot replies to your messages, reply: replies, ping: pings you, unping: pings you but adds an invisible character so you don't actually get pinged, noping: sends the base command response.",
            "category": "settings",
            "level": 1,
            "alias": [
                "mention",
                "unping",
                "noping"
            ]
        },
        "sell": {
            "arguments": "sell {amount}",
            "cooldown": 5,
            "description": "Sell fish for cat food, putting a percentage or 'all' also works.",
            "category": "minigame",
            "level": 1
        },
        "sellprice": {
            "arguments": "sellprice",
            "cooldown": 5,
            "description": "Get the current sellrate for fish, this ranges between 1-10 cat food and changes every 15 minutes.",
            "category": "minigame",
            "level": 1
        },
        "shop": {
            "arguments": "shop",
            "cooldown": 5,
            "description": "See all shop items, which can be bought using the 'buy' command",
            "category": "minigame",
            "level": 1
        },
        "stats": {
            "arguments": "stats {username}",
            "cooldown": 5,
            "description": "Get the minigame stats for a user.",
            "category": "minigame",
            "level": 1
        },
        "stvsa": {
            "arguments": "7tvsa {username}",
            "cooldown": 5,
            "description": "See how long a user has been subbed and when their sub ends, and some other infomation about the sub.",
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
            "description": "Get the name, capacity and link of the active 7tv set.",
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
            "description": "Get information about a 7tv user like roles, emote sets and editors. Putting a twitch id or 7tv id also works. To get the first user from a search add -query and to get by discord id add -discord.",
            "category": "7tv",
            "level": 1,
            "alias": [
                "stvu",
                "7tvuser",
                "7tvu"
            ]
        },
        "subage": {
            "arguments": "subage {user} {channel?}",
            "cooldown": 5,
            "description": "See how long a user has been subbed to a channel and some other information like streaks and tier.",
            "category": "twitch",
            "level": 1,
            "alias": [
                "sa"
            ]
        },
        "suggest": {
            "arguments": "suggest {suggestion/suggestion id}",
            "cooldown": 5,
            "description": "Suggest a feature, make a bug report or notify me about something. Check the suggestion's status with the id.",
            "category": "bot",
            "level": 1
        },
        "time": {
            "arguments": "time {timezone/country/country code}",
            "cooldown": 5,
            "description": "Get the date and time for a timezone, country or from a country code, defaults to CET.",
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
            "description": "Sends a random trivia question in chat, which can be answered by sending the answer in chat. Select a category or difficulty by adding category:{category} or difficulty:{easy/medium/hard}.",
            "category": null,
            "level": 1
        },
        "uid": {
            "arguments": "uid {user}",
            "cooldown": 5,
            "description": "Get ids of a user that are stored by the bot, and when the user was first seen.",
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
            "description": "Unscramble letters and get all the possible words.",
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
            "description": "Get basic information about a twitch user.",
            "category": "twitch",
            "level": 1,
            "alias": [
                "u"
            ]
        },
        "usercard": {
            "arguments": "usercard {user} {channel}",
            "cooldown": 5,
            "description": "Get the link for the usercard of a user in a channel.",
            "category": "twitch",
            "level": 1,
            "alias": [
                "uc"
            ]
        },
        "usertime": {
            "arguments": "usertime {username} / usertime set {timezone/country/country code}",
            "cooldown": 5,
            "description": "Get the time for a user if they have their timezone set, set a timezone with \"usertime set {timezone/country}\".",
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
            "description": "Get timed out for 1s and vanish from the chat.",
            "category": "twitch",
            "level": 1
        }
    },
    "2": {
        "ascii": {
            "arguments": "ascii {emote}",
            "cooldown": 5,
            "description": "Make ascii art of a twitch/7tv/bttv/ffz emote, if it's animated it uses the first frame.",
            "category": "7tv",
            "level": 2
        }
    },
    "3": {
        "ban": {
            "arguments": "ban {username}",
            "cooldown": 5,
            "description": "Ban a user from using any command in a channel, this includes answering trivias, AFK back messages and custom commands.",
            "category": "bot",
            "level": 3,
            "alias": [
                "blacklist",
                "block"
            ]
        },
        "banphrase": {
            "arguments": "banphrase {add/remoe} {banphrase/regex}",
            "cooldown": 5,
            "description": "Add a banphrase for first time chatters, this can be normal text or regex (enclose in /). If this matches any part of the message, they will be banned. This requires the bot to have mod.",
            "category": "bot",
            "level": 3
        },
        "command": {
            "arguments": "command {action} {command} {arguments}",
            "cooldown": 5,
            "description": "To use regex in command triggers, enclose it in / (e.g. /regex \\d/), to use ids, use id:{id}, to get the ids use commands -ids. \n<b>Add</b>: \"<i>command add {command} {response}</i>\", Add a custom command and the response \n<b>Show</b>: \"<i>command show {command}</i>\", Show settings, id and the response of a command \n<b>Edit</b>: \"<i>command edit {command} {new response}</i>\", Edit the response of a custom command \n<b>Trigger</b> \"<i>command trigger {command} {new trigger}</i>\": Change the trigger for a command \n<b>Options</b> \"<i>command options {command} {options}</i>\", Edit some settings of a custom commands, add a - before each setting (without a space), settings: \n\t-enable: enable a command \n\t-disable: disable a command \n\t-globlacooldown {seconds}: change the channel cooldown \n\t-usercooldown {seconds}: change the user cooldown \n\t-level {level}: change the required level to use the command \n\t-role {role}: change the role needed to use this command, roles are broadcaster, moderator, vip, subscriber, regular \n<b>Alias</b> \"<i>command alias {command} {add/remove} {alias(es)}</i>\", Add or remove aliases \n<b>Keyword</b> \"<i>command keyword {command} {add/remove} {keyword(s}</i>\", Add or remove keywords \n<b>Delete</b>: \"<i>command delete {command}</i>\", Delete a command",
            "category": "settings",
            "level": 3
        },
        "disable": {
            "arguments": "disable {command}",
            "cooldown": 5,
            "description": "Disable a command in a channel so it can no longer be used. Provide all as a command to disable all commands.",
            "category": "settings",
            "level": 3
        },
        "enable": {
            "arguments": "enable {command(s)}",
            "cooldown": 5,
            "description": "Enable a disabled command(s) so they can be used again. Provide all as a command to enable all commands.",
            "category": "settings",
            "level": 3
        },
        "pyramid": {
            "arguments": "pyramid {width} {word/sentence}",
            "cooldown": 60,
            "description": "Spam a word or sentence in a pyramid, the maximum width is 50.",
            "category": null,
            "level": 3
        },
        "spam": {
            "arguments": "spam {word/sentence} {count}",
            "cooldown": 30,
            "description": "Spam a word or sentence in the chat, max message count is 50.",
            "category": null,
            "level": 3
        },
        "unban": {
            "arguments": "unban {username}",
            "cooldown": 5,
            "description": "Unban a user from the bot in a channel so they can use commands again.",
            "category": "bot",
            "level": 3
        }
    },
    "4": {
        "trigger": {
            "arguments": "trigger {trigger}",
            "cooldown": 5,
            "description": "Set a custom trigger for the bot in a channel.",
            "category": "settings",
            "level": 4,
            "alias": [
                "prefix"
            ]
        }
    },
    "5": {
        "say": {
            "arguments": "say {message}",
            "cooldown": 0,
            "description": "Send a message through the bot.",
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
            "description": "Send a message as one of my alts.",
            "category": "bot",
            "level": 6
        },
        "py": {
            "arguments": "py {code}",
            "cooldown": 0,
            "description": "Execute python code.",
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
            "description": "Reload a command.",
            "category": "bot",
            "level": 6,
            "alias": [
                "restart"
            ]
        },
        "request": {
            "arguments": "request {method} {endpoint} {headers} {json} {params}",
            "cooldown": 0,
            "description": "Make an api request.",
            "category": null,
            "level": 6,
            "alias": [
                "api"
            ]
        },
        "sql": {
            "arguments": "sql {query}",
            "cooldown": 0,
            "description": "Executes an SQL query.",
            "category": "bot",
            "level": 6
        }
    }
}