import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
