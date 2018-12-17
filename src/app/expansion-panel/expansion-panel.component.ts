import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExpansionPanelService } from './expansion-panel.service';
import { Item } from './item';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {

  @Input() orderNumber: string;

  @Input() itemNumber: string;

  @Input() expanded: boolean = false;

  private loading: boolean = true;

  private item: Item;

  constructor(private expansionPanelService: ExpansionPanelService) { }

  ngOnInit() {
    this.expansionPanelService.add(this);
    this.expansionPanelService.fetchOrder('https://raw.githubusercontent.com/benweizhu/simple-ng-custom-expansion-panel/master/src/data/201808084.json').subscribe((response: Item) => {
      this.item = response;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.expansionPanelService.remove(this);
  }

  toggle() {
    this.expansionPanelService.toggle(this);
    // this.expanded = !this.expanded;
  }
}
