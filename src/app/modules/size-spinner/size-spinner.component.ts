import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-spinner',
  templateUrl: './size-spinner.component.html',
  styleUrls: ['./size-spinner.component.scss']
})
export class SizeSpinnerComponent implements OnInit {
  showSpinner: boolean = false;

  constructor() { }

  public loadData(){
    this.showSpinner = true;
    setTimeout(() => { this.showSpinner =false;}, 5000);
  }

  ngOnInit() {
  }

}
