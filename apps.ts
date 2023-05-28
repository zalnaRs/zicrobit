// #region stepCounter
let steps = 0;
UI.registerApp('steps', 'S', 
() => {
    basic.showNumber(steps);
    UI.exit();
}, 
() => {
    input.onGesture(Gesture.Shake, () => {
        steps += 1
    })
});
//const syncSteps = (_steps: number) => steps = _steps; 
// #endregion

// #region soundLevel
let soundLevel = 0;
UI.registerApp('lightlevel', 'L',
    () => {
        soundLevel = input.soundLevel();
        basic.showNumber(soundLevel);
        
    });
// #endregion

// #region lightlevel
let lightLevel = 0;
UI.registerApp('lightlevel', 'L',
    () => {
        lightLevel = input.lightLevel();
        basic.showNumber(lightLevel);
        UI.exit();
    });
// #endregion


// #region reset
UI.registerApp('reset', 'R',
() => {
    control.reset();
})