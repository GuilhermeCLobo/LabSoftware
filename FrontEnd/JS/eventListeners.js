window.addEventListener('keydown', (event) => {

    switch(event.key)
    {
        case ' ':

            if(player.velocity.y == 0)
            {
                player.velocity.y = -20
            }

            break
        
        case 'a':

            keys.a.pressed = true

            break
        
        case 'd':

            keys.d.pressed = true

            break
    }
})

window.addEventListener('keyup', (event) => {

    switch(event.key)
    {
        case 'a':

            keys.a.pressed = false

            break
        
        case 'd':

            keys.d.pressed = false

            break
    }
})

window.addEventListener('click', (event) => 
{
    switch (controladora.Tela)
    {
        case 0:
            
            if(controladora.MouseX > 312 && controladora.MouseX < 710 
            && controladora.MouseY > 325 && controladora.MouseY < 425)
            {
                controladora.updateTela(2)
            }
            
            if(controladora.MouseX > 312 && controladora.MouseX < 710 
            && controladora.MouseY > 455 && controladora.MouseY < 552)
            {
                controladora.updateTela(1)
            }

            break
        
        case 1:

            if(controladora.MouseX > 24 && controladora.MouseX < 170 
            && controladora.MouseY > 510 && controladora.MouseY < 566)
            {
                controladora.updateTela(0)
            }

            break
        
        case 2:

            controladora.updateTela(3)

            break
        
        case 3:
            
            if(controladora.MouseX < 512)
            {
                controladora.updateTela(4)
            }

            else
            {
                controladora.updateTela(5)
            }

            break
        
        case 4:

            if(controladora.MouseX > 530 && controladora.MouseX < 1000 
            && controladora.MouseY > 480 && controladora.MouseY < 576)
            {
                controladora.updateTela(2)
            }

            break
        
        case 5:

            if(controladora.MouseX > 293 && controladora.MouseX < 737 
            && controladora.MouseY > 300 && controladora.MouseY < 398)
            {
                controladora.updateTela(2)
            }
            
            if(controladora.MouseX > 293 && controladora.MouseX < 737 
            && controladora.MouseY > 420 && controladora.MouseY < 520)
            {
                controladora.updateTela(0)
            }

            break
    }
    
})

window.addEventListener("mousemove", (event) => {

    controladora.updateMouse(event.offsetX, event.offsetY)
})