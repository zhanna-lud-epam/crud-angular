import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './item.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ItemsDatabaseService } from './items-database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ItemsDatabaseService),
    MaterialModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ItemService],
})
export class AppModule { }
