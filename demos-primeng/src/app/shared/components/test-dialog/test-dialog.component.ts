import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {
  public displayModal = false;
  constructor() { }

  ngOnInit() {
  }
  showModalDialog() {
    this.displayModal = true;
  }

}
