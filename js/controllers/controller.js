import { Notifier } from "../pattern/notifier";

export class Controller extends Notifier{



    #counter 

    constructor(){


        super();
    }

    incrementCounter(){

        super.notify();
    }

    decrementCounter(){

        super.notify();

    }



    getCountervalue(){



        
    }


}