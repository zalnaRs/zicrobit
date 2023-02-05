
namespace Bluetooth {
    let options = { brightness: 100 };
    let data = { steps: steps, temp: input.temperature(), options };

    const syncBluetooth = () => {
        bluetooth.uartWriteString(`,${JSON.stringify(data)},`)
    }

    export const init = () => {
        bluetooth.startUartService();
        bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), () => {
            const _data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma));
            //data = JSON.parse(_data);

            if (_data == "1") {
                syncBluetooth()
            }
        })
        basic.forever(() => {
            basic.pause(5000);
            syncBluetooth();
        });
    }
}