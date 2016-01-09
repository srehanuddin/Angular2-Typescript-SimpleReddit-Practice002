
import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import { NgFor } from "angular2/common" ;

@Component({
	selector: ' hello-world' ,
	template: `<div>
        Hello {{name}}
    </div>
    <ul>
        <li *ngFor="#name of names" > Hello {{ name }} </li>
    </ul>
    `
})
class HelloWorld {
    name: string;
    names: string[];
    
    constructor(){
        this.name = "Rehan";
        this. names = [ ' Ari ' , ' Carlos' , ' Felipe' , ' Nate' ];
    }
}

bootstrap(HelloWorld);