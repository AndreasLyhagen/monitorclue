function Fallright () {
    if (unlocked == 1) {
        unlocked += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            `)
        basic.clearScreen()
        boxx = 4
        boxy = 3
        led.plot(boxx, boxy)
        radio.sendValue("xTarget", boxx)
        radio.sendValue("yTarget", boxy)
    }
}
function position (x: number, y: number) {
    led.unplot(xPosition, yPosition)
    xPosition = x
    yPosition = y
}
input.onGesture(Gesture.Shake, function () {
    Falldown()
})
input.onGesture(Gesture.TiltRight, function () {
    Fallright()
})
function Falldown () {
    if (unlocked == 0) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
        unlocked += 1
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "xPos") {
        position(value, yPosition)
    } else if (name == "yPos") {
        position(value, xPosition)
    } else if (name == "interact" && value == 1) {
        basic.showNumber(3)
    } else {
    	
    }
})
let boxy = 0
let boxx = 0
let unlocked = 0
let yPosition = 0
let xPosition = 0
radio.setGroup(1)
xPosition = 0
yPosition = 0
unlocked = 0
basic.forever(function () {
    led.plot(xPosition, yPosition)
})
