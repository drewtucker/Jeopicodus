export class Game {
  public playerOneScore: number = 0;
  public playerTwoScore: number = 0;
  public playerOneTurn: boolean = true;
  public playerTwoTurn: boolean = false;
  constructor(public playerOne:string, public playerTwo: string){}

  changePlayer()
  {
    if(this.playerOneTurn === true)
    {
      this.playerOneTurn = false;
      this.playerTwoTurn = true;
    }
    else if(this.playerTwoTurn === true)
    {
      this.playerOneTurn = true;
      this.playerTwoTurn = false;
    }
  }

  getWinner()
  {
    if(this.playerOneScore >= this.playerTwoScore)
    {
      return alert(this.playerOne + "has won!!");
    }
    else if (this.playerTwoScore >= this.playerOneScore)
    {
      return alert(this.playerTwo + "has won!!");
    }
    else{
      return alert("It's a draw!");
    }
  }
}
