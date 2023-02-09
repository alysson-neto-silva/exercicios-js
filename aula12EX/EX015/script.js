function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenth == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 5) {
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade >= 5 && idade < 15){
                img.setAttribute('src', 'criançahomem.png')
            } else if (idade > 15 && idade < 65){
                img.setAttribute('src', "homemjovem.png" )
            } else {
                img.setAttribute('src',"idosohomem.png")
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', "mulherbebe.png")
            } else if (idade >= 5 && idade < 15){
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade > 15 && idade < 65) {
                img.setAttribute('src', 'mulherjovem.png')
            } else {
                    img.setAttribute('src', 'mulheridosa.png')
                }
            }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}
