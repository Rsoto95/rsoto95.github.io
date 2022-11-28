#include <iostream>;
using namespace std;
int main(){
cout<<"1 2 "<<"3 4"<<endl;

cout<<"1 "<<"2 "<<"3 "<<"4 "<<endl;

cout<<"1 ";
cout<<"2 ";
cout<<"3 ";
cout<<"4 ";
	return 0;
}


using namespace std;
int main(){
int N1,N2,N3,N4,N5;
int array[5];
cout<<"Porvafor ingrese 5 numeros"<<endl;
cout<<"Ingrese numero 1"<<endl;
cin>>N1;
cout<<"Ingrese numero 2"<<endl;
cin>>N2;
cout<<"Ingrese numero 3"<<endl;
cin>>N3;
cout<<"Ingrese numero 4"<<endl;
cin>>N4;
cout<<"Ingrese numero 5"<<endl;
cin>>N5;
array[0]=N1; array[1]=N2; array[2]=N3; array[3]=N4; array[4]=N5;
int Mayor=array[0];
int Menor=array[0];
int i =1;
while(i<5){
	if(Mayor<array[i]){
		Mayor=array[i];
	}
	if(Menor>array[i]){
		Menor=array[i];
	}
	i++;
}
cout<<"El numero mayor es "<<Mayor<<endl;
cout<<"El numero menor es "<<Menor;
	return 0;
}