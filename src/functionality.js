export const incrementer = (a, b) => (a + b)
export const asyncMultiplier = (a, b) => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(a * b);
    }, 300)
})