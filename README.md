# Desafio 03 em Javacript - Dio me

## Introdução
Esse código permite calcular a média das notas de um aluno em três disciplinas e classificá-lo com base em critérios predefinidos.

## Variáveis
No início do código, três variáveis são declaradas para representar as notas de um aluno em três disciplinas diferentes:
- As variaveis das matérias são `orientadaObjeto, LP2 e topicosEspeciais.`
- Os valores dessas variáveis são definidos com as notas do aluno nas respectivas disciplinas `(por exemplo, 7, 8 e 9).`

## Cálculo da Média
O código realiza o cálculo da média das notas do aluno usando a fórmula 

`(orientadaObjeto + LP2 + topicosEspeciais) / 3.`

O resultado desse cálculo é armazenado em uma variável chamada `Média`

## Verificação e Classificação da Média
O código utiliza estruturas condicionais if para verificar a média calculada e determinar a classificação do aluno com base em uma tabela de classificação predefinida.
A tabela de classificação é a seguinte:
- Se a média for menor que 5, o aluno é classificado como "Reprovado".
- Se a média estiver entre 5 e 7 (inclusive), o aluno está em "Recuperação".
- Caso contrário, a média é considerada suficiente, e o aluno é classificado como "Aprovado".

|

    if (Media < 5) {

    console.log('Reprovado');

    }

    else if (Media >= 5 && Media <= 7) {

    console.log('Recuperação');

    }   

    else {

    console.log('Aprovado');

    }   

## Impressão da Média
Por fim, o código utiliza a função `console.log` para exibir a média final do aluno. A média é arredondada para um número inteiro usando o método `.toFixed(0)`.

`console.log('A média do aluno foi: ' + Media.toFixed(0));`

### Conclusão
A apresentação desses tópicos fornece uma visão abrangente do funcionamento do código e de como ele é estruturado para calcular a média e classificar o aluno de acordo com as notas obtidas.
