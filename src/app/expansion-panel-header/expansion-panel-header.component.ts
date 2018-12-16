import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./expansion-panel-header.component.scss']
})
export class ExpansionPanelHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
