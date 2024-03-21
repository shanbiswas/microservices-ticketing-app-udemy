import { Publisher, Subjects, ExpirationCompleteEvent } from "@sbticketingudemy/ticketing-udemy-common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}