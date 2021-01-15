const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 30);

  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const result = await add(3, 3);
  expect(result).toBe(6);
});

// Why tests?

// - saves time
// - creates reliable software
// - gives flexibility
//   - refracturing
//   - collaborating
//   - profiling
// - pace of mind
