import csv

# Specify the output file name
output_file = "test.csv"

# Number of rows you want
num_rows = 1000

# Header
header = ["title", "roll"]

# Generate data
data = [["test{}".format(i), str(i)] for i in range(1, num_rows + 1)]

# Write to CSV
with open(output_file, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(data)

print(f"CSV file '{output_file}' generated with {num_rows} rows.")