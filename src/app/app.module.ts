import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//Import FormsModule

import { AppComponent } from'./app.component';
import { ItemListComponent } from'./item-list/item-list.component';
import { AddItemComponent } from'./add-item/add-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemListComponent,
        AddItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule // Add FormsModule here
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }