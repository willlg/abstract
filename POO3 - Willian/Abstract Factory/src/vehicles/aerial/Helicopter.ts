import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros embarcados! Ligando hélices!")
    }
    checkWind(): void {
        console.log("Helicóptero: Ventos a 22km/h sudoeste, ok")
    }
}