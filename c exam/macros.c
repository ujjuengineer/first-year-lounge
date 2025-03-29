#include<stdio.h>

#define maxi(a,b) if(a>b){\
    printf("%d",a);\
}\
else printf("%d",b);

/*
    \ is used as escape sequence so that compiler knows next line of code belongs to the same macros
*/

int main() {
    maxi(5,6);
}