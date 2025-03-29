#include<stdio.h>
#include<stdlib.h>

int main() {
    FILE *file = fopen("hello.txt","w+");
    char str[50];
    fputs("kya re madharchod", file);
    rewind(file);
    fgets(str, 50, file);
    printf("%s",str);
    fclose(file);
}