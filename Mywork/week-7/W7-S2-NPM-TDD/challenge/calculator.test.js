const {
    add,
    subtract,
    multiply,
    divide
} = require("./calculator");

// Addition test
test("adds 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
    expect(add(-5, -5)).toBe(-10);
});

test("adds zero", () => {
    expect(add(8, 0)).toBe(8);
});

// Subtraction test
test("subtracts 5 - 2 = 3", () => {
    expect(subtract(5, 2)).toBe(3);
});

test("subtracting from zero", () => {
    expect(subtract(0, 4)).toBe(-4);
});

test("subtract negative numbers", () => {
    expect(subtract(-5, -2)).toBe(-3);
});

// Multiplication test
test("multiplies 4 × 3 = 12", () => {
    expect(multiply(4, 3)).toBe(12);
});

test("multiply by zero", () => {
    expect(multiply(5, 0)).toBe(0);
});

test("multiply negative numbers", () => {
    expect(multiply(-5, 2)).toBe(-10);
});

// Division test
test("divides 10 / 2 = 5", () => {
    expect(divide(10, 2)).toBe(5);
});

test("divide decimal numbers", () => {
    expect(divide(5, 2)).toBe(2.5);
});

test("divide negative numbers", () => {
    expect(divide(-10, 2)).toBe(-5);
});

