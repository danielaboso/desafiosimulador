let monto = parseInt(prompt("Por favor ingrese el monto del crédito que desea obtener"));
let periodoPago =parseInt(prompt("Por favor ingrese los meses en los que desea pagar su crédito"));
const tasaDeInteres=0.55;


function cuotaCredito (){
    let cuotaTotal=(monto/periodoPago)+(monto/periodoPago*(tasaDeInteres/periodoPago));
    alert("El crédito de solicitado de $ "+monto+ " será devuelto en "+periodoPago+" cuotas de $"+cuotaTotal);
}

cuotaCredito();
