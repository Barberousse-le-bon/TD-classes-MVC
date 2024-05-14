import { Notifier } from "../pattern/notifier.js";
import { Counter } from "../models/counter.js";


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


        return this.#counter.counter;
        
    }


}