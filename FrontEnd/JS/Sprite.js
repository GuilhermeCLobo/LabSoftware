class Sprite
{
    constructor(imageSrc)
    {
        this.image = new Image()

        this.image.src = imageSrc
    }

    draw(x, y)
    {
        c.drawImage(this.image, x, y)
    }
}