# Capitalize First Letter

A JavaScript exercise exploring three different ways to capitalize the first letter of a string.

## What It Does

Takes the string `"gabriel"` and capitalizes the first letter, demonstrating three equivalent approaches:

1. **`charAt()` method** — `string.charAt(0).toUpperCase() + string.substring(1)`
2. **Bracket notation** — `string[0].toUpperCase() + string.substring(1)`
3. **Template literals** — `` `${string[0].toUpperCase()}${string.substring(1)}` ``

## Example Output

```
Gabriel
```

## How to Run

```bash
node capitalize.js
```

## Key Concepts Practiced

- `charAt(index)` vs. bracket notation (`string[index]`) — both retrieve a character at a given position; bracket notation is shorter but behaves the same for strings
- `.toUpperCase()` to convert a single character to uppercase
- `.substring(1)` to grab everything after the first character
- Template literals as an alternative to string concatenation
- Strings are immutable in JavaScript — none of these methods change the original string in place; each builds a *new* string from the original

## Notes

- All three solutions read from the same original string (`"gabriel"`) rather than from a previously modified version, since strings can't be mutated in place.
- In the original file, all three solutions were assigned to the same variable (`string`) one after another, meaning only the last assignment was actually reflected in the final `console.log`. To compare all three outputs, assign each to its own variable (e.g. `v1`, `v2`, `v3`) and log them separately.

## Author

Gabriel Onoriukpe
