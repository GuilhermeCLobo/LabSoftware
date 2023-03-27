class ScreenController
{
    constructor()
    {
        this.Tela = 0

        this.MouseX = 0

        this.MouseY = 0
    }

    updateTela(TelaSeguinte)
    {
        this.Tela = TelaSeguinte
    }

    updateMouse(x, y)
    {
        this.MouseX = x

        this.MouseY = y
    }
}