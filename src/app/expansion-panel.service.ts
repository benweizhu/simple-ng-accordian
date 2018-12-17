import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpansionPanelService {

  private panels: any[] = [];

  constructor() { }

  add(panel: any) {
    panel && this.panels.push(panel);
  }

  remove(panel: any) {
    this.panels = this.panels.filter(x => x !== panel);
  }

  fetchAndExpand() {
    console.log('fetchAndExpand')
  }
}
