import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  setDate = true;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  formatLabel(value: number) {
    if (value >= 50) {
      return Math.round(value / 1);
    }

    return value;
  }
  constructor() { }

  ngOnInit() {
    console.log(this.startDate.value);
  }

}
