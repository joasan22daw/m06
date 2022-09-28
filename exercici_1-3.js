// Joan Sanahuja Solé - 27/09/22 - M06
// .js del html "exercici_1-3.html"

const capital = [
    "Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "Washington_DC", "Otawa", "L\'Havana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipe"
];

const pais = [
    "França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova_Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"
];

const continent = [
    "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia", "Àsia"
];



window.onload= function(){

    document.getElementById('boto2').onclick = function() {
        document.getElementById('t1').innerHTML='';
    }
    
    document.getElementById('boto').onclick = function() {
        let num1 = document.getElementById('num1').value;
        document.getElementById('t1').innerHTML='';
        if (num1 <= 10 && num1 >= 1){
            for (let x=1;x<=num1;x++){
                aleatori = Math.floor(Math.random() * 23);
                document.getElementById('t1').innerHTML+='<tr>'+'<td>'+capital[aleatori]+ '</td>'+ '<td>' + pais[aleatori] + '</td>' + '<td>' + continent[aleatori] +'</td>'+'</tr>';   
            }
        }
    }
}