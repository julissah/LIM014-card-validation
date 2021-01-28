const validator = {
  
  isValid:(numberCard)=>{
    
    // implementamos el metodo split para convertir el valor de un string en un array
    let reverseCard = numberCard.split('').reverse();

    let result1 = '';
    let result2 = '';
    let result3 = '';
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let arrayConcat = [];
    let sum = 0;
    // let numbers = [];
    let total = 0;

    for (let h=0; h<reverseCard.length;h+=2 ){

        result1 += reverseCard[h];
        array1 = result1.split('');
    }

    for (let i = 1; i<reverseCard.length; i+=2){

        reverseCard[i] *= 2;
        if(reverseCard[i] > 9){

            let numberTwoDigit = reverseCard.toString();
            let addNumber = numberTwoDigit.split(',')[i];
            let num1 = addNumber.charAt(0);
            let num2 = addNumber.charAt(1);
            let sum = parseInt(num1)+parseInt(num2);
            result2 += sum;
            array2 = result2.split('');
        }
        else {
          result3 += reverseCard[i];
          array3 = result3.split('');
        }
    }

    // console.log('array 1: ' + array1);
    // console.log('array 2: ' + array2);
    // console.log('array 3: ' + array3);

    arrayConcat = array1.concat(array2,array3);
    
    // for(let n=0; n<arrayConcat.length; n++){
      
    //   // console.log(arrayConcat[n]);
    //   numbers += arrayConcat[n];
    //   console.log(numbers);

    // }
    
    arrayConcat.forEach(function(n){
      sum += parseInt(n);
    });

    if(sum % 10 == 0){
      total = true;
    }
    else{
      total = false;
    }

    return total;
  },

  maskify:(numberCard)=>{
    let forDigit = numberCard.slice(numberCard.length-4);
    let hideDigit = numberCard.split('');
    let replaceDigit = '';
    let addReplace = '';
    let ok = '';

    for (let h=0; h<hideDigit.length-4; h++){

      replaceDigit += '#';
      
    }
    
    addReplace = replaceDigit.concat(forDigit);
    ok = addReplace.toString();
    // console.log(addReplace);
    // console.log(ok);

    return ok;
  },
};

export default validator;
