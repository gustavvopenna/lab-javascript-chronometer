// class Chronometer {
//   constructor() {
//     this.currentTime: 0
//     this.intervalId: 0
//   }
  // startClick() {}
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
//}

class Chronometer {
 constructor() {
   this.currentTime = 0;
   this.intervalId = 0;
 }

 startClick() {
   this.intervalId = setInterval(()=>{ this.currentTime++}, 1000)
 }

 getMinutes() {
   return Math.floor(this.currentTime / 60)
 }

 getSeconds() {
   return Math.round(((this.currentTime / 60) % 1)*60)
 }
twoDigitsNumber(value) {
 if(value.toString().length != 1){
   return value.toString()
 }else{
   return '0' + value
 }
}

 stopClick() {
   this.currentTime = 0;
   clearInterval(this.intervalId)
 }
 
 resetClick() {
   this.intervalId = 0;
 }