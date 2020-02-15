import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OutputDecoratorComponent,
    StockStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
