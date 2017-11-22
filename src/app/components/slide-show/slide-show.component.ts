import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

images = {
  image1 : "assets/inside.jpg",
  image2 : "assets/chef.jpg",
  image3 : "assets/dish.jpg",
}
  constructor() { }

  ngOnInit() {
  }

}
