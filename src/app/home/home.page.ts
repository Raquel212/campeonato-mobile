import { Component } from '@angular/core';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton],
})
export class HomePage {
  constructor() {}
}
