import { validWords, letters } from "./words.js"

let input = "", guess = 0, messagecount = 0


function enableInputs() {
    $(document).keydown(type)
    $(".BACKSPACE").mouseup(removeLetter)
    $(".keyboard-button").mouseup((e) => { addLetter($(e.currentTarget).children(0).text()) })
    $(".ENTER").mouseup(enter)
}
function disableInputs() {
    $(document).off()
    $(".BACKSPACE").off()
    $(".keyboard-button").off()
    $(".ENTER").off()
}


function type(e) {
    let key = e.key.toUpperCase()

    if (!letters.includes(key)) { return }
    if (guess > 5) { return }

    if (key == "BACKSPACE") {
        removeLetter()
        return
    } else if (key == "ENTER") {
        enter()
        return
    } else {
        addLetter(key)
    }
}

function addLetter(key) {
    if (input.length >= 5) {
        return
    }

    let e = $(`.w${guess} > .l${input.length}`)
    e.text(key)
    e.addClass("typedLetterAnimation")
    e.addClass("typedLetter")
    input += key
}

function removeLetter() {
    if (input.length <= 0) {
        return
    }

    let e = $(`.w${guess} > .l${input.length-1}`)
    e.text("")
    e.removeClass("typedLetterAnimation")
    e.removeClass("typedLetter")
    input = input.slice(0, -1)
}

function enter() {
    if (input.length != 5) {
        showMessage("Not enough letters")
        return
    } else if (!validWords.includes(input.toLowerCase())) {
        showMessage("Not in word list")
        return
    }

    disableInputs()

    let inputLetters = $(`.w${guess}`).children()
    inputLetters.removeClass("typedLetterAnimation");

    let c = 0
    for (let i of inputLetters) {
        setTimeout(function () {
            $(i).addClass("filled")
        }, c*420);
        setTimeout(function () {
            let e = $(i)
            let letter = e.text()
            e.removeClass("typedLetter")
            let existingLetter = $(`.LETTER-${letter}`)
            if (existingLetter.length) {
                let row = existingLetter[0].attributes.row.value
                
                if (existingLetter.hasClass("wrong")) { e.addClass("wrong") }
                else if (existingLetter.hasClass("contains")) { e.addClass("contains") }
                else if (existingLetter.hasClass("right")) {
                    if (row == c) {e.addClass("right")}
                    else { e.addClass("contains") }
                }
            } else {
                e.addClass("wrong");
            }
            e.mouseup(clickLetter)
            e.addClass(`LETTER-${letter}`)
        }, c*420 + 250);

        c++
    }

    setTimeout(function (letters) {
        enableInputs()

        for (let i in letters) {
            $(`.${letters[i]}`).parent().addClass("wrong")
            $(".filled").removeClass("filled");
        }
    }, 2100, input);

    guess += 1
    input = ""
}

function clickLetter(e) {
    let element = $(e.currentTarget)
    let letter = $(`.${element.text()}`)
    let letters = $(`.LETTER-${element.text()}`)
    let row = element[0].attributes.row.value
    let lettersSameRow = $(`.LETTER-${element.text()}.l${row}`)

    if (element.hasClass("wrong")) {
        letters.removeClass("wrong")
        letters.addClass("contains")
        letter.parent().removeClass("wrong")
        letter.parent().addClass("contains")
    } else if (element.hasClass("contains")) {
        lettersSameRow.removeClass("contains")
        lettersSameRow.addClass("right")
        letter.parent().removeClass("contains")
        letter.parent().addClass("right")
    } else if (element.hasClass("right")) {
        letters.removeClass("right")
        letters.removeClass("contains")
        letters.addClass("wrong")
        letter.parent().removeClass("right")
        letter.parent().addClass("wrong")
    }
}


function showMessage(message) {
    let e = $(`.w${guess}`)
    if (!e.hasClass("animation-shake")) {
        e.addClass("animation-shake")

        setTimeout((e) => {
            e.removeClass("animation-shake")
        }, 650, e);
    }

    messagecount --
    $(".alert-container").append(`<div class="alert alert-${-messagecount}" style="order: ${messagecount};">${message}</div>`)
    setTimeout((n) => {
        console.log($(`.alert-${n}`))
        $(`.alert-${n}`).remove()
        console.log($(`.alert-${n}`))
    }, 1250, -messagecount);
}



function generateWordInputs() {
    let html = ""
    for (let i = 0; i < 6; i++) {
        html += `<div class="word w${i}">`
        for (let l = 0; l < 5; l++) {
            html += `<div class="letter l${l}" row="${l}"></div>`
        }
        html += `</div>`
    }
    $(".words").append(html)
}

generateWordInputs()
enableInputs()