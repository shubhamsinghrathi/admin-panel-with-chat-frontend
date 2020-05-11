import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  userId: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params.userId || null;
    });
  }

  ngOnInit(): void {
  }

}
