module("When converting an integer into a roman numeral");

test("should receive I when passing a 1", function() {
    equal(NumeralConverter.get_arabic_numeral("I"), 1, "1 was returned when 'I' was passed as a parameter.");
});

test("should receive II when passing a 2", function() {
    equal(NumeralConverter.get_arabic_numeral("II"), 2, "2 was returned when 'II' was passed as a parameter.");
});

test("should receive III when passing a 3", function() {
    equal(NumeralConverter.get_arabic_numeral("III"), 3, "3 was returned when 'III' was passed as a parameter.");
});

test("should receive IV when passing a 4", function() {
    equal(NumeralConverter.get_arabic_numeral("IV"), 4, "4 was returned when 'IV' was passed as a parameter.");
});

test("should receive V when passing a 5", function() {
    equal(NumeralConverter.get_arabic_numeral("V"), 5, "5 was returned when 'V' was passed as a parameter.");
});
