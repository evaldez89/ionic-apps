import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  childComponents: ChildComponent[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ChildComponent {
  icon: string;
  name: string;
  redirectTo: string;
}