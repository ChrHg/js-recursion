// Assignments JS.Recursion

"use strict";

// Assignment JS.Recursion.0

function fact(n) {
	// Makes sure the factorial of 0 or 1 is always 1
	if (n == 0 || n == 1) {
		return 1;
		// Calculates the factorial of a number
	} else {
		return n * fact(n-1);
    }
}

// Lets the user insert a number and shows the results
let n = Number(window.prompt("Calculate factorial"));
let factorial = fact(n);
console.log("The factorial of " + n + " is " + factorial);


// Assignment JS.Recursion.1

function fibo(n) {
	// Exceptions to the fibonacci sequence
	if (n < 2) {
		return n;
		// Finds the nth number of the fibonacci sequence
	} else {
		return fibo(n-1) + fibo(n-2);
	}
}

// Lets the user insert a number and shows the results
let n = Number(window.prompt("Find the nth fibonacci number"));
let fibonacci = fibo(n);
console.log("The fibonacci number is " + fibonacci);


// Assignment JS.Recursion.2

function pow(r, e) {
	// If the exponent is 0, the result will be 1
	if (e == 0) {
		return 1;
		// Calculates the power
	} else {
		return r * pow(r, e-1);
	}
}

// Lets the user insert a number and shows the results
let r = Number(window.prompt("Insert number"));
let e = Number(window.prompt("Insert exponent"));
power = pow(r, e);
console.log(r + " to the power " + e + " is " + power);


// Assignment JS.Recursion.3

function isPalindrome(s) {
	if 
}