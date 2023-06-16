import Item from "./interface/Item"

export default class Game implements Item{
    start(): void {
        this.getDescription()
        console.log("Game chegou")
    }
    getDescription(): void {
        console.log("Game foi")
    }

}