In `answers.js`, update the `arrayToFile()` function to

- create a readable stream from the array received
- append a newline to every element of the array
- pipe the data from the readable stream to a writable stream (to a file using the file name argument)