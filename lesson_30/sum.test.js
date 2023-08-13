const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// lesson_30

// //import feils from app
// const appObj = require('./app');


// test('adds 3 + 4 to equal 7', () => {
//     expect(appObj.sum(3, 4)).toBe(7);
// });
// describe("test sum function", () => {
//     it('should return 5 when params are 2 and 3', () => {
//         expect(appObj.sum(2, 3)).toBe(5);
//     });
//     it('should return 7 when params are 5 and 2', () => {
//         expect(appObj.sum(5, 2)).toBe(7);
//     });
//     it('should return 22 when params are 12 and 10', () => {
//         expect(appObj.sum(12, 10)).toBe(22);
//     });
//     it('should return 15 when params are 10 and 5', () => {
//         expect(appObj.sum(10, 5)).toBe(15);
//     });
// });

// describe("test fulName", () => {
//     it('should return ful name of user', () => {
//         expect(appObj.userFirst.getFulName()).toBe('Misha Mazniak');
//     });
// });
