import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  newItem: Item;

  constructor(private router: Router, private itemService: ItemService) {

  }

  ngOnInit() {
    this.itemService.getItems().then(items => this.items = items);
    this.newItem = new Item();
  }

  createItem(item: Item): void {
    this.itemService.createItem(item)
      .then(item => {
        this.items.push(item);
      });
  }

  updateItem(item: Item): void {
    this.itemService.updateItem(item);
    this.newItem = new Item();
  }
  showInfo(item: Item): void {
    this.newItem = item;

  }
  removeItem(item: Item): void {
    this.itemService
      .removeItem(item)
      .then(() => {
        this.items = this.items.filter(h => h !== item);
        if (this.selectedItem === item) { this.selectedItem = null; }
      });
  }
}
