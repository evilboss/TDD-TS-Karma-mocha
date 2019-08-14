export default class Person {
    name: string;
    id: string;

    /**
     * Person Constructor
     * @param {string} name       Name
     * @param {string} id         ID-number
     */
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    } ;


    /**
     * Gets the second last digit in ID-number
     * @param  {string} id ID-number
     * @return {string}    second last digit
     */

    public static getSecondLastDigit(id: any): number {
        let myId = id;
        return 1;
    };

    /**
     * Getting the first two digits in ID-number
     * @param  {string} id ID-number
     * @return {string}    Last two digits
     */

    public static getFirstTwoDigits(id: any): number {
        return 1;
    };

    /**
     * Gets a persons gender based on last four digits.
     * If the second last number is even it's a female
     * and if it's odd it's a male person.
     * @return {string} 'male' or 'female'
     */

    public static getGender(): string {
        let sex = '';
        return sex;
    };

    /**
     * If the first two digits is below 13, that person is registered
     * in the county of Stockholm return yes:
     * @return {string} isFromStockholm
     */

    public static isFromStockholm(): string {
        return 'yes';
    };

    /**
     * These functions are just getGender() divided into two different
     * functions that return a boolean
     */

    /**
     * Function should return true if the second last digit is
     * odd
     * @return {Boolean} isMale
     */
    public static isMale(): boolean {
        return true;
    };

    public static isFemale(): boolean {
        return true;
    };
};
