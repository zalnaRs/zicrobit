type App = {
    id: string;
    label: string;
    render?: () => void;
    background?: () => void;
}

namespace UI {
    export const apps: App[] = [];
    export let currentApp = "menu";

    export const exit = () => currentApp = "menu";

    export const init = () => {
        basic.forever(() => {
            render();

            input.onLogoEvent(TouchButtonEvent.LongPressed, () => exit())
        
            apps.forEach(v => {
                if (v.background) v.background()
            })
        });
    }

    export const registerApp = 
        (
            id: string, 
            label: string,
            render?: () => void,
            background?: () => void,
            closeOnPig?: boolean
        ) => {
            apps.push({
                id,
                label,
                render,
                background: () => {
                    if (closeOnPig) {
                        if (input.logoIsPressed()) UI.exit(); 
                    } 
                    background();
                }
            });
        }

    let selectedApp = 0;
    const menu = () => {
        const app = apps[selectedApp];

        input.onButtonPressed(Button.A, () => {
            if (selectedApp === 0) {
                selectedApp = apps.length - 1;
            } else {
                selectedApp--;
            }
        })
        input.onButtonPressed(Button.B, () => {
            if (selectedApp === apps.length - 1) {
                selectedApp = 0;
            } else {
                selectedApp++;
            }
        })
        input.onButtonPressed(Button.AB, () => {
            currentApp = app.id;
        })

        basic.showString(app.label);
    }

    export const render = () => {
        if (currentApp === "menu") {
            menu();
        } else {
            apps.forEach((v) => {
                if (v.id === currentApp) v.render();
            });
        }
    }
}