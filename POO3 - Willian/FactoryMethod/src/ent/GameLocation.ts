import Game from "./itens/Game";
import Item from "./itens/interface/Item";

export default class GameLocation extends Location{
    protected createItem(): Item {
        return new Game();
    }

}