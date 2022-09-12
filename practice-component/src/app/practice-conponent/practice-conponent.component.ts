import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-conponent',
  templateUrl: './practice-conponent.component.html',
  styleUrls: ['./practice-conponent.component.css']
})
export class PracticeConponentComponent  {

 public myId="testid";
 public isDisabled="true"; 
public test="testid";
public successClass="textsucess"
public hasError=false;
public isSpecial=true;
public message={
  "textsucess": !this.hasError,
  "textdanger":this.hasError,
  "text-special": this.isSpecial


} 
}
