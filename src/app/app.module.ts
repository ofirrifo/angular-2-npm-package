import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MyModule } from "../../npm-modules/index";


@NgModule({
    imports: [BrowserModule, MyModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
