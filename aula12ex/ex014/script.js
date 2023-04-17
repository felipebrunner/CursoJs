function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //msg.innerHTML = `Agora são ${hora} horas`


    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha.png'
        msg.innerHTML = `Agora são ${hora} horas,
        Bom dia!`
        document.body.style.background = '#e2cd9f'
       
        
    }
    else if (hora >= 12 && hora <=18){
    //Boa Tarde!
        img.src = 'fototarde.png'
        msg.innerHTML = `Agora são ${hora} horas, Boa Tarde!`
        document.body.style.background = '#b9846f'}

    else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        msg.innerHTML = `Agora são ${hora} horas, Boa Noite!`
        document.body.style.background = '#515154'

    }
}