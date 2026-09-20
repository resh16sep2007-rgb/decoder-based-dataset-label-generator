# Validation Report

## Project
Decoder-Based Dataset Label Generator

## Objective
To verify the operation of the 3-to-8 decoder, one-hot output generation, class labeling, and invalid-input detection.

## Normal Test Cases

| Test | Input | Expected Output | Result |
|---|---|---|---|
| 1 | 000 | Output 0 = 1 | PASS |
| 2 | 001 | Output 1 = 1 | PASS |
| 3 | 010 | Output 2 = 1 | PASS |
| 4 | 011 | Output 3 = 1 | PASS |
| 5 | 100 | Output 4 = 1 | PASS |
| 6 | 101 | Output 5 = 1 | PASS |
| 7 | 110 | Output 6 = 1 | PASS |
| 8 | 111 | Output 7 = 1 | PASS |
| 9 | 000 | Output 0 = 1 | PASS |
| 10 | 111 | Output 7 = 1 | PASS |

## Edge/Fault Test Cases

| Test | Input | Expected Result | Result |
|---|---|---|---|
| 1 | Empty input | Invalid input detected | PASS |
| 2 | 00 | Invalid input detected | PASS |
| 3 | 0001 | Invalid input detected | PASS |
| 4 | 012 | Invalid input detected | PASS |
| 5 | 10-1 | Invalid input detected | PASS |

## Validation Summary

- Normal test cases: 10
- Edge/fault test cases: 5
- Decoder outputs: Validated
- Invalid inputs: Detected
- Dataset generation: Completed
- Dataset exported as: `dataset.csv`

## Conclusion

The decoder-based dataset label generator successfully demonstrates the operation of a 3-to-8 decoder and generates one-hot encoded class labels. The test cases verify normal decoder operation and invalid input handling.
