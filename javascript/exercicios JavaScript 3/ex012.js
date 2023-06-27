var agora = new Date()

var hora = agora.getHours()

console.log(`sao ${hora} horas`)

if (hora <= 12 && hora > 5)
    {console.log(`Bom Dia Flor do dia!`)}

else if (hora > 12 && hora < 18)
    {console.log(`Boa tarde Meu amigo daqui a pouco e noite!`)}

else if (hora >= 18 && hora > 00)
    {console.log(`Boa Noite parceiro daqui a pouco jantar e dormir!`)}

else if (hora >= 00 && hora < 5)
    {console.log(`Vish! ta tarde vai dormir`)}