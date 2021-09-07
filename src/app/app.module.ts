import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { FulltreeComponent } from './fulltree/fulltree.component';

@NgModule({
  imports:      [ BrowserModule, TreeModule ],
  declarations: [ AppComponent, FulltreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 
