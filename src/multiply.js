export function multiply(a, b){
    //GREEN 2
    if(isNaN(a)){
        throw new Error(a + " is not a number")
    }else if (isNaN(b)){
        throw new Error(b + " is not a number")
    }else{
        //GREEN 1
        return a * b
    }
}