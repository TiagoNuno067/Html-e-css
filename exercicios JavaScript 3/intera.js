function carregar() 

    {var m = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var b = document.body
    var agora = new Date()

    var hora = agora.getHours()

    m.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12)
        {img.src = 'imagens/4235a7c906ca07412869075b58ac3466.jpg'
        b.style.background = 'bisque'
        }
    else if (hora > 12 && hora <= 17)

        {img.src = 'imagens/fototarde.jpg'
        b.style.background = 'brown'}

    else if (hora > 17 && hora <= 23)
        {img.src ='imagens/fotonoite.jpg'
        b.style.background = '#042326'}
    }