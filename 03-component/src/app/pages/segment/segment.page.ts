import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Hero } from 'src/app/interfaces/heroe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, { static: true }) segments: IonSegment;
  heroes: Observable<Hero[]>;
  segmentFilter = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.segments.value = 'heroes';
    this.heroes = this.dataService.getHeroes();
  }

  segmentChange(event) {
    const selectedSegment = event.detail.value;
    if (selectedSegment === 'heroes') {
      this.segmentFilter = '';
    } else {
      this.segmentFilter = selectedSegment;
    }

  }
}
