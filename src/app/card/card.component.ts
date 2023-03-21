import { Component, Input, OnInit,  } from '@angular/core';
import { TimeService } from '../core/service/time.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TimeTracker } from '../store/state';
import { Store,  } from '@ngrx/store';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
]
})
export class CardComponent implements OnInit {

  constructor(
    private timeService: TimeService,
    private dataService: DataService
  ) { }


  timer$: Observable<TimeTracker> = this.timeService.getTimeTracker()
    .pipe(
      tap(),
      map(( tempo ) => tempo.timeTracker)
  );

  ngOnInit(): void { }


}
