//descripcion 
//Dado un mes como un número entero del 1 al 12, regrese a qué trimestre del año pertenece como un número entero.

const quarterOf = (month) => {
    if (month >= 1 && month <= 3 ){
      return 1;
    } else if (month >= 4 && month <= 6){
      return 2;
    } else if (month >= 7 && month <= 9){
      return 3;
    } else if (month >= 10 && month <= 12){
      return 4;
    }
  }