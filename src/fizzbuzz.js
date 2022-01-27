export function fizzBuzz(n) {

  //GREEN 2 param should be number
  if(isNaN(n)){
    return n + " is not a number"
  }else{
    if(n%3 == 0 && n%5 == 0){
      //GREEN 5
      return "FizzBuzz"
    }else if(n%3 == 0){
      //GREEN 1
      return "Fizz"
    }else if(n%5 == 0){
      //GREEN 3
      return "Buzz"
    }else if(n.toString().indexOf("3") > -1 && n.toString().indexOf("5") > -1){
      //GREEN 8
      return "FizzBuzz"
    }else if(n.toString().indexOf("3") > -1){
      //GREEN 6
      return "Fizz"
    }else if(n.toString().indexOf("5") > -1){
      //GREEN 7
      return "Buzz"
    }else{
      //GREEN 4
      return n
    }
  }
}