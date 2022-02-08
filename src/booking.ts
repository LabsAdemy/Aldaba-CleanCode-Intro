export enum BookingStatus {
  requested,
  paid,
  reserved,
  notifiedReserve, // 🧼 camelCase
}

export class Booking {
  public id: string | undefined;
  public tripId: string;
  public travelerId: string;
  public passengersCount: number; // 🧼 distinction between a list and a value
  public status: BookingStatus = BookingStatus.requested;
  public price = 0;
  public hasPremiumFoods = false;
  public extraLuggagePricePerKilo = 0; // 🧼 full descriptive name
  public operatorReserveCode: string | undefined;
  public paymentId: string | undefined;
  constructor(tripId: string, travelerId: string, passengersCount: number) {
    this.tripId = tripId;
    this.travelerId = travelerId;
    this.passengersCount = passengersCount;
  }
}
