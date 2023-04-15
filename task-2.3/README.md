Instructions:

Create a new AbortController instance and assign it to a variable called ac.
Extract the signal property from the ac instance and assign it to a variable called signal.
Call the setTimeout() function passing a callback that aborts the ac instance after 500 milliseconds.
Finally, use the once() function to wait for an event. Pass the parameters param1 and param2 to the once() function and add an options object that includes the signal property.
Note: The once() function waits for the first occurrence of the specified event before resolving. If the ac instance is aborted before the event is emitted, the once() function will throw an error.