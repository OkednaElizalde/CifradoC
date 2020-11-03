//vamos a crear una funcion que se encargue del cifrado de cesar
//let en vez de var
var cesar = cesar || (function(){
    //funcion anonima :3 
    //callback

    var doStaff = function(txt, desp, action){
        
        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
        desp = (desp % 27 + 27) % 27;
        var resultado="";
        var i = txt.toLowerCase();
        if(action){
            if(i){
                resultado = i.replace(/[a-z\u00f1\u00d1]/ig, c=> abc[(abc.indexOf(c)+desp)%27]);
            }else{
                return "";
            }
        }else{
            if(i){
                resultado = i.replace(/[a-z\u00f1\u00d1]/ig, c=> abc[(abc.indexOf(c)-desp)%27]);
            }else{
                return "";
            }
        }
        return resultado;
    };

    //ahora solo falta saber si quiero cifrar o descifrar
    return{
        encode : function(txt, desp){
            if(desp>3000){
                return "No puede desplazar más de 3000 veces"
            }
            return doStaff(txt, desp, true);
        },

        decode : function(txt, desp){
            if(desp>3000){
                return "No puede desplazar más de 3000 veces"
            }
            return doStaff(txt, desp, false);
        }
    };
})();

//realizar una funcion que se encargue de codificar y decodificar

function codificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar.encode(
        document.getElementById("cadena").value, document.getElementById("posicion").value);
      
}

function decodificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar.decode(
        document.getElementById("cadena").value, document.getElementById("posicion").value);
      
}