import Person from "./person";
import {expect} from 'chai';

describe('Person', () => {
    let male;
    let female;
    beforeEach(() => {
        male = new Person('Male', '890323-4519');
        female = new Person('Female', '741107-0925');
    });


    describe('Gender test', () => {
        it('should return male based on last four digits in id', () => {
            expect(male.getGender()).equal('male');
        });
        it('should return female base on last four digits in id', () => {
            expect(female.getGender()).equal('female');
        });
    });


    describe('Is from stockholm', () => {
        it('Male should be from stockholm', () => {
            expect(male.isFromStockholm()).to.equal(true);
        });
        it('Female should not be from Stockholm', () => {
            expect(female.isFromStockholm()).to.equal(false);
        })
    });

    describe('Is male', () => {
        it('return true if male', () => {
            expect(male.isMale()).to.equal(true);
        });
        it('return false if female', () => {
            expect(female.isMale()).to.equal(false);
        });
    });

    describe('Is female', () => {
        it('return false if male', () => {
            expect(male.isFemale()).to.equal(false);
        });
        it('return true if female', () => {
            expect(female.isFemale()).to.equal(true);
        });
    });
});
