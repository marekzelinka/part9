type Operation = "multiply" | "add" | "divide";

type Result = number;

function calculator(a: number, b: number, op: Operation): Result {
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
