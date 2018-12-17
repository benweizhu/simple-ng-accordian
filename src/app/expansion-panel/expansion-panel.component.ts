import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExpansionPanelService } from './expansion-panel.service';
import { Order } from './order';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {

  @Input() id: string;

  private expanded: Boolean = false;

  private order: Order;

  constructor(private expansionPanelService: ExpansionPanelService) { }

  ngOnInit() {
    this.expansionPanelService.add(this);
  }

  ngOnDestroy(): void {

  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
