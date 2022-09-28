import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  bookList : Book[] = [];
  selectedBook : Book = {} as Book // Typecaste 
  searchValue : string= "" ;

  constructor() { }

  ngOnInit(): void {
    this.bookList.push({bookId:1, bookName:"Book1", bookAuthor:"Author1", bookPrice:100, bookImage:'./assets/Images/1.jpg'})
    this.bookList.push({bookId:2, bookName:"Book2", bookAuthor:"Author2", bookPrice:400, bookImage:'./assets/Images/2.jpg'})
    this.bookList.push({bookId:3, bookName:"Book3", bookAuthor:"Author3", bookPrice:600, bookImage:'./assets/Images/3.jpg'})
    this.bookList.push({bookId:4, bookName:"Book4", bookAuthor:"Author4", bookPrice:600, bookImage:'./assets/Images/4.jpg'})
    this.bookList.push({bookId:5, bookName:"Book5", bookAuthor:"Author5", bookPrice:300, bookImage:'./assets/Images/5.jpg'})
    this.bookList.push({bookId:6, bookName:"Book6", bookAuthor:"Author6", bookPrice:500, bookImage:'./assets/Images/6.jfif'})
    this.bookList.push({bookId:7, bookName:"Book7", bookAuthor:"Author7", bookPrice:600, bookImage:'./assets/Images/7.jpg'})
    this.bookList.push({bookId:8, bookName:"Book8", bookAuthor:"Author8", bookPrice:300, bookImage:'./assets/Images/8.jpg'})
    this.bookList.push({bookId:9, bookName:"Book9", bookAuthor:"Author9", bookPrice:200, bookImage:'./assets/Images/9.jpg'})
    this.bookList.push({bookId:10, bookName:"Book10", bookAuthor:"Author10", bookPrice:600, bookImage:'./assets/Images/10.jpg'})
  }
  onDetailClick(bk: Book){
    this.selectedBook = bk;


  }
  onAddClick(bk: Book){
    this.bookList.push(bk);
    alert("added")
  }
}
