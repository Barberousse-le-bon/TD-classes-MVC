import { Notifier } from "../pattern/notifier";
import { Counter } from "../models/counter";


export class Controller extends Notifier{



    #counter = new Counter;

    constructor(){


        super();
    }

    incrementCounter(){

        this.#counter.incrementValue();
        super.notify();
        
    }

    decrementCounter(){

        this.#counter.decrementValue();
        super.notify();
    }



    getCountervalue(){



        
    }


}