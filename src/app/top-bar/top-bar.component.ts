import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  readonly VAPID_PUBLIC_KEY = "BHyoUBN7NtNslQsqHB39-GYg2U5dM0bQXo-_h-sHuPibPkdxUXKWGyruNPHGihCuroz5rLM9_vPiySAtI5d7gyA";

  constructor(private swPush: SwPush, private notificationService: NotificationService) {

  }

  async notify() {
    console.log("requesting subscription");
    const sub = await this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    console.log(`got subscription: ${JSON.stringify(sub)}`);
    await this.notificationService.addPushSubscriber(sub).toPromise();
    console.log("succesfully send subscription details")
  }
}
