import {seguncasoListener} from "./generated/seguncasoListener.js";  

export class CustomseguncasoListener extends seguncasoListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }
}
