import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-bookmgr',
  templateUrl: './bookmgr.component.html',
  styleUrls: ['./bookmgr.component.css']
})
export class BookmgrComponent implements OnInit {
  bookList: Book[]=[];
  
  

  constructor(private bookServie: BookService) { }

  ngOnInit(): void {
    this.getAllBooksFromServer();

  }
  getAllBooksFromServer(){
    this.bookServie.getAllBooks().subscribe((data : Book[])=>
    {
      this.bookList=data
    })
  }


}
