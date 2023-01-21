# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

 - Has been refactored to separate the concerns of creating a hash and determining the partition key. The createHash function is now a separate utility function that can be reused in other parts of the codebase, making it more modular and maintainable.

 - The code now accepts options as an object, which allows for more flexibility and configurability. For example, you can now change the algorithm used to create the hash, the trivial partition key, and the maximum partition key length without modifying the code.
  
 - The code is also more readable because the logic is split into smaller, more focused chunks, and it makes use of modern JavaScript features like destructuring, default parameters and arrow functions.
