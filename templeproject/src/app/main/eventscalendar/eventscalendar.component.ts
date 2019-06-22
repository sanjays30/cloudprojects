import { Component, OnInit } from '@angular/core';

export interface AgendaElement {
  date: Date;
  time: string;
  event: string;
}
export interface Food {
  value: string;
  viewValue: string;
}


const DATA: AgendaElement[] = [
  {date: new Date('December 17, 1995 03:24:00'), time: '1:30 AM-2:00 AM', event: 'Makar Sankranti'},
  {date: new Date('December 17, 1995 03:24:00'), time: '2:30 AM-3:00 AM', event: 'Rama Navami'},
  {date: new Date('December 17, 1995 03:24:00'), time: '4:30 AM-5:00 AM', event: 'Anand Mela'},
  {date: new Date('December 17, 1995 03:24:00'), time: '6:30 AM-7:00 AM', event: 'Makar Sankranti'},
];

@Component({
  selector: 'app-eventscalendar',
  templateUrl: './eventscalendar.component.html',
  styleUrls: ['./eventscalendar.component.scss']
})
export class EventscalendarComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'event'];
  spanningColumns = ['date'];

  dataSource = DATA;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  spans = [];
  constructor() { 
    this.cacheSpan('date', (d:AgendaElement) => d.date.getTime());
  }

  ngOnInit() {
  }
  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  
  getRowSpan(col:string, index:number) {
    return this.spans[index] && this.spans[index][col];
  }
  cacheSpan(key:string, accessor) {
    for (let i = 0; i < DATA.length;) {
      let currentValue = accessor(DATA[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < DATA.length; j++) {        
        if (currentValue != accessor(DATA[j])) {
          break;
        }

        count++;
      } 

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

}



