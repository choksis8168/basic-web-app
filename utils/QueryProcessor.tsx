export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "bbb";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length > 0) {
      // Convert numbers to integers and find the largest
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    } else {
      return "";
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length > 0) {
      // Calculate the sum of all numbers
      const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
      return sum.toString();
    } else {
      return "No numbers found in the query.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);
    const resultNumbers: number[] = [];

    if (numbers && numbers.length > 0) {
      // Check each number
      for (const numberStr of numbers) {
        const number = parseInt(numberStr);
        
        // Check if the number is both a square and a cube
        if (Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0) {
          resultNumbers.push(number);
        }
      }

      if (resultNumbers.length > 0) {
        return resultNumbers.join(", ");
      } else {
        return "No numbers found that are both a square and a cube.";
      }
    } else {
      return "No numbers found in the query.";
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 2) {
      // Extract x and y
      const x = parseInt(numbers[0]);
      const y = parseInt(numbers[1]);
      
      // Perform multiplication
      const result = x * y;
      return result.toString();
    } else {
      return "";
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 2) {
      // Extract x and y
      const x = parseInt(numbers[0]);
      const y = parseInt(numbers[1]);
      
      // Compute x to the power of y
      const result = Math.pow(x, y);
      return result.toString();
    } else {
      return "Insufficient numbers provided in the query.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);
    const primes: number[] = [];

    if (numbers && numbers.length > 0) {
      // Check each number for primality
      for (const numberStr of numbers) {
        const number = parseInt(numberStr);
        if (isPrime(number)) {
          primes.push(number);
        }
      }

      if (primes.length > 0) {
        return primes.join(", ");
      } else {
        return "No prime numbers found.";
      }
    } else {
      return "No numbers found in the query.";
    }
  }

  if (queryLower.includes("what is") && queryLower.includes("minus")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 2) {
      // Extract x and y
      const x = parseInt(numbers[0]);
      const y = parseInt(numbers[1]);
      
      // Perform subtraction
      const result = x - y;
      return result.toString();
    } else {
      return "Insufficient numbers provided in the query.";
    }
  }


  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
