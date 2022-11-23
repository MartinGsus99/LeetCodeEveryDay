#include <iostream>
using namespace std;

void traverse(int arr[])
{
    for (int i = 0; i < arr.length(); i++)
    {
        //迭代访问；
        cout << arr[i] << " ";
    }
}

int main()
{
    int arr[6] = { 1, 2, 3, 4, 5, 6};
    traverse(arr);
    return 0;
}
