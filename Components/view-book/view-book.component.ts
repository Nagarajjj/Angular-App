import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
bkId:any;
  selected : Book = {} as Book 

  constructor(private bookService : BookService, private activatedRoute:
    ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.bkId = map.get("id");
      if(this.bkId != null)
      this.bookService.getBooks(parseInt(this.bkId)).subscribe((data)=>{
          this.selected = data as Book; 
      })
    
  })

  }
}
