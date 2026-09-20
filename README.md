# Decoder-Based Dataset Label Generator

## Project Overview

This project implements a 3-to-8 digital decoder and uses its output to generate class labels and one-hot encoded data for a synthetic dataset.

## Course

EC2201 - Digital System Design and Microprocessors

## Objectives

- Implement a 3-to-8 decoder.
- Define binary class codes.
- Generate one-hot encoded labels.
- Validate decoder outputs.
- Generate a synthetic dataset.
- Export the dataset as a CSV file.
- Test normal and faulty inputs.

## System Workflow

Input Class Code
        |
        v
3-to-8 Decoder
        |
        v
One-Hot Output
        |
        v
Class Label
        |
        v
Dataset Generation
        |
        v
CSV File

## Class Codes

| Input | Class |
|-------|-------|
| 000 | Class_0 |
| 001 | Class_1 |
| 010 | Class_2 |
| 011 | Class_3 |
| 100 | Class_4 |
| 101 | Class_5 |
| 110 | Class_6 |
| 111 | Class_7 |

## Dataset

The project generates 80 samples:

8 classes x 10 samples per class = 80 samples

The generated dataset is stored as `dataset.csv`.

## Testing

The project includes:

- 10 normal test cases
- 5 fault/edge test cases
- Dataset validation

## Technologies Used

- Python
- Google Colab
- Pandas
- Matplotlib

## Files

- `decoder_label_generator.py` - Main Python program
- `dataset.csv` - Generated dataset
- `requirements.txt` - Required Python libraries
- `README.md` - Project documentation

## Conclusion

The project demonstrates how a digital 3-to-8 decoder can be combined with Python-based dataset generation to automatically create validated one-hot class labels.
