export class internals {
    W: number = 500;
    H: number = 500;
   
    randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
   
    internals() {
    }
  }