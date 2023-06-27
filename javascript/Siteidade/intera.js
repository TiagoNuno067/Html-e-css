function verificar() {
    var dado = document.getElementById('dado')
    var tano = document.getElementById('txtano')
    var data = new Date() 
    var ano = data.getFullYear()
    var idade = ano - tano.value

    if (tano.value <= 0 || tano.value > ano) {
        alert('Dados Invalidos')}
    var sex = document.getElementsByName('fsex')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    genero = ``

    if (sex[0].checked)
     { 
        genero = `Homem`
        if (idade <= 10) {
            img.setAttribute('src', 'meninocriança.jpg')}

        else if (idade > 10 && idade <= 21) {
            img.setAttribute('src', 'jovemhomem.jpg')}
        
        else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'homemadulto.jpg')}

        else {
            img.setAttribute('src', 'homemidosa.jpg')}
        }

    else 

    {
        genero = 'Mulher'
        if (idade <= 10 ) {
            img.setAttribute('src', 'meninacriança.jpg')}

        else if (idade > 10 && idade <= 21) {
            img.setAttribute('src', 'mulherjovem.jpg')}
        
        else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'mulheradulta.jpg')}
            
        else {
            img.setAttribute('src', 'mulheridosa.jpg')}
        }
    dado.innerHTML = `${genero} de ${idade} anos de idade`
    dado.append(img)
    dado.style.textAlign = 'center'

    }