input.onButtonPressed(Button.A, function () {
    if (flag == 1) {
        flag = 0
    } else {
        flag = 1
    }
})
let flag = 0
basic.showLeds(`
    . . . . .
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
    if (flag == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(700)
    }
})
