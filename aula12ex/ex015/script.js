function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var gênero_masculino = document.getElementById('masculino')
        var gênero_feminino = document.getElementById('feminino')

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (gênero_masculino.checked) {
            var genero = 'Homem'

            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')

            } else if (idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')

            } else if (idade <50){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')

            } else {
                //idoso
                img.setAttribute('src','foto-idoso-m.png')

            }


        } else if (gênero_feminino.checked) {
            var genero = 'Feminino'
            
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')

            } else if (idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')

            } else if (idade <50){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')

            } else {
                //idoso
                img.setAttribute('src','foto-idoso-f.png')

            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
        
    }
}