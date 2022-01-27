// Implement the sum function here
export function sum(a, b) {
    if(isNaN(a)){
        return a + " is not a number" 
    }else if (isNaN(b)){
        return b + " is not a number"
    }else{
        return a + b
    }
}
