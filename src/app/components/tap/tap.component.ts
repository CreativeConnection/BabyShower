import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  @Input() label: string;
  @Input() active: boolean;

  constructor() {}

  ngOnInit(): void {}
}
