// a. The function always returns the same result if the same arguments are passed in. It does not
// depend on any state, or data, change during a program’s execution. It must only depend on its input
// arguments.
// b. The function does not produce any observable side effects such as network requests, input and
// output devices, or data mutation.

// Same Input => Same Output
// const add = (x, y) => x + y;
// add(2, 4); // 6
// Pure Functions = Consistent Results
// The example returns a value based on the given parameters, regardless of where/when you call it.
// If you pass 2 and 4, you’ll always get 6.
// Nothing else affects the output.
// Impure Functions = Inconsistent Results
// let x = 2;
// const add = (y) => {
// x += y;
// };
// add(4); // x === 6 (the first time)
// The first
