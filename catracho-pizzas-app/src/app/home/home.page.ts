import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { ProductCardComponent } from "../product-card/product-card";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonImg, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ProductCardComponent]
})
export class HomePage {
productData: any;
decreaseQuantity() {
throw new Error('Method not implemented.');
}
order() {
throw new Error('Method not implemented.');
}
increaseQuantity() {
throw new Error('Method not implemented.');
}
  constructor() {}
}
