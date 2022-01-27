
let unit = ['Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf']
let special = ['Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-Sept', 'Dix-Huit', 'Dix-Neuf']
let tens = ['Dix', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Quatre-Vingts']
let hundred = ['Cent']





export function convert(n) {

    let number_stringify = n.toString()
    let numberSize = number_stringify.length

    if(numberSize == 1){
        return  getUnit(number_stringify[0])
    }
    if(numberSize == 2){
        if(number_stringify[1] == "0"){
            if(number_stringify[0] == "7" || number_stringify[0] == "9"){
                return getTens(number_stringify[0]) + " " + getTens(1);
            }else{
                return getTens(number_stringify[0])
            }
        }else if(number_stringify[0] == "1" && (number_stringify[1] != "7" || number_stringify[1] != "8" || number_stringify[1] != "9")){
            return getSpecial(number_stringify[1])
        }else if(number_stringify[0] == "7" || number_stringify[0] == "9"){
            return getTens(number_stringify[0]) + " " + getSpecial(number_stringify[1])
        }else{
            return getTens(number_stringify[0]) + " " + getUnit(number_stringify[1])
        }
    }if(numberSize == 3){

        if(number_stringify[0] == "1" && number_stringify[1] == "0" && number_stringify[2] == "0"){
            return getHundred()
        }else if(number_stringify[0] == "1"){
            if(number_stringify[2] == "0"){
                if(number_stringify[1] == "7" || number_stringify[1] == "9"){
                    return getHundred() + " " + getTens(number_stringify[1]) + " " + getTens(1);
                }else{
                    return getHundred() + " " + getTens(number_stringify[1])
                }
            }else if(number_stringify[1] == "1" && (number_stringify[2] != "7" || number_stringify[2] != "8" || number_stringify[2] != "9")){
                return getHundred() + " " + getSpecial(number_stringify[2])
            }else if(number_stringify[1] == "7" || number_stringify[1] == "9"){
                return getHundred() + " " + getTens(number_stringify[1]) + " " + getSpecial(number_stringify[2])
            }else{
                return getHundred() + " " + getTens(number_stringify[1]) + " " + getUnit(number_stringify[2])
            }
        }

        // JAI GERER LES 100 ene a voir après !!



        else if(number_stringify[2] == "0"){
            if(number_stringify[1] == "7" || number_stringify[1] == "9"){
                return getUnit(number_stringify[0]) + " " + getHundred() + " " + getTens(number_stringify[1]) + " " + getTens(1);
            }else{
                return getTens(number_stringify[0])
            }
        }else if(number_stringify[0] == "1" && (number_stringify[1] != "7" || number_stringify[1] != "8" || number_stringify[1] != "9")){
            return getSpecial(number_stringify[1])
        }else if(number_stringify[0] == "7" || number_stringify[0] == "9"){
            return getTens(number_stringify[0]) + " " + getSpecial(number_stringify[1])
        }else{
            return getTens(number_stringify[0]) + " " + getUnit(number_stringify[1])
        }
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
        default:
            return n + " is not a number"
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
        default:
            return n + " is not a number"
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
        default:
            return n + " is not a number"
    }
}

function getHundred(){
    return hundred[0]
}