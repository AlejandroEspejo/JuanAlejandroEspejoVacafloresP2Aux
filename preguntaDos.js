function calmeCase(cadena){
    let resultado="";
    for(let i=0;i<cadena.length;i++){
        if(cadena.charAt(i)=='_'){
            i++;
            resultado=resultado+cadena.charAt(i).toUpperCase();
        }
        else if(cadena.charAt(i)!=' '){
            resultado=resultado+cadena.charAt(i);
        }
    }
    return resultado;
}
function cadenaMaxima(cadena){
    let contador=0;
    let cadenaMayor=0;
    for(let i=0; i<cadena.length;i++){
        if(cadena.charAt(i)!='\n')
            contador++;
        else{
            if(contador>cadenaMayor)
                cadenaMayor=contador;
            contador=0;
        }
    }
    return cadenaMayor;
}
function agregacion(cadena){
    let final = "";
    let cadmax = cadenaMaxima(cadena+"\n");
    let referencia = 1;
    let contador = 1;
    for(let i=0; i<cadena.length;i++){
        if(cadena.charAt(i+1)!='\n'){
            final=final+cadena.charAt(i);
            contador++;;
        }
        else{
            final=final+cadena.charAt(i);
            let rango=cadmax-contador;
            for(let j=1;j<=rango+5;j++)
                final=final+" ";
            for(let j=1;j<=referencia;j++)
                final=final+"✅";
            referencia++;
            contador=0;
        }
    }
    return final;
}
console.log("CADENA DE ENTRADA");
let auxiliar='underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure';
console.log(auxiliar);
let cadena=calmeCase(auxiliar.toLowerCase());
console.log("CADENA DE SALIDA");
console.log(agregacion(cadena+"\n"));
