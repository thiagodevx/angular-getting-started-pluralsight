import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
