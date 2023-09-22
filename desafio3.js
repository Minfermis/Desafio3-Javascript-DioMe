
/* 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e calcule e imprima a 
sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, Passou esse semestre; */

/* Matérias */
const orientadaObjeto = 7;
const LP2 = 8;
const topicosEspeciais = 9;

/* Calculo */
const Media = (orientadaObjeto + LP2 + topicosEspeciais) / 3;

    if (Media.toFixed(0) < 5) {
        const Reprovado = console.log('Reprovado');
    }
    if (Media.toFixed(0) >=5 && Media.toFixed(0)  <=7) {
        const Recuperacao = console.log('Recuperação');
    }
    else {
        const Aprovado = console.log('Aprovado');
    }

console.log('A média do aluno foi: ' + Media.toFixed(0));