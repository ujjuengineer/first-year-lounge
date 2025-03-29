#include<stdio.h>

void fun(){
    static int y; 
    /*
        Key Characteristics:
        Lifetime: The variable persists for the entire duration of the program (global lifetime), but the behavior depends on whether it's local or global.
        Default Value: Automatically initialized to 0 if not explicitly initialized.
        Storage: Stored in the data segment (not on the stack).
    */
    y++;
    printf("%d is the value of y\n",y);
}

int main() {
    auto int x; // this is similar to int x, the auto keyword is rarely used explicitly because local variables are implicitly auto.
    /*
        Key Characteristics:
        Scope: Limited to the block or function where the variable is declared (local scope).
        Lifetime: Exists only during the execution of the block or function. The memory is allocated when the block is entered and deallocated when the block is exited.
        Default Value: Uninitialized (contains garbage value unless explicitly initialized).
        Storage: Stored in the stack.
    */


    fun();
    fun();
    fun();
    
}