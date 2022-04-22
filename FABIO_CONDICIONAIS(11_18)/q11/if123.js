import{input} from './io_utils.js'

function main(){
    let opçao = input('Digite o número da opção:')
    let numero1 = Number(input('Digite um número:')) 
    let numero2 = Number(input('Digite um número:')) 
    let numero3 = Number(input('Digite um número:')) 
    const resultado = opção(opçao, numero1, numero2, numero3)

    function opção(opcao, a, b, c){
    if(opçao==1){
        return console.log(`O número 1 é ${a}`)
    }else if(opçao==2) {
        return console.log(`O número 2 é ${b}`)
    }else if(opçao==3){
        return console.log(`O número 3 é ${c}`)
    }else{
        return console.log('Só aceitamos os dígitos 1, 2, 3 em opção.')
    }
    }
}
main()