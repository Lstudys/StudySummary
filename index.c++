#include<iostream>
#include<vector>
using namespace std;
int main(){
  int n;
  cin >> n;
  while (n --){
    string str1, str2;
    cin >> str1 >> str2;
    // cin >> str2;
    if (str1.length() < str2.length()){
      cout << "no";
      continue;
    }
    // vector<int>arr1;
    // vector<int>arr2;
    // for (int i = 0; i < str1.length(); i ++){
    //   arr1[i] = int(str1[i]);
    // }
    // for (int i = 0; i < str2.length(); i ++){
    //   arr2[i] = int(str2[i]);
    // }
    int k = 0;
    for (int i = 0; i < str1.length(); i ++){
      if (k == str2.length())
        break;
      if (str1[i] == str2[k]){
        k ++;
      }
    }
    if (k == str2.length()){
      cout << "yes" ;
    }else{
      cout << "no";
    }
  }
  return 0;
}