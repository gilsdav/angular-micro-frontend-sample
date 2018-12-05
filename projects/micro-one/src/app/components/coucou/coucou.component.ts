import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  styleUrls: ['./coucou.component.scss']
})
export class CoucouComponent implements OnInit {

  baseAppUrl: string;

  constructor(private route: ActivatedRoute) {
    console.log('coucou base');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('query param: ', params['test']);
    });
  }

}
