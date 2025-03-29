#include<stdio.h>
#include<stdlib.h>

struct student {
    int a;
    int b;
};

int main() {
    struct student* ptr1;
    int *arr;
    int n = 5;

    // Allocate memory for one struct student
    ptr1 = (struct student*) malloc(sizeof(struct student));

    if (ptr1 == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Assign initial values
    ptr1->a = 5;
    ptr1->b = 6;

    printf("%d %d\n", ptr1->a, ptr1->b);

    // Reallocate memory for an array of 5 struct student
    ptr1 = (struct student*) realloc(ptr1, 5 * sizeof(struct student));

    if (ptr1 == NULL) {
        printf("Memory reallocation failed!\n");
        return 1;
    }

    // Assign values to the array of struct student
    for (int i = 0; i < 5; i++) {
        ptr1[i].a = i + 1;
        ptr1[i].b = (i + 1) * 10;
    }

    // Print the values
    for (int i = 0; i < 5; i++) {
        printf("Student %d: a = %d, b = %d\n", i + 1, ptr1[i].a, ptr1[i].b);
    }

    // Free the allocated memory
    free(ptr1);

    arr = (int*) calloc(n, sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Printing the initial values (all will be zero)
    printf("Initial values:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Assigning values to the array
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    // Printing the updated values
    printf("Updated values:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Free the allocated memory
    free(arr);

    return 0;
}
