import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() bookDetails : Book ={} as Book
  constructor() { }

  ngOnInit(): void {
  }

}
