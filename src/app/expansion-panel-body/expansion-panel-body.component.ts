import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-body',
  template: `<ng-content *ngIf="expanded"></ng-content>`,
  styleUrls: ['./expansion-panel-body.component.scss']
})
export class ExpansionPanelBodyComponent implements OnInit {

  @Input() expanded: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
