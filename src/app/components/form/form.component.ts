import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() showForm: boolean;
  @Output() onSendBuyer: EventEmitter<string> = new EventEmitter();
  formGif = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}

  closeForm() {
    this.showForm = false;
  }

  sendBuyer() {
    console.log("this.formGif.value.name",this.formGif.value.name);
    
    if (this.formGif.value.name) {
      this.onSendBuyer.emit(this.formGif.value.name);
    }
  }
}
