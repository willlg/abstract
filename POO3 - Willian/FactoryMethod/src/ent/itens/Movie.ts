import Item from "./interface/Item"

export default class Movie implements Item{
    start(): void {
        this.getDescription()
        console.log("Filme chegou")
    }
    getDescription(): void {
        console.log("Filme foi")
    }

}