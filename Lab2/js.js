var n1 = 9, m1 = 9;
var mas1 = [];
var n2 = 9, m2 = 9;
var mas2 = [];
for (var i = 0; i < m1; i++){
    mas1[i] = [Math.floor(Math.random() * 99)];
    for (var j = 0; j < n1; j++){
        mas1[i][j] = Math.floor(Math.random() * 99);
}}
for (var i = 0; i < m2; i++){
    mas2[i] = [Math.floor(Math.random() * 99)];
    for (var j = 0; j < n2; j++){
        mas2[i][j] = Math.floor(Math.random() * 99);
}}
console.log(mas1,mas2);

function MultiplyMatrix(mas1,mas2)
{
    var rowsmas1 = mas1.length, colsmas1 = mas1[0].length,
        rowsmas2 = mas2.length, colsmas2 = mas2[0].length,
        mas3 = [];
    if (colsmas1 != rowsmas2) return false;
    for (var i = 0; i < rowsmas1; i++) mas3[i] = [];
    for (var k = 0; k < colsmas2; k++)
     { for (var i = 0; i < rowsmas1; i++)
        { var t = 0;
          for (var j = 0; j < rowsmas2; j++) t += mas1[i][j]*mas2[j][k];
          mas3[i][k] = t;
        }
     }
    return mas3;
}
console.log(MultiplyMatrix(mas1,mas2));

function TransMatrix(mas1)       
{
    var m = mas1.length, n = mas1[0].length, AT = [];
    for (var i = 0; i < n; i++)
     { AT[i] = [];
       for (var j = 0; j < m; j++) AT[i][j] = mas1[j][i];
     }
    return AT;
}

console.log(TransMatrix(mas1));


function Determinant(mas1)  
{
    var N = mas1.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[i] = [];
       for (var j = 0; j < N; ++j) B[i][j] = mas1[i][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[i][i]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][i]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[i][i];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][i];
          B[j][i] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[i][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}

console.log(Determinant(mas1))

function MaxValue(mas1) {
	var x = 1;
	var y = 1;
  	var max = 0;
  		for (var i = 0; i < x; i++) {
    		for (var j = 0; j < y; j++) {
      			if (mas1[i][j] > max) {
        			max = mas1[i][j];
        		}
        	}
        }
        return max
    }

console.log(MaxValue(mas1))

