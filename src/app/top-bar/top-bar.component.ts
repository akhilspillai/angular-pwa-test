import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  readonly VAPID_PUBLIC_KEY = "BBFn_uPDK0L4hc9Lmk1e4yZv4LA2Qi1mjXtGKSOup_g0UMfxRoQgZZFH0riGveUvhBftu_YkshRxgfzKZWEW3BE";

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
