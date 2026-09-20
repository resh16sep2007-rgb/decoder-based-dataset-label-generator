# Test cases for Decoder-Based Dataset Label Generator

from decoder_label_generator import decoder


# 10 normal test cases
normal_tests = [
    ([0, 0, 0], 0),
    ([0, 0, 1], 1),
    ([0, 1, 0], 2),
    ([0, 1, 1], 3),
    ([1, 0, 0], 4),
    ([1, 0, 1], 5),
    ([1, 1, 0], 6),
    ([1, 1, 1], 7),
    ([0, 0, 0], 0),
    ([1, 1, 1], 7)
]

print("NORMAL TEST CASES")
print("------------------")

for bits, expected_index in normal_tests:
    result = decoder(bits)
    actual_index = result.index(1)

    if actual_index == expected_index:
        print(bits, "PASS")
    else:
        print(bits, "FAIL")


# 5 edge/fault test cases
fault_tests = [
    ([], "Invalid input"),
    ([0, 0], "Invalid input"),
    ([0, 0, 0, 1], "Invalid input"),
    ([0, 1, 2], "Invalid input"),
    ([1, 0, -1], "Invalid input")
]

print("\nEDGE/FAULT TEST CASES")
print("---------------------")

for bits, expected in fault_tests:
    result = decoder(bits)

    if result is None:
        print(bits, "PASS - Invalid input detected")
    else:
        print(bits, "FAIL")
