import { Publisher, Subjects, TicketCreatedEvent } from "@sbticketingudemy/ticketing-udemy-common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}