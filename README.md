# JavaScript Loose Equality Bug: Unexpected null handling

This repository demonstrates a common JavaScript bug related to loose equality (==) and null/undefined checks.  The `bug.js` file contains a function with a flawed null check that leads to incorrect results when passed undefined.

The `bugSolution.js` file provides a corrected version using strict equality (===) for accurate null and undefined handling.

This bug highlights the importance of using strict equality when dealing with null and undefined in JavaScript for predictable and reliable behavior.