import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpansionPanelService } from '../expansion-panel.service';

@Component({
  selector: 'app-expansion-panel',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {
  
  constructor(private expansionPanelService: ExpansionPanelService) { }

  ngOnInit() {
    this.expansionPanelService.add(this);
  }

  ngOnDestroy(): void {

  }
}
