const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const TelaJogo = new Sprite('./Imagens/Tela_Jogo.png')
const TelaInicial = new Sprite('./Imagens/Tela_Inicial.png')
const TelaConfiguracoes = new Sprite('./Imagens/Tela_Configuracoes.png')
const TelaDerrota = new Sprite('./Imagens/Tela_Derrota.png')
const TelaEndGame = new Sprite('./Imagens/Tela_EndGame.png')
const TelaTriunfo = new Sprite('./Imagens/Tela_Triunfo.png')

const player = new Personagem('./Imagens/Parado.png')

const controladora = new ScreenController()

const keys = 
{
    a:
    {
        pressed: false
    },

    d:
    {
        pressed: false
    },
}

function animate()
{
    player.velocity.x = 0

    if(keys.a.pressed)
    {
        player.velocity.x = -5
    }

    if(keys.d.pressed)
    {
        player.velocity.x = 5
    }

    window.requestAnimationFrame(animate)

    switch(controladora.Tela)
    {
        case 0:

            TelaInicial.draw(0,0)

            break
        
        case 1:

            TelaConfiguracoes.draw(0,0)

            break
        
        case 2:

            TelaJogo.draw(0,0)

            player.draw(player.position.x, player.position.y)

            player.update()

            break
        
        case 3:

            TelaEndGame.draw(0,0)

            break
        
        case 4:

            TelaTriunfo.draw(0,0)

            player.draw(player.position.x, player.position.y)

            player.update()

            break
        
        case 5:

            TelaDerrota.draw(0,0)

            break
    }
}

animate()
