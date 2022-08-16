import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

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

  @ViewChildren(TestformComponent) testForm !: QueryList<TestformComponent>;
  @ViewChild('newNote', {read: ElementRef}) newNote !: ElementRef;

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
    //this.testForm.changes.subcribe(console.log);
  }

  ngOnDestroy() {
    alert("Component destroy ...");
    alert("Bye!");
  }

  onSubmit(pass : string){
    let check = false;
    this.password = pass;
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
