import { Component, OnInit, Input } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ExpansionPanelService } from '../expansion-panel.service';

@Component({
  selector: 'app-expansion-panel-header',
  templateUrl: './expansion-panel-header.component.html',
  styleUrls: ['./expansion-panel-header.component.scss']
})
export class ExpansionPanelHeaderComponent implements OnInit {

  @Input() expanded: Boolean;

  constructor(
    private expansionPanelService: ExpansionPanelService
  ) { }

  ngOnInit() {
  }

  fetchAndExpand() {
    this.expansionPanelService.fetchAndExpand();
  }

}
