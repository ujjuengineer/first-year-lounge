#include<stdio.h>
#include<string.h>

typedef struct {
    char name[50];
    int rollNum;
}student;

int main(){
    student ujjwal;
    strcpy(ujjwal.name, "Ujjwal kumar sharma");
    ujjwal.rollNum = 63;

    printf("%s\n",ujjwal.name);

    // we can use = operator to assign the value of similar structure

    student newStudent;
    newStudent = ujjwal; // now newstudent have values similar to ujjwal
    printf("%d is the roll number of new student\n",newStudent.rollNum);
    
}
// note you can't use = operator for arrays just like structures