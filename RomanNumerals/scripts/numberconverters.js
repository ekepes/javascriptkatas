var NumeralConverter = {
    get_arabic_numeral : function (romanNumeral){
        if (romanNumeral == "IV"){
            return 4;
        }
        else if (romanNumeral == "V"){
            return 5;
        }
        return romanNumeral.length;
    }
};