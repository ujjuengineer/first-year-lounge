// 1. Arithmetic Operators
let x = 4, y = 9;
console.log("Arithmetic Operators:");
console.log("Addition: 5 + 3 =", 5 + 3);         // Addition
console.log("Subtraction: 5 - 3 =", 5 - 3);     // Subtraction
console.log("Multiplication: 5 * 3 =", 5 * 3);  // Multiplication
console.log("Division: 5 / 3 =", 5 / 3);        // Division
console.log("Modulus: 5 % 3 =", 5 % 3);         // Remainder
console.log("Exponentiation: 5 ** 3 =", 5 ** 3);// Exponentiation
console.log("Increment: ++x =", ++x);
console.log("Decrement: --y =", --y);


// 2. Assignment Operators
let a = 5;
console.log("\nAssignment Operators:");
console.log("Assign: a =", a);                 // Simple assignment
a += 3;
console.log("Add and Assign: a += 3 =", a);    // Add and assign
a -= 2;
console.log("Subtract and Assign: a -= 2 =", a);
a *= 2;
console.log("Multiply and Assign: a *= 2 =", a);
a /= 2;
console.log("Divide and Assign: a /= 2 =", a);
a %= 2;
console.log("Modulus and Assign: a %= 2 =", a);

// 3. Comparison Operators
console.log("\nComparison Operators:");
console.log("Equal: 5 == '5' ->", 5 == '5');       // Loose equality
console.log("Not Equal: 5 != '5' ->", 5 != '5');   // Loose inequality
console.log("Strict Equal: 5 === '5' ->", 5 === '5'); // Strict equality
console.log("Strict Not Equal: 5 !== '5' ->", 5 !== '5'); // Strict inequality
console.log("Greater Than: 5 > 3 ->", 5 > 3);
console.log("Less Than: 5 < 3 ->", 5 < 3);
console.log("Greater or Equal: 5 >= 3 ->", 5 >= 3);
console.log("Less or Equal: 5 <= 3 ->", 5 <= 3);

// 4. Logical Operators
console.log("\nLogical Operators:");
console.log("AND: true && false ->", true && false);
console.log("OR: true || false ->", true || false);
console.log("NOT: !true ->", !true);

// 5. Bitwise Operators
console.log("\nBitwise Operators:");
console.log("Bitwise AND: 5 & 3 ->", 5 & 3);
console.log("Bitwise OR: 5 | 3 ->", 5 | 3);
console.log("Bitwise XOR: 5 ^ 3 ->", 5 ^ 3);
console.log("Bitwise NOT: ~5 ->", ~5);
console.log("Left Shift: 5 << 1 ->", 5 << 1);
console.log("Right Shift: 5 >> 1 ->", 5 >> 1);

// 6. Ternary Operator
console.log("\nTernary Operator:");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Age 20: Status ->", status);

// 7. Type Operators
console.log("\nType Operators:");
console.log("Type of 42:", typeof 42);              // Number
console.log("Type of 'Hello':", typeof "Hello");    // String
console.log("Type of true:", typeof true);          // Boolean
console.log("Instance of Array: [] instanceof Array ->", [] instanceof Array);

// 8. String Operators
console.log("\nString Operators:");
let str1 = "Hello";
let str2 = "World";
console.log("Concatenation: str1 + str2 =", str1 + " " + str2);

// 9. Nullish Coalescing Operator
console.log("\nNullish Coalescing Operator:");
let name = null;
console.log("Name (fallback to 'Anonymous'):", name ?? "Anonymous");
