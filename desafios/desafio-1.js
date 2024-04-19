"use strict";
/*
    Criar um objeto funcionário com:
      - Array de strings com os nomes dos supervisores
      - Função de bater ponto que recebe a hora (número)
        e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horario (> 8)
*/
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Marcos', 'André'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
