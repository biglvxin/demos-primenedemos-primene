import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-accordion',
  templateUrl: './test-accordion.component.html',
  styleUrls: ['./test-accordion.component.css']
})
export class TestAccordionComponent implements OnInit {
  public brands = [];
  public selectedCars2 = [];
  constructor() { }

  ngOnInit() {
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

}
