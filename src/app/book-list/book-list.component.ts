import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  cols: number = 3;

  bookList: Book[] = [ new Book('Book 0', 'Description for Book 0', 123),
      new Book('Book 1', 'Description for Book 1', 13),
      new Book('Book 2', 'Description for Book 2', 123),
      new Book('Book 3', 'Description for Book 3', 1243),
      new Book('Book 4', 'Description for Book 4', 123),
      new Book('Book 5', 'Description for Book 5', 456),
      new Book('Book 6', 'Description for Book 6', 17),
      new Book('Book 7', 'Description for Book 7', 123),
      new Book('Book 8', 'Description for Book 8', 23),
      new Book('Book 9', 'Description for Book 9', 153)
    ];

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]).subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 2;
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 3;
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 4;
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = 5;
        }
      });
    }

}
