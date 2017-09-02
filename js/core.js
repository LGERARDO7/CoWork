function myFunction()
{
 //Cambiar el texto Dentro De la Etiqueta.//
    document.getElementById('WelcomeText').innerHTML='Este El Es Nuevo Texto De Bienvenida';
    var firstName='Luis';
    var secondName='Gerardo';
    var fullName=firstName+' '+secondName;
    var Weight=20;
    var ClothesWeight=7
    var TotalWeight=Weight+ClothesWeight;
    TotalWeight=Weight+57;
    var Students=17;
    //var Students= Students++;
    //var Students= Students--;
    //var Students= ++Students;
    //var Students= --Students;
    var StudentsToday=Students+10;
    var StudentsNextClass=StudentsToday+50;
    var modulo=77%1;
    //La multiplicación siempre tendra la mayor prioridad.//
    var TotalSignos=((1*7)*7);
    alert('Nombre: '+fullName);
    alert('Peso Total: '+TotalWeight);
    alert('Estudiantes Totales: '+StudentsNextClass);
    alert('Modulo: '+modulo);
    alert('Total De Signos: ' + TotalSignos);
}