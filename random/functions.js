// function greet(name) {
//     console.log(`Hi ${name}`);
// }
//  trying methods out - functions within objects
const myMath = {
    num: 67,
    square(n) {
        return n * n;
    },
    cube(n) {
        return n ** 3;
    }
}

// would be run like this
myMath.square(7);

