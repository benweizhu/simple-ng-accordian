import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpansionPanelService {

  private panels: any[] = [];

  constructor(private http: HttpClient) { }

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
