window.addEventListener("load",function(){
    var lista=[];
var historial=localStorage.getItem('MisVentas');
lista=JSON.parse(historial);
var fila=document.getElementById("Mitabla");
for(var x=0;x<historial.length;x++)
{
    fila.innerHTML+='<tr> <td>'+lista.datos[x].Producto+'</td><td>'+ lista.datos[x].Precio +'</td><td>'+lista.datos[x].Subtotal+ '</td></tr>';
    }
});