import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url :string = "http://localhost:44179/Books/All";


  constructor(private httpClient:HttpClient) { 


  }

  public getAllBooks() : Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.url);
  }

  public getBooks(id : number) : Observable<Book>{
    const tempUrl = 'http://localhost:44179/Books/'+id;
    return this.httpClient.get<Book>(tempUrl);
   
}

public updateBook(bk: Book): Observable<string>{
  const tempUrl = 'http://localhost:44179/Books' ; 
  return this.httpClient.put<string>(tempUrl, bk);
}
public addBook(bk: Book): Observable<string>{
  const tempUrl = 'http://localhost:44179/Books' ; 
  return this.httpClient.put<string>(tempUrl, bk);
}
}
