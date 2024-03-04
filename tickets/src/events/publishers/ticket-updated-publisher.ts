import { Publisher, Subjects, TicketUpdatedEvent } from "@sbticketingudemy/ticketing-udemy-common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}