import { Injectable } from "@angular/core";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { APIInterceptor } from "../http/api-interceptor";

@Injectable()
export class NotificationService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post("https://affectionate-liskov-6bc202.netlify.app/.netlify/functions/api/notifications/register", sub, {
      responseType: "text",
    });
  }
}
