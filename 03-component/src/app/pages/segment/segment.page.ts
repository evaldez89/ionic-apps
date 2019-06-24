import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segments: IonSegment;

  constructor() { }

  ngOnInit() {
    this.segments.value = 'heroes';
  }

  segmentChange(event) {
    const segment = event.detail.value;
    console.log( segment );
  }
}
