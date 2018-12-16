import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./expansion-panel-body.component.scss']
})
export class ExpansionPanelBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
