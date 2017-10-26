import {Pipe, PipeTransform} from '@angular/core';
import {Brew} from './brew.model';

@Pipe({
  name: "level",
  pure: false
})


export class LevelPipe implements PipeTransform {


  transform(input: Brew[], level) {
    var output: Brew[] = [];
    if(level === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints < 1) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (level === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints > 1) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
