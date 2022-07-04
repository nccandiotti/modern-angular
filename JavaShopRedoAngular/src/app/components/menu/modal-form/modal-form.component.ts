import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coffee } from '../../../Coffee'; // interface
import { Subscription } from 'rxjs'; // subscription
import { CoffeeService } from '../../../services/coffee.service'; // service
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @Input() selectedCoffee?: Coffee;
  @Input() showModal: boolean = false;
  @Output() btnClick = new EventEmitter();
  subscription: Subscription;
  faXmark = faXmark;

  constructor(private coffeeService: CoffeeService) {
    this.subscription = this.coffeeService
      .onToggle()
      .subscribe((value) => (this.showModal = value));
  }

  ngOnInit(): void {
    console.log(this.selectedCoffee);
  }

  submitModalForm(e: Event) {
    e.preventDefault();
    console.log('hi');
  }

  toggleModal() {
    this.showModal = !this.showModal;
    this.coffeeService.toggleModal();
    console.log('showModal', this.showModal);
  }

  onClick() {
    this.btnClick.emit();
  }
}
