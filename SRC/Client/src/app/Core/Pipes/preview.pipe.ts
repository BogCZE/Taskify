import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(text: string, length?: number): any {
    if (text.length >= length) {
      return text.substr(0, length - 3 | 97).concat(" ...");
    }
    return text;
  }

}
