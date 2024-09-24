import { Component, OnInit } from '@angular/core';
import { ItemService } from'../item.service';

@Component({
  selector: 'app-item-list',
  
  
  templateUrl: './item-list.component.html',
  
})
export class ItemListComponent implements OnInit
{
  items: string[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

}
