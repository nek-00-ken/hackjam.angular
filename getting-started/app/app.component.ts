import { Component } from '@angular/core';
import {mockBooks} from "./mocks/books";
import {mockCategories} from "./mocks/categories";
import Book from "./mocks/books";
import Category from "./mocks/categories";

@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})
export class AppComponent {
  books: Book [] = mockBooks;
  categories: Category [] = mockCategories;
  navClosed: Boolean = true;

  clicked() {
    console.log('Will be implemented in the next section');
  }

  search(){}

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
