
#  This script contains multiple bugs! Debug and fix them.

def greet(name):
    print("Hello " + name)  # Missing space and indentation issue

def count_to_n(n):
    i = 0
    while i < n:  # Potential infinite loop!
        print(i)
        i += 1
        # Missing increment for i / Fix 

def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)  # What happens if numbers is an empty list?

# --- Main Execution ---
greet("Alice")  # Undefined variable error / Fix: added commas 

count_to_n(5)  # Should print numbers from 0 to 4

average = calculate_average([])  # Edge case: Empty list
print("Average:", average)

