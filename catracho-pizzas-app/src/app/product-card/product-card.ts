import { Component, Input } from '@angular/core';
import { AlertController,} from '@ionic/angular';
import { IonAlert, IonButton, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTitle, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonTitle, IonCard, IonImg, IonButton, IonAlert, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonToolbar]

})
export class ProductCardComponent {
  @Input() product: any;
  quantity: number = 1;
Pizza: any;

  constructor(private alertController: AlertController) {}

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  async order() {
    const alert = await this.alertController.create({
      header: '¡Producto agregado!',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}