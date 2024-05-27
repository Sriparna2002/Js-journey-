// besic comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Javascript autometically convert to number for comparison.
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // null converted into 0.
console.log(null == 0); //
console.log(null >= 0);// null converted into 0.

/*The reason is that an equality check == and comparisons > < >= <= work differently
comparison convert null to a number treating it as zero
That is why null > 0 is false and null >= 0 is true. */

console.log(undefined > 0); 
console.log(undefined == 0);
console.log(undefined >= 0);