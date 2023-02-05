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
})
// #endregion

// #region reset
UI.registerApp('reset', 'R',
() => {
    control.reset();
})