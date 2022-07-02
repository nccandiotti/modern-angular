import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  onCloseModal(event: Event) {
    this.showModal = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
