// // Global scope
// var globalVar = "I'm a global variable";
// let globalLet = "I'm also global, but scoped with let";
// const globalConst = "I'm a global constant";

// {
//     // Block scope
//     var blockVar = "I'm a block-scoped var";
//     let blockLet = "I'm a block-scoped let";
//     const blockConst = "I'm a block-scoped const";
// }

// // Global scope
// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globalLet); // Output: "I'm also global, but scoped with let"
// console.log(globalConst); // Output: "I'm a global constant"

// // Local scope (testing)
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

// function show() {
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
// }

// show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// Practice task
{
    let anotherBlockVar = "Another block scoped variable";
    const anotherConst = "Velocity of light";
    var anotherGlobalVar = "Globally accesible var. Not good!";
}

try {
    console.log(anotherBlockVar, anotherConst, anotherGlobalVar);
} catch (e) {
    console.log("Crashed, but recovered:", e.message);
}

console.log("This line still runs 👍");