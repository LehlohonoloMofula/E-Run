import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Errand } from '../errand'
import { Alert } from '../../shared/alert'
import { ErrandsService } from '../errands.service'

@Component({
  selector: 'app-errand-details',
  templateUrl: './errand-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .modal-bottom-right .modal-content .modal-body {
    border-radius:0;
  }}
`]
})
export class ErrandDetailsComponent implements OnInit {
  @Input() errand: Errand;
  @Output() reloadItems = new EventEmitter();
  title: "Errand";
  alert: Alert;
  constructor(private ErrandsServices: ErrandsService, 
    public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.errand = null;
    this.reloadItems.emit({ event: event, actionResult: this.alert, });
    this.modal.close("Submit");
  }

}
