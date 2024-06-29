// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt('Insira um número (diferente de 0) para fazermos uma contagem progressiva até o número escolhido');
let contadora = 0;
while (numero >= contadora){
    console.log(contadora);
    contadora++;
    if (numero == 0){
        alert('Insira um número válido, acima de 0!')
    }
}