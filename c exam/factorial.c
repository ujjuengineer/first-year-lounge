// recursive function to print the factorial of any number
#include<stdio.h>

long long int fac(int x){
    long long int factorial = 1;
    while(x != 0){
        factorial *= x;
        x--;
    }
    return factorial;
}

int main() {
    printf("%lld",fac(5));
}