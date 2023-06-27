var idade = 78

console.log(`Voçe tem ${idade} anos`)

if (idade < 16)
    {console.log('Nao vota')}

else if (idade < 18 || idade > 65)
    {console.log('Voto Opcional')}

else if (idade >= 18)
    {console.log('Voto obrigatorio')}
