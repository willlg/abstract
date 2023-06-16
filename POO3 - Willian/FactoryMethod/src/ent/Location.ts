import Item from "./itens/interface/Item";

export default abstract class Location{
    startItem(): void{
        const item = this.createItem();
        item.start();
    }

    protected abstract createItem(): Item;
}