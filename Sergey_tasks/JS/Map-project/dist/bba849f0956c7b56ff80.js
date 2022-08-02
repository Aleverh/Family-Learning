
class Movements {
   constructor(newCoords, type, distance, duration, cadence, elevation, date){
      this.type = type;
      this.distance = distance;
      this.duration = duration;
      this.cadence = cadence;
      this.elevation = elevation;
      this.newCoords = newCoords;
      this.date = date;
   }
   clearLocalStorage(){
      localStorage.removeItem("newCoords");
   }
   buildField(){
         containerWorkouts.innerHTML +=
         `  <li class="workout ${this.type == "running" ? "workout--running" : "workout--cycling"}" data-id="${this.newCoords}">
               <h2 class="workout__title">${this.type} on ${this.date}</h2>
               <div class="workout__details">
                  <span class="workout__icon">${this.type == "running" ? "🏃‍♂️" : "🚴‍♀️"}</span>
                  <span class="workout__value">${this.distance}</span>
                  <span class="workout__unit">km</span>
               </div>
               <div class="workout__details">
                  <span class="workout__icon">⏱</span>
                  <span class="workout__value">${this.duration}</span>
                  <span class="workout__unit">min</span>
               </div>
               <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${this.distance / this.duration}</span>
                  <span class="workout__unit">km/h</span>
               </div>
               <div class="workout__details">
                  <span class="workout__icon">${this.type == "running" ? "🦶🏼" : "⛰"}</span>
                  <span class="workout__value">${this.type == "running" ? this.cadence : this.elevation}</span>
                  <span class="workout__unit">${this.type == "running" ? "m" : "spm"}</span>
               </div>
            </li>
         `
   }
}
