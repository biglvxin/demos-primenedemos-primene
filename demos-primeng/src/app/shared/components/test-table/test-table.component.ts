import { Component, OnInit } from '@angular/core';
import { ColunmInterface } from '../../model/column';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  public testDataColunm: Array<ColunmInterface> = [];
  public testData = [];
  public brands = [];
  public colors = [];
  constructor() { }

  ngOnInit() {
    this.testDataColunm = [
      {
        colunmId: 'a',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'b',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'c',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'd',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'e',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'f',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'g',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'h',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'i',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'j',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'k',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'm',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
      {
        colunmId: 'n',
        colunmName: 'PubnId',
        sort: true,
        filter: true,
        width: 20,
        isHidden: false,

      },
    ];
    this.testData = [
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 2,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 3,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 4,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 5,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 6,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 7,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 8,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 9,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 10,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 11,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 12,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 13,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      },
      {
        a: 14,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        m: 12,
        n: 13
      }
    ];
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

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];
  }
  // 排序
  customSort(event) {
        console.log(event);
        event.data.sort((data1, data2) => {
            const value1 = data1[event.field];
            const value2 = data2[event.field];
            let result = null;
            if (value1 == null && value2 != null) {
                result = -1;
            } else if (value1 != null && value2 == null) {
                result = 1;
            } else if (value1 == null && value2 == null) {
                            result = 0;
            } else if (typeof value1 === 'string' && typeof value2 === 'string') {
                            result = value1.localeCompare(value2);
            } else {
                            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            }
            return (event.order * result);
            });
    }
  filterGlobal($event, key) {
    console.log($event);
    console.log(key);
  }
  filterText($event, id, key) {
    console.log($event);
    console.log(id);
    console.log(key);

  }
}
