let profession = "atleta";

console.log("Profissão: " + profession);

switch(profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE!');
        break;
    case 'bombeiro':
        console.log('Sua camisa será AZUL!');
        break;
    case 'policial':
        console.log('Sua camisa será AMARELA!');
        break;
    default:
        console.log('Sua camisa será PRETA!');
        break;
}