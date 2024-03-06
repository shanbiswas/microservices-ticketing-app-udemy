import { Publisher, OrderCancelledEvent, Subjects } from "@sbticketingudemy/ticketing-udemy-common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}