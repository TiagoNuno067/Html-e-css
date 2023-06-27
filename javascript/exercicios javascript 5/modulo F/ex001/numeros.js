    var num = document.getElementById("inum")
    var valordentro = document.getElementById("ivalores")
    var dado = document.getElementById("res")

    var valores = []

    function Adicionar() {

        var n = valores.push(Number(num.value))
        
        if (n == 0 || n > 100) {
            alert("Dados Invalidos")
        }
        else {
            var item = document.createElement("option")
            item.text = `Valor ${num.value} adicionado`
            valordentro.appendChild(item)
            num.value = ``
            num.focus()
        }
        
    }

    function finalizar() {
        if (valores.length == 0) {
            alert("Adicione os valores")
        }
        else {
            let total = valores.length
            dado.innerHTML = `O total de valores foi ${total}`
        }
    }

