// To import component and OnInit modules
import{Component,OnInit,Input} from '@angular/core';
// decorate component
@Component({
selector:"child-app",
templateUrl:"./childComponent.html"
})

export class ChildComponent implements OnInit{

    @Input() title;
    // public variable
    childTitle:string;

    constructor(){

        ngOnInit(){
            this.childTitle=this.title;
        }
    }
}

