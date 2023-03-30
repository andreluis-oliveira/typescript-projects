interface Calendar {
  name: string

  addEvent: () => void
  removeEvent: () => void
}

interface CloudCalendar extends Calendar {
  sync: () => void
}

class GoogleCalendar implements Calendar {
  constructor (public name: string) {}

  addEvent (): void {
    console.log('Add event.')
  }

  removeEvent (): void {
    console.log('Remove event.')
  }
}

const googleCalendar = new GoogleCalendar('test')

googleCalendar.addEvent()
googleCalendar.removeEvent()
