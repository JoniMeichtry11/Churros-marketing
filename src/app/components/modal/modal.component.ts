import { Component, Input, OnDestroy } from '@angular/core';
import { ModalType } from '../../models';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnDestroy {
  @Input() modalType: ModalType = ModalType.SCHEDULES;
  showModal: boolean = false;
  public ModalType = ModalType;
  private subscriptionModal: Subscription;

  constructor(
    private modalService: ModalService,
  ) {
    this.subscriptionModal = this.modalService.showModal$.subscribe(
      (showModal: boolean) => (this.showModal = showModal)
    );
  }

  ngOnDestroy() {
    this.subscriptionModal.unsubscribe();
  }
}
