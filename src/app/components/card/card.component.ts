import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() buyer?: string;
  @Input() purchased: boolean;
  @Input() uuid?: string;
  @Output() onGif: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onGif.emit(this.uuid);
  }
}
