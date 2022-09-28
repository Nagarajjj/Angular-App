import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../Models/book';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Book[], args: string): Book[] {
    if (args == "")

      return inputData;

    else

      return inputData.filter((e) => e.bookName.toUpperCase().includes(args.toUpperCase()));
  }

}
