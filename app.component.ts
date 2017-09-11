import { Component ,ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* to create variables */

  title:string;
  firstName: string;
  lastName:string;
  
  ngOnInit(){
  this.title =  'Two-way Binding';
  this.firstName = 'Navita';
  this.lastName = 'Kamble'
 
}
/* function to create title and bind it to title */

createTitle(first,last){
  this.submitted=true;
  this.title=`firstName:${first} and lastName:"${last}"`;
}
}
    
  


