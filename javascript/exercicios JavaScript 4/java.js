function verificar() 
    {
    var dado = document.getElementById('dado')
    var nas = document.getElementById('txtano')
    var data = new Date
    var ano = data.getFullYear()

    if (nas.value == 0 || nas.value > ano)
        {alert('Dados Invalidos!')}

    var fsex = document.getElementsByName('radisex')
    var idade = ano - Number(nas.value) 
    var genero = ` `
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) 
        {genero = 'Homem'

        if (idade <= 10) {
            img.setAttribute('src', 'meninocriança.jpg')}

        else if (idade > 10 && idade < 21)
            {img.setAttribute('src', 'jovemhomem.jpg')}
        
        else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'homemadulto.jpg')}

        else if (idade >= 50) {
            img.setAttribute('src', 'homemidosa.jpg')}
        }
    
    else {

        genero = 'Mulher'

        if (idade <= 10) {
            img.setAttribute('src', 'meninacriança.jpg')}

        else if (idade > 10 && idade < 21) {
            img.setAttribute('src', 'mulherjovem.jpg')}
        
        else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'mulheradulta.jpg')}
            
        else if (idade >= 50) {
            img.setAttribute('src', 'mulheridosa.jpg')}
    }
    dado.style.textAlign = 'center'
    dado.innerHTML =`detectamos ${genero} com ${idade} anos`
    dado.append (img)
    }