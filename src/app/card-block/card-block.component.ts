import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {

  @Input() name: string = "";
  @Input() id: number = 0;
  @Input() price: number = 0;
  @Input() description: string = "";
  @Input() color: string = "";
  @Input() index: number = 0; 
  @Output() onClicked = new EventEmitter<number>();

  descriptionShow() {
    this.onClicked.emit(this.index);
}



}
