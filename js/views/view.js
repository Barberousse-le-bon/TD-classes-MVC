import { Observer } from "../pattern/observer";



export class View extends Observer{



    #controller;
    
    
    constructor(Controller){


        this.#controller=Controller;

        let incrementer = document.querySelector("btn-increment");
        incrementer.addEventListener('click', this.notify);
        this.#controller.incrementCounter();
        
    }

    notify(){

        this.#controller.notify();
        
        

    }






}