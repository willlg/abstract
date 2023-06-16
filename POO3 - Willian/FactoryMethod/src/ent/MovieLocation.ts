import Movie from "./itens/Movie";
import Item from "./itens/interface/Item";

export default class MovieLocation extends Location{

    protected createItem(): Item {
        return new Movie();
    }
}