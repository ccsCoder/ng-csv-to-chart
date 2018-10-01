import { Component, OnInit } from '@angular/core';
import { FileReaderServiceService } from "../../file-reader-service.service";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})

export class FileUploaderComponent implements OnInit {

  constructor(private csvService : FileReaderServiceService) { }

  private fileInput:any;

  ngOnInit() {
  }

  private validate(files:FileList): boolean {
    for (let i = 0; i < files.length; i++) {
      let file:File = files.item(i);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      if (file.type !== 'text/csv') {
        return false;
      }
    }
    return true;

  }

  public onFileSelected(files: FileList) {
    if (this.validate(files) === true) {
      this.csvService.readCSVContents(files.item(0));
    } else {
      alert('Error: Please upload a CSV File !');
    }
  }

  public invokeFileSelector() {
    this.fileInput = document.querySelector("#hidden-input-upload");
    this.fileInput.click();
  }

}
