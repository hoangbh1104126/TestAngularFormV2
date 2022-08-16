import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular100days';
  name = "Admin";
  num = 1;
  progress = 50;
  checked = true;
  userName = "Test";

  GetPass(password : string): void{
    alert("Your password is: " + password);
    alert("Bye!");
  }

  note = ['First note: Hello world!'];

  addNote(newNote: string) {
    this.note.push(newNote);
    this.num++;
  }

  deleteNote(delNote : string){
    let check : number = 0;
    const index = this.note.indexOf(delNote);
    if(index !== -1){
      this.note.splice(index, 1);
      console.log("Remove note success!");
    }
    this.num--;
}
}
