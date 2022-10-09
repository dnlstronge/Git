
const team = {
    
    
    _players: [

    {firstName: 'Dave',
      lastName: 'Ballsack',
      age: 32},

     {firstName: 'Harry',
      lastName: 'Flopsweat',
      age: 28},

     {firstName: 'Billy',
      lastName: 'Nomates',
      age: 22
      }],

    _games: [
    { opponent: 'The Burglers' , teamPoints: 13, opponentPoints: 12 },

    { opponent: 'The Rapscallions' , teamPoints: 5 , opponentPoints: 9 },

    { opponent: 'Shifty Balls FC' , teamPoints: 7, opponentPoints: 8 }
    ],

    get players() {return this._players;
    },
    get games() {return this._games;
    },

   addPlayer(newFirstName, newLastName, newAge){
      
      let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
      };

      this.players.push(player);
   
   },
   addGames(newOpponent, newTeamPoints, newOpponentPoints){
     let game = {
       opponent: newOpponent,
       teamPoints: newTeamPoints,
       opponentPoints: newOpponentPoints
     }
     this.games.push(game);
   }
  
};

//team.addPlayer('Randy', 'Bobandi', 45);
//console.log(team.players);
    
team.addGames('Titans', 100, 98);
console.log(team.games);
    

//console.log(team._players);