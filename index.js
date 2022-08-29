// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
      return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
      return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
      var distance = distanceTravelledInFeet(start, destination);
      if (distance>2500) {
            return 'cannot travel that far';
      }
      if (distance < 400) {
        return 0;
      } else if (distance>400 && distance < 2000) {
        return (distance - 400) * 0.02;
      } else if (distance>2000 && distance<2500){
        return 25;
      }  else {
        return "can not travel that far"
      }
}

  
//     // the return value of distanceFromHqInBlocks can then be used to calculate feet
//   }
//   return `The distance from the Hq is ${someValue-hqBlock} blocks`

//   function distanceTravelledInFeet(start, destination) {
//     if (distance<=400){
//       return ('This one is on me!')}
     
//       else if (distance>2000 && distance<=2500){
    
//        return 'I will gladly take your thirty bucks.'
//       }
//       else {
//         return 'No can do.';
    
//       }
//     return `The distance travelleved is ${(destination-start)*264} feet`
//     //returns the number of feet traveled
//   }