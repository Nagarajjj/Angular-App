import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CalcComponent } from './Components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MasterComponent } from './Components/master/master.component';
import { SearchPipe } from './Pipes/search.pipe';
import { DetailsComponent } from './Components/details/details.component';
import { AddComponent } from './Components/add/add.component';
import { BookmgrComponent } from './Components/bookmgr/bookmgr.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ViewBookComponent } from './Components/view-book/view-book.component';
import { EditBookComponent } from './Components/edit-book/edit-book.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

const routes : Routes = [
  {path:'', redirectTo: "Home", pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'Book/All', component: BookmgrComponent},
  {path:'Book/Add', component: AddBookComponent},
  {path:'Book/edit/:id', component: EditBookComponent},
  {path:'Book/view/:id', component: ViewBookComponent},

  {path:'Calc',component:CalcComponent},

  {path:'Master',component:MasterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalcComponent,
    MasterComponent,
    SearchPipe,
    DetailsComponent,
    AddComponent,
    BookmgrComponent,
    NavbarComponent,
    ViewBookComponent,
    EditBookComponent,
    AddBookComponent,
    SpinnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
