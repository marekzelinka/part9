import { calculator } from "./utils.ts";

try {
  const result = calculator(1, 2, "add");
  // const result = calculator(2, 0, "divide");
  // const result = calculator(1, 2, "minus");
  console.log(result);
} catch (error) {
  let errorMessage = "Something went wrong: ";

  if (error instanceof Error) {
    errorMessage += error.message;
  } else {
    errorMessage += "Unknown error occurred!";
  }

  console.error(errorMessage);
}
