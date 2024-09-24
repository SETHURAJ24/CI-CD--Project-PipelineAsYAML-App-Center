import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = [];

  getItems(): string[]{
    return this.items;
  }
}
