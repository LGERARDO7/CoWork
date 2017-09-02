function myFunction()
{
 //Cambiar el texto Dentro De la Etiqueta.//
    document.getElementById('WelcomeText').innerHTML='Este El Es Nuevo Texto De Bienvenida';
    //var firstName='Luis';
    //var secondName='Gerardo';
    //var fullName=firstName+' '+secondName;
    //var Weight=20;
    //var ClothesWeight=7
    //var TotalWeight=Weight+ClothesWeight;
    //TotalWeight=Weight+57;
    //var Students=17;
    //var Students= Students++;
    //var Students= Students--;
    //var Students= ++Students;
    //var Students= --Students;
    //var StudentsToday=Students+10;
    //var StudentsNextClass=StudentsToday+50;
    //var modulo=77%1;
    //La multiplicación siempre tendra la mayor prioridad.//
    //var TotalSignos=((1*7)*7);
    //alert('Nombre: '+fullName);
    //alert('Peso Total: '+TotalWeight);
    //alert('Estudiantes Totales: '+StudentsNextClass);
    //alert('Modulo: '+modulo);
    //alert('Total De Signos: ' + TotalSignos);
}
//var question=prompt('What is your favorite music band?','LPDRAC')
//alert(question)

/*
if(question==='LPDRAC')
{
    alert('Que Buena Música');
}
else if(question==='Revolver Cannabis')
{
    alert('Arriba Plebes');
}
else
{
    alert('Hay más música allá Del Top');
console.log(question);//Debug//}
*/

var age=prompt('What is your Age','20');
var gender= prompt('What is your gender', 'female');
var band = prompt('What is your favorite music band?', 'LPDRAC')
if(age>18&&gender==='male')
{
    alert('Eres Hombre');
    if (band === 'LPDRAC')
        {
            alert('Y Tienes Buen Gusto Musical');
        }
}
else if (age > 18 && gender === 'female') 
{
    alert('Eres Mujer');
    if (band === 'LPDRAC') 
    {
        alert('Y Tienes Buen Gusto Musical');
    }
}
else
{
    alert('Eres Del Tercer Espíritu');
}
console.log('Tu Edad Es: '+age+', '+'Tu Género Es: '+gender+', '+'Y Tu Artista Favorito Es: '+band+'.');