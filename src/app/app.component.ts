import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { TestformComponent } from './testform/testform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(TestformComponent) testForm !: QueryList<any>;

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.testForm.forEach(testForm => console.log(testForm));
  }

  title : string = 'angular100days';
  name : string = "Admin";
  num : number = 1;

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
