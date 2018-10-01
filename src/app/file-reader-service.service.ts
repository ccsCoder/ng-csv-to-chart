import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from "rxjs";
import { fromEvent } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileReaderServiceService {

  constructor() { }

  /**
   * readCSVContents
   */
  public readCSVContents(file: File) {
    let reader: FileReader = new FileReader();
    
    reader.readAsText(file);
    return Observable.create(observer=> {
      reader.onloadend = () => {
        observer.next();
        observer.complete();
      }
    });
  }

}
