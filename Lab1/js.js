var n = 9, m = 9;
var mas = [];
for (var i = 0; i < m; i++){
    mas[i] = [Math.floor(Math.random() * 99)];
    for (var j = 0; j < n; j++){
        mas[i][j] = Math.floor(Math.random() * 99);
}}
console.log(mas);