import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coffee } from '../../../Coffee';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @Input() selectedCoffee?: Coffee;
  @Input() showModal: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedCoffee);
  }

  submitModalForm() {
    console.log('hi');
  }
}
