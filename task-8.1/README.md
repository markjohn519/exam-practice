In `answer.js` ...

Complete the `readThreeFiles()` function to
- use three arguments as file names
- reads and concatenates the content of all three files (using the existing `read` function)
- returns a promise that
  - resolves to the concatenated content of all files
  - rejects when an error is encountered reading any of the three files (with the corresponding error)
