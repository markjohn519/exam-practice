In `answer.js` modify the read function so that 
- if `readFileSync()` is successful, you pass the content to the callback
- if `readFileSync()` is not successful, you pass the error to the callback
- the signature of the callback function is `callback(error, content)`
