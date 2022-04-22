import { input } from './io_utils.js'

function main(){
   
    const numero_primos = Number(input('Digite um número de 0 a 100:'))
    const e_primno = primo(numero_primos)
    
   
}
 main()
 
function primo(primos){
    if(primos == 2 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47 | 53 | 59 | 61 | 67 | 71 | 73 | 79 | 83 | 89 | 97){
      return console.log('É um número primo')  
    }else{
        return console.log('Não é um número primo') 
    }
   // [2, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

}
   

