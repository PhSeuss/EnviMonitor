import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-envi',
  templateUrl: './envi.component.html',
  styleUrls: ['./envi.component.css']
})
export class EnviComponent implements OnInit {

  public foods ;
  foodString: String;
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
  }
  getFoods() {
    this._demoService.getFoods().subscribe(
      data => { this.foods = data;
        this.foodString = JSON.stringify(data)},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

}
