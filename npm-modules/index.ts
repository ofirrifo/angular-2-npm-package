import { NgModule }      from '@angular/core';
import { MyComponent } from "./components/test.component";

@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyModule { }
