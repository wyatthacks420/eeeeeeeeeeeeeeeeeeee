let sonar = 0
basic.showIcon(IconNames.Chessboard)
wuKong.setAllMotor(100, 100)
basic.forever(function () {
    sonar = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P0)
    if (sonar < 20 && sonar > 1) {
        wuKong.setAllMotor(50, -100)
        basic.pause(randint(0, 10))
    } else {
        wuKong.setAllMotor(100, 100)
    }
})
