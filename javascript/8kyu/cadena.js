//descripcion
//Alex acaba de conseguir un nuevo hula hoop, le encanta pero se siente desanimado porque su hermano pequeño es mejor que él.
//Debes escribir un programa donde Alex pueda ingresar (n) cuántas veces el aro da vueltas y le devolverá un mensaje de aliento:
//Si Alex logra 10 o más vueltas con el aro, devuelve la cadena "Great, now move on to tricks".
//Si no logra 10 vueltas, devuelve la cadena "Keep at it until you get it".

function hoopCount (n) {
    if (n >= 10) {
      return "Great, now move on to tricks";
      } else {
        return "Keep at it until you get it";
      }
 }