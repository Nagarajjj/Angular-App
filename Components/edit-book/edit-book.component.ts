import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  foundbk : Book = {} as Book ; 
  bkId: any;

  
  constructor(private bookService : BookService, private activatedRoute :
   ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map) =>{
    this.bkId = map.get("id");
    this.bookService.getBooks(parseInt(this.bkId)).subscribe((data:Book)=>{
    this.foundbk =data;
     } )
    })
  }
onsubmit(){
  debugger;
  this.bookService.updateBook(this.foundbk).subscribe((data)=>{
    alert("updated");
    alert(data);
  })
}
}
