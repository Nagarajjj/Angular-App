import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() emitter: EventEmitter<Book> = new EventEmitter<Book>()


  Book: Book = {} as Book;//represents the Emp to return to the Master

  constructor() { }

  ngOnInit(): void {
  }
  onAddClick() {
    this.emitter.emit(this.Book);//emit takes the arg of which obj which u r returning
  }
}



