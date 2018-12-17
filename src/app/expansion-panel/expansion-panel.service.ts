import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpansionPanelService {

  private panels: any[] = [];

  private keepOneOpen: boolean = true;

  constructor(private http: HttpClient) { }

  toggle(panel: any) {
    panel.expanded = !panel.expanded;
    if (this.keepOneOpen) {
      this.panels.forEach((x) => {
        if (x !== panel && x.expanded) {
          x.expanded = false;
        }
      });
    }
  }

  add(panel: any) {
    panel && this.panels.push(panel);
  }

  remove(panel: any) {
    this.panels = this.panels.filter(x => x !== panel);
  }

  fetchOrder(url: string) {
    return this.http.get(url);
  }
}
