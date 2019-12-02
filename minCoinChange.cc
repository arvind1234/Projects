#include<iostream>
using namespace std;

int count( int S[], int sSize, int n )
{
    // If n is 0 then there is 1 solution (do not include any coin)
    if (n == 0)
        return 1;
     
    // If n is less than 0 then no solution exists
    if (n < 0)
        return 0;
 
    // If there are no coins and n is greater than 0, then no solution exist
    if (sSize <=0 && n >= 1)
        return 0;
 
    // count is sum of solutions (i) including S[m-1] (ii) excluding S[m-1]
    return count( S, sSize - 1, n ) + count( S, sSize, n-S[m-1] );
}

int main() {
    int S[] = {1, 2, 3};
    int S1[] = {1};
    //cout << count(S, 3, 1);
    cout << count(S1, 1, 1);
    
}