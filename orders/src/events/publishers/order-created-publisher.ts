import { Publisher, OrderCreatedEvent, Subjects } from "@sbticketingudemy/ticketing-udemy-common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}