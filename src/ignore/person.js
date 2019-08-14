"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    /**
     * Person Constructor
     * @param {string} name       Name
     * @param {string} id         ID-number
     */
    function Person(name, id) {
        this.name = name;
        this.id = id;
    };
    /**
     * Gets the second last digit in ID-number
     * @param  {string} id ID-number
     * @return {string}    second last digit
     */
    Person.getSecondLastDigit = function (id) {
        var myId = Number(id.charAt(id.length - 2));
        return myId;
    };
    ;
    /**
     * Getting the first two digits in ID-number
     * @param  {string} id ID-number
     * @return {string}    Last two digits
     */
    Person.getFirstTwoDigits = function (id) {
        var num = Number(id.slice(0, 2));
        return num;
    };
    ;
    /**
     * Gets a persons gender based on last four digits.
     * If the second last number is even it's a female
     * and if it's odd it's a male person.
     * @return {string} 'male' or 'female'
     */
    Person.getGender = function () {
        var sex = '';
        var id = this.getSecondLastDigit(this.prototype.id);
        console.log(this.prototype.id);
        if (id % 2 == 0) {
            sex = "female";
        }
        else {
            sex = "male";
        }
        return sex;
    };
    ;
    /**
     * If the first two digits is below 13, that person is registered
     * in the county of Stockholm
     * @return {Boolean} isFromStockholm
     */
    Person.isFromStockholm = function () {
        return true;
    };
    ;
    /**
     * These functions are just getGender() divided into two different
     * functions that return a boolean
     */
    /**
     * Function should return true if the second last digit is
     * odd
     * @return {Boolean} isMale
     */
    Person.isMale = function () {
        return true;
    };
    ;
    Person.isFemale = function () {
        return true;
    };
    ;
    return Person;
}());
exports["default"] = Person;
;
var male = new Person('Anon', '890323-4519'), female = new Person('Anon', '741107-0925');
console.log(this.getGender());
