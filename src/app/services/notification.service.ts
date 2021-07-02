import { Injectable } from "@angular/core";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { APIInterceptor } from "../http/api-interceptor";

@Injectable()
export class NotificationService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post("/api/notifications/register", sub, {
      responseType: "text",
    });
  }
}
