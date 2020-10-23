import { Component, OnInit } from '@angular/core';
import { Errand } from '../errand';
import { ErrandsService } from '../errands.service';


@Component({
  selector: 'app-errand-create',
  templateUrl: './errand-create.component.html',
  styleUrls: ['./errand-create.component.css']
})
export class ErrandCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
