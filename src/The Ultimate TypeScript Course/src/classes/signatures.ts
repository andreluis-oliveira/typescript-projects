class SeatAssignment {
  // A1, A2, ...
  // John, Damon, ...
  // Index Signature property
  [seatNumber: string]: string
}

const seats = new SeatAssignment()

seats.A1 = 'John'
seats.A2 = 'Damon'
