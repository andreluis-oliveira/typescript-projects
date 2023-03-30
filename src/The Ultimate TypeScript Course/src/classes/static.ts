class Ride {
  private static _activeRides: number = 0

  start (): void {
    Ride._activeRides++
  }

  stop (): void {
    Ride._activeRides--
  }







  static get activeRides (): number {
    return Ride._activeRides
  }
}

console.log(Ride.activeRides)
