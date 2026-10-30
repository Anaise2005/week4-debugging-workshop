## Error 1
**Type:** RangeError
**Message:** Maximum call stack size exceeded
**What it means:** The `countdown` function calls itself on every run and has no condition to stop, so the browser runs out of call stack space. The stack trace shows `countdown` at line 104 repeating.
**Fix:** Add a base case at the start of the function, `if (n <= 0) return`, so the recursion ends.

## Error 2
**Type:** TypeError
**Message:** Assignment to constant variable.
**What it means:** `score` was declared with `const`, so it cannot be reassigned. The line `score = score + 10` tries to change it, which crashes the script before `console.log` runs.
**Fix:** Declare `score` with `let` instead of `const`.

## Error 3
**Type:** ReferenceError
**Message:** studentname is not defined
**What it means:** The variable is declared as `studentName`, but line 72 uses `studentname`. JavaScript is case-sensitive, so it looks for a variable that doesn't exist.
**Fix:** Use the same spelling and capitalization as the declaration: `studentName`.

## Error 4
**Type:** TypeError
**Message:** city.toUppercase is not a function
**What it means:** `city` is a string, but strings have no method named `toUppercase`. The method name is misspelled: JavaScript is case-sensitive and the correct name is `toUpperCase` (capital C).
**Fix:** Rename the call to `city.toUpperCase()`.

## Error 5
**Type:** TypeError
**Message:** Cannot set properties of null (setting 'textContent')
**What it means:** `document.querySelector("#page-titel")` found no element because the id is misspelled, so it returned `null`. Setting `.textContent` on `null` crashes.
**Fix:** Correct the selector to match the id in the HTML (`#page-title`).

## Error 6
**Type:** SyntaxError
**Message:** Unexpected string
**What it means:** The array `["mango", "avocado" "banana"]` has no comma between `"avocado"` and `"banana"`. JavaScript expected a comma or `]` and found a string instead, so the script can't be parsed and none of it runs.
**Fix:** Add the missing comma: `["mango", "avocado", "banana"]`.