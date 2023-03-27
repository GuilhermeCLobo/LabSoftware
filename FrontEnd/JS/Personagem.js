class Personagem extends Sprite
{
    constructor(imageSrc)
    {
        super(imageSrc)

        this.width = 100
        this.height = 100
        this.gravity = 1

        this.position = {

            x:100,

            y:100,
        }

        this.velocity = {

            x:0,

            y:0,
        }

        this.sides = {

            bottom: this.position.y + this.height
        }
    }

    update()
    {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        this.sides.bottom = this.position.y + this.height

        if(this.sides.bottom + this.velocity.y < canvas.height)
        {
            this.velocity.y += this.gravity
        }

        else
        {
            this.velocity.y = 0
        }
    }
}