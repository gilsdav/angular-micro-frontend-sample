import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  styleUrls: ['./coucou.component.scss']
})
export class CoucouComponent implements OnInit {

  baseAppUrl: string;

  constructor() {
    this.baseAppUrl = `/${environment.baseAppUrl}`;
    console.log('coucou base', this.baseAppUrl);
  }

  ngOnInit() {
  }

}
