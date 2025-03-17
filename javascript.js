let idade = 60;

if (idade < 18 && idade > 0) {
    console.log('Você é criança!');
} else if (idade >= 18 && idade <= 60) {
    console.log('Você é adulto!');
} else if (idade > 60) {
    console.log('Você é um idoso!');
} else {
    console.log('Insira uma idade válida!')
}