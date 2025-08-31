export type Operation = "multiply" | "add" | "divide";

export type CalculatorResult = number;

export function calculator(
  a: number,
  b: number,
  op: Operation,
): CalculatorResult {
  switch (op) {
    case "multiply": {
      return a * b;
    }
    case "add": {
      return a + b;
    }
    case "divide": {
      if (b === 0) {
        throw new Error("Can't divide by 0!");
      }

      return a / b;
    }
    default: {
      throw new Error("Operation isn't multiply, add or divide!");
    }
  }
}

export function multiplicator(a: number, b: number, printText: string) {
  console.log(printText, a * b);
}
