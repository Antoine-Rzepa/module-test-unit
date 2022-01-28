
let unit = ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf']
let special = ['Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf']
let tens = ['Dix', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Quatre-Vingts']
let hundred = ['Cent']


export function convert(n) {

    let number_stringify = n.toString()
    let numberSize = number_stringify.length


    if(isNaN(n)){
        return n + " is not a number" 
    }else {
        if(numberSize == 1){
            return  getUnit(number_stringify[0])
        }
        if(numberSize == 2){
            return setTens(number_stringify[0], number_stringify[1])
        }
        if(numberSize == 3){
            if(number_stringify[0] == "1" && number_stringify[1] == "0" && number_stringify[2] == "0"){
                return getHundred()
            }else if(number_stringify[0] == "1"){
                return getHundred() + " " + setTens(number_stringify[1], number_stringify[2])
            }else {
                return getUnit(number_stringify[0]) + " " + getHundred() + " " + setTens(number_stringify[1], number_stringify[2])
            }
    
        }
    }
}

function setTens(ten, units){
    if(units == "0"){
        if(ten == "7" || ten == "9"){
            return getTens(ten) + " " + getTens("1");
        }else{
            return getTens(ten)
        }
    }else if(ten == "1"){
        return getSpecial(units)
    }else if(ten == "7" || ten == "9"){
        return getTens(ten) + " " + getSpecial(units)
    }else{
        return getTens(ten) + " " + getUnit(units)
    }
}

function getUnit(n) {
    switch (n) {
        case "1":
            return unit[0];
        case "2":
            return unit[1];
        case "3":
            return unit[2];
        case "4":
            return unit[3];
        case "5":
            return unit[4];
        case "6":
            return unit[5];
        case "7":
            return unit[6];
        case "8":
            return unit[7];
        case "9":
            return unit[8];
    }
}

function getTens(n) {
    switch (n) {
        case "1":
            return tens[0];
        case "2":
            return tens[1];
        case "3":
            return tens[2];
        case "4":
            return tens[3];
        case "5":
            return tens[4];
        case "6":
            return tens[5];
        case "7":
            return tens[5];
        case "8":
            return tens[6];
        case "9":
            return tens[6];
    }
}

function getSpecial(n) {
    switch (n) {
        case "1":
            return special[0];
        case "2":
            return special[1];
        case "3":
            return special[2];
        case "4":
            return special[3];
        case "5":
            return special[4];
        case "6":
            return special[5];
        case "7":
            return special[6];
        case "8":
            return special[7];
        case "9":
            return special[8];
    }
}

function getHundred(){
    return hundred[0]
}