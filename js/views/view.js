import { Observer } from "../pattern/observer.js";



export class View extends Observer{



    #controller;
    
    
    constructor(controller){

        super();
        this.#controller=controller;
        controller.addObserver(this); // ajouté a la liste pour etre notifié
        let incrementer = document.querySelector("#btn-increment");
        incrementer.addEventListener('click', ()=>this.#controller.incrementCounter()); // faire le click
        
        let decrementer = document.querySelector("#btn-decrement");
        decrementer.addEventListener('click', ()=>this.#controller.decrementCounter()); // faire le click
        
        
    }

    notify(){
        let value= document.querySelector("#txt-counter");
        value.innerHTML = this.#controller.getCountervalue();

    }






}