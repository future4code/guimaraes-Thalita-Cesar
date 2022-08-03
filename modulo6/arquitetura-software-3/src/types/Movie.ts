export class Movie {
    constructor(
      private id: string,
      private description: string,
      private duration_in_minutes: number,
      private year_of_release:number
    ) { }
    
    getId() {
      return this.id
    }
  
    getDescription() {
      return this.description
    }
  
    getDurationInMinutes() {
      return this.duration_in_minutes
    }
  
    getYearOfRelease() {
      return this.year_of_release
    }
  
    setId(newId: string) {
      this.id = newId
    }
  
    setDescription(newDescription: string) {
      this.description = newDescription
    }
  
    setDurationInMinutes(newDurationInMinutes: number) {
      this.duration_in_minutes = newDurationInMinutes
    }
  
    setYearOfRelease(newYearOfRelease: number) {
      this.year_of_release = newYearOfRelease
    }
  }
  