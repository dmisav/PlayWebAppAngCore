import { Component } from '@angular/core';

@Component({
  selector: "sample",
  templateUrl: "./sample.component.html",
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {
  public modifiedText: string = '';
  public sampleText: string = 'abc';

  whenclickIsDone() {
    this.modifiedText += this.sampleText
  }
}
