import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExpansionPanelService } from './expansion-panel.service';
import { Item } from './item';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {

  @Input() id: string;

  private expanded: Boolean = false;

  private item: Item;

  constructor(private expansionPanelService: ExpansionPanelService) { }

  ngOnInit() {
    this.expansionPanelService.add(this);
  }

  ngOnDestroy(): void {

  }

  toggle() {
    if (!this.item) {
      this.expansionPanelService.fetchOrder('').subscribe((response) => {
        console.log(response);
      })
    }
    this.expanded = !this.expanded;
  }
}
