import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
