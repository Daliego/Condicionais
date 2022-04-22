import{input} from './io_utils.js'

function main(){
    let numero1 = input('Digite um número:')
    const par = par_impar(numero1)
     
    function par_impar(A){
    if(A/2 && A%2==0){
        console.log(`O número 1 é par`)
    }else if(A/2 && A%2!=0){
        console.log(`O número 1 é ímpar`)
    }
}
    
}
main()