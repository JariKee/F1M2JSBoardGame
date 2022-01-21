class player
{
    constructor(index)
    {
        this.index;
        this.attile = 0;
        this.pawn = document.getElementById("pawn"+index)[0];
        this.pawn.style.display = "block";


    }
}

class title
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;

    }
}

class Game
{
    constructor()
    {
        this.selectplayersDiv = document.getElementsByClassName ("selectplayers")[0];
        this.winnerDiv = document.getElementsByClassName ("winner")[0];
        this.playerturnDiv = document.getElementsByClassName ("player")[0];
        this.rollDiv = document.getElementsByClassName ("roll")[0];
        this.mainDiv = document.getElementsByClassName ("main")[0];
        this.boardDiv = document.getElementsByClassName ("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName ("selectpalyers")[0];

        this.title = [];
        this.player = [];
        this.payerturn = [0];
        this.setupBoard();

           
    }

    setupBoard()
    {
        //1=right, 0=up, 3=left
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 
            0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 
            1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 
            3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 
            1, 1, 1, 1, 1]

        let x = 0;
        let y = 10;
        let tileSize = 55;

        for (var i = 0; i < path.length; i++)
        {
            let cmd = path[i];
            if (cmd == 1)
            {
                //right
                x++;
            }
            else if (cmd == 3)
            {
                //left
                x--;
            }
            else if (cmd == 1)
            {
                //up
                x--;
            }

            let div = this.makeBoardDiv(x * tileSize, y * tileSize, i + 1)

            let tile = new tile(div);
            this.tile.push(tile);
        }
    }
    setupGotos()
    {

    }
    start()
    {

    }
    moveToNextPlayer()
    {

    }
    draw()
    {

    }
    roll()
    {

    }
    setPawn(playerI, attile)
    {

    }
    letmakeBoardDiv(x, y, titleDisplayNumber)
    {
        let div = document.createElement("div");

        div.className = "tile"
        div.style.left =x + "px";
        div.style.top =y + "px";
        div.textcontent = titleDisplayNumber;

        this.boardDiv.appendChild(div);

        return div;
    }
}
