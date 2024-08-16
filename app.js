const textArea = document.querySelector(".area_texto");
const mensaje = document.querySelector(".area_mensaje");

    

function btnEncriptar(){
    if (textArea.value == ""){
        alert("¡Debes ingresar un texto!, solo letras minúsculas, sin acentos y sin caracteres especiales!");
    }else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        document.getElementById("copiar").removeAttribute("style");
        document.querySelector(".instrucciones_mensaje").setAttribute("style","visibility:hidden");
        
        
        
    }
}



function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);


        }
      }

      return stringEncriptado;
}

function btnDesencriptar(){
    if (textArea.value == ""){
        alert("¡Debes ingresar un texto!, solo letras minúsculas, sin acentos y sin caracteres especiales!");
    }else{
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        document.getElementById("copiar").removeAttribute("style");
        document.querySelector(".instrucciones_mensaje").setAttribute("style","visibility:hidden");
        
    }    

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);


        }
      }

      return stringDesencriptado;
    }



function copiar(){

        const textoAcopiar = mensaje;

            textoAcopiar.select();
            //document.execCommand("copy");
            navigator.clipboard.writeText(textoAcopiar.value);
            mensaje.value = "";
            alert("Texto copiado al portapapeles");
            mensaje.style.backgroundImage= "url(imagenes/Muñeco.png)";
            document.querySelector(".instrucciones_mensaje").removeAttribute("style");
            document.querySelector("#copiar").setAttribute("style","visibility:hidden;");
}