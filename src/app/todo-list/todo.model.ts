
import { Type } from '@angular/core';

export class Todo{
    id:number;
    label:string;

    constructor(id:number, label:string){
        this.id = id;
        this.label = label;
    }
}

export type Todos = Todo[];