CODO.setServoMotor(AnalogPin.P12, 0)
basic.forever(function () {
    if (CODO.buttonState(DigitalPin.P14) == 1) {
        CODO.ledState(DigitalPin.P13, CODO.OnOff.On)
        CODO.setServoMotor(AnalogPin.P12, 90)
    }
})
