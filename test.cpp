#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include <math.h>

using namespace std;

bool esRepetido(int n, int array[])
{

	for (int i = 0; i < 10; i++)
	{

		if (n == array[i])
		{
			return true;
		}
	}

	return false;
};

int main()
{

	int array[10];
	int n, i;

	while (i < 10)
	{
		srand(time(NULL));

		n = 1+rand() % 10;

		if (!esRepetido(n, array))
		{
			array[i] = n;
			i++;
			cout << n << endl;
		}
	}

	return 0;
}
