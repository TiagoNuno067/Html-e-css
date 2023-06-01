
var agora = new Date()
var hora = agora.getHours()

if (hora < 12 && hora >= 6)
    {console.log(`Agora sao ${hora} horas da manha BOM DIA!`)}

else if (hora >= 12 && hora <= 18)
    {console.log(`Agora sao ${hora} horas da tarde BOA TARDE!`)}

else if (hora > 18 && hora > 00)
    {console.log(`Agora sao ${hora} horas da noite`)}

else if (hora >= 1 && hora < 6)
    {console.log(`Agora sao ${hora} horas da madrugada!`)}