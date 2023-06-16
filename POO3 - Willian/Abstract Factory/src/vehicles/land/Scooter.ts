import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        console.log("Scooter: Iniciando Trajeto...");
    }
    getCargo(): void {
        console.log("Scooter: Passageiro embarcado!");
    }
}