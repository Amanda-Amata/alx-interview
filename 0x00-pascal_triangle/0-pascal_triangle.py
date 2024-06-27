#!/usr/bin/python3
"""
pascal's Triangle
"""

def pascal_triangle(n):
    """returns a list of lists of integers representing the Pascal’s triangle of n
    """
    response = []
    if n > 0:
        for i in range(1, n + 1):
            level = []
            A = 1
            for j in range(1, i + 1):
                level.append(A)
                A = A * (i - j) // j
            response.append(level)
    return response
