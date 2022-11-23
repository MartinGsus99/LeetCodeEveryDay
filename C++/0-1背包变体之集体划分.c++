#include<iostream>

using namespace std;

bool canPartition(vector<int>& nums)
{
    int sum=0;
    for(int num:nums){
        sum+=num;
    }

    if(sum%2!=0) return false;

    int n=nums.size();

    sum=sum/2;

    vector<vector<bool>> dp(n+1,vector<bool>(sum+1,false));

    //base case
    for(int i=0;i<=n;i++)
    {
        for(int j=0;j<=sum;j++)
        {
            if(j-nums[i-1]<0)
        }
    }
}

int main(){
    cout<<"Hello,world!";
}
