export default class Person {
    name: string;
    id: string;

    /**
     * Gets the second last digit in ID-number
     * @param  {string} id ID-number
     * @return {string}    second last digit
     */

    public getSecondLastDigit(id: any): number {
        let myId = Number(id.charAt(id.length-2));
        return myId;
    };

    /**
     * Getting the first two digits in ID-number
     * @param  {string} id ID-number
     * @return {string}    Last two digits
     */

    public getFirstTwoDigits(id: any): number {
        let num= Number(id.slice(0,2));
        return num
    };

    /**
     * Gets a persons gender based on last four digits.
     * If the second last number is even it's a female
     * and if it's odd it's a male person.
     * @return {string} 'male' or 'female'
     */

    public getGender(): string {
        let sex = '';
        let id= this.getSecondLastDigit(this.id);
        if(id%2==0){
            return "female"
        }else{
            return "male"
        }
    };

    /**
     * If the first two digits is below 75, that person is registered
     * in the county of Stockholm
     * @return {Boolean} isFromStockholm
     */

    public isFromStockholm(): boolean {
        let num= Number(this.id.slice(0,2));
        if(num>75){
            return true
        }else{
            return false
        }
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
    public isMale(): boolean {
        if(this.getGender()=='male'){
            return true
        }else{
            return false
        }
    };

    public isFemale(): boolean {
        if(this.getGender()=='female'){
            return true
        }else{
            return false
        }
    };

      /**
     * Person Constructor
     * @param {string} name       Name
     * @param {string} id         ID-number
     */
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    } ;
};
