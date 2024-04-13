import { Subjects, Publisher, PaymentCreatedEvent } from "@sbticketingudemy/ticketing-udemy-common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}