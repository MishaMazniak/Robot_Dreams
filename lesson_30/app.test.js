//  Homework lesson_30

const appObj = require('./app');
describe("test on isArray", () => {
    it('should return "true"', () => {
        expect(Array.isArray(appObj.checkArr)).toBe(true);
    });
});
describe("test the math operations with array", () => {
    it('should math sum elements return "number"', () => {
        expect(typeof appObj.sumResoult).toBe("number");
    });
    it('should max element of array return "number"', () => {
        expect(typeof appObj.maxValue).toBe("number");
    });
});
describe("test clear, decrement and increment function from Acumulator", () => {
    it('should typeof clear is "number"', () => {
        expect(typeof appObj.clearFunc).toBe("number");
    });
    it('should typeof decrement is "number"', () => {
        expect(typeof appObj.checkFunDecrement).toBe("number");
    });
    it('should typeof increment is "number"', () => {
        expect(typeof appObj.checkFunIncrement).toBe("number");
    });
});
describe("test on cleck function on img", () => {
    it('should add class to the element', () => {
        let img = document.createElement('img');
        appObj.myFunction(img);
        img.click();
        expect(img.classList.contains('img_food_js')).toBeTruthy();
    });
});
