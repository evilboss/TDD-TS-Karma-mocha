import Person from "./person";
import {expect} from 'chai';
import {add} from './example-code';

describe('Person', () => {
    let male;
    let female;
    beforeEach(() => {
        male = new Person('Anon', '890323-4519');
        female = new Person('Anon', '741107-0925');
    });


    describe('Gender test', () => {
        it('should return male based on last four digits in id', () => {
            expect(Person.getGender()).to.equal('male');
        });
        it('should return female base on last four digits in id', () => {
            expect(Person.getGender()).to.equal('female');
        });
    });


    describe('Is from stockholm', () => {
        it('testperson should be from stockholm', () => {
            expect(Person.isFromStockholm()).to.equal(true);
        });
        it('tesperson should not be from Stockholm', () => {
            expect(Person.isFromStockholm()).to.equal(false);
        })
    });

    describe('Is male', () => {
        it('return true if male', () => {
            expect(Person.isMale()).to.equal(false);
        });
        it('return false if female', () => {
            expect(Person.isMale()).to.equal(false);
        });
    });

    describe('Is female', () => {
        it('return true if female', () => {
            expect(Person.isFemale()).to.equal(false);
        });
        it('return false if female', () => {
            expect(Person.isFemale()).to.equal(false);
        });
    });
});
