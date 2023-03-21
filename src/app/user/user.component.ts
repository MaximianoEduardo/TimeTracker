import { Component, Input, OnInit, } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }


  @Input() timeActive: string;

  ngOnInit(): void {
    this.timeActive = 'Daily';
    this.dataService.setData(this.timeActive)
  }

  onChangeOfTime(e: Event){
    
    const el = e.target as HTMLSpanElement;
    this.timeActive = el.innerText;
    this.dataService.setData(this.timeActive)
  }

}
