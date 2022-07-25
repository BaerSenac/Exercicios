//Prototype

function Microfone(color = "black") {
    this.color = color;
    this.isOn = true;
}

Microfone.prototype.toggleOnOff = function () {
    if (this.isOn) {
        console.log("desligar");
    } else {
        console.log("desligar");
    }
    this.isOn = !this.isOn;
};

const microfone = new Microfone();
const microfone2 = new Microfone("white");

microfone2.toggleOnOff();
microfone2.toggleOnOff();
microfone2.toggleOnOff();
