import Client from "./clients/Client";
import NineNineFactory from "./factories/NineNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import company from "./vehicles/consts/company";

const currentCompany = company.UBER;
let factory! : ITransportFactory;
switch(currentCompany){
    case company.UBER:
        factory = new UberFactory();
        break;
    case company.NINENINE:
        factory = new NineNineFactory();
        break;
    default :
     console.log("Companhia não definida!");
}

const client = new Client(factory);
client.startRoute();