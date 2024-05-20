import { Component } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, NgFor, CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
products = [
{id: 1, name: "cola", price: "110", description: "water", color: "#CD5C5C"},
{id: 2, name: "bread", price: "120", description: "food", color: "#00FF00"},
{id: 3, name: "ball", price: "130", description: "sport/toy", color: "#DC143C"}
];

descr: string = "";
descriptionShow(index: number) {
  this.descr = this.products[index].description;
}
sale: number = 0;
flag: boolean = true;

discount(index: number){
this.sale = +this.products[index].price;
this.sale *= 0.85;
this.flag != this.flag;
}

getPrice(index: number){
  return this.products[index].price.toString();
}


}
