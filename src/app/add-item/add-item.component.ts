import { Component } from '@angular/core';
import { ItemService } from'../item.serivie';

@Component({
  selector: 'app-add-item',
  
  
  templateUrl: './add-item.component.html',
  
})
export class AddItemComponent {
  newItem: string =";"

  constructor(private itemService: ItemService) {}

  addItem(): void{
    if (this.newItem) {
      this.itemService.addItem(this.newItem);
      this.newItem = ";"
    }
  }

}
