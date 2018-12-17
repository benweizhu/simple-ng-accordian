import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpansionPanelService {

  constructor() { }

  fetchAndExpand() {
    console.log('fetchAndExpand')
  }
}
