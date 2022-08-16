import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  @Input() name !: string;
  @Input() password : string = "password";
  @Input() num : number | string | undefined;
  @Output() newNoteEvent = new EventEmitter<string>();
  @Output() delNoteEvent = new EventEmitter<string>();
  @ViewChild('newNote') newNote !: ElementRef;
  //Add @ViewChildren!!

  addNewNote(value : string): void{
    if(value !== '')
      this.newNoteEvent.emit(value);
    this.newNote.nativeElement.value = '';
  }

  count = 0;

  constructor() {
    alert("Component create!");
  }

  ngDoCheck() {
    this.count++;
    console.log("Changed!");
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    alert("Component destroy ...");
    alert("Bye!");
  }

  onSubmit(){
    let check = false;
    if(this.name === ''){
      alert("Enter your name first!");
      check = true;
    }
    if(this.password === ''){
      alert("Type your pass!");
      check = true;
    }
    if(!check){
      alert(this.name + "'s new password is: " + this.password);
    }
  }

  printProfile(){
    alert("Your name: " + this.name + "\nYour password: " + this.password + "\nYou have " + this.num + " note(s)\nBye!" );
  }
}
