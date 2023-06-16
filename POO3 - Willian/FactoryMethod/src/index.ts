import Item from "./ent/itens/interface/Item";
import Game from "./ent/itens/Game";
import Movie from "./ent/itens/Movie";

declare var process;

let item: Item
if(process.argv.includes("--fifa")){
    item = new Game();
    item.start();
}else if(process.argv.includes("--barbie")){
    item = new Movie();
    item.start();
}else{
    console.log("Selecione o tipo de entretenimento!!")
}
