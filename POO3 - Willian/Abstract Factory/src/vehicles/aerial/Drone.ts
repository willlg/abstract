import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Drone: Carga Coletada! Ligando hélices!")
    }
    checkWind(): void {
        console.log("Drone: Ventos a 12km/h leste, ok!")
    }

}