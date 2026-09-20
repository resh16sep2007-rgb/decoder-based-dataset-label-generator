import pandas as pd

# 3-to-8 Decoder
def decoder(input_bits):
    if len(input_bits) != 3 or any(bit not in [0, 1] for bit in input_bits):
        return None

    index = input_bits[0] * 4 + input_bits[1] * 2 + input_bits[2]

    output = [0] * 8
    output[index] = 1

    return output


# Class codes
class_codes = {
    "000": "Class_0",
    "001": "Class_1",
    "010": "Class_2",
    "011": "Class_3",
    "100": "Class_4",
    "101": "Class_5",
    "110": "Class_6",
    "111": "Class_7"
}


# Generate dataset
data = []

for code, label in class_codes.items():
    bits = [int(bit) for bit in code]
    one_hot = decoder(bits)

    for sample in range(10):
        row = {
            "input": code,
            "class_label": label,
            "sample": sample + 1
        }

        for i, value in enumerate(one_hot):
            row[f"output_{i}"] = value

        data.append(row)


# Create DataFrame
df = pd.DataFrame(data)

# Save dataset
df.to_csv("dataset.csv", index=False)

print("Dataset generated successfully!")
print("Total samples:", len(df))
print(df.head(10))
