
export class Counter
{
    #counter;


    constructor(){

        this.#counter=0;

    }


    get counter(){

        return this.#counter;
    }


    incrementValue(){

        this.#counter=parseInt(this.#counter)+1;

        return this.#counter;


    }


    decrementValue(){

        this.#counter=parseInt(this.#counter)-1;
        return this.#counter;


    }

}