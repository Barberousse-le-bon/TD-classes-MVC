export class Notifier{



    #observers = [];

    addObserver(Observer){

        this.#observers.push(Observer);



    }

    notify(){

        this.#observers.forEach(element => {
            element.notify();
        });



    }





}