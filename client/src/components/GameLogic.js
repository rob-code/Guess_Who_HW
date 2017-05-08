var GameLogic = function (candidates) {
  this.candidates = candidates;
  this.randomCandidate = {};
  }


    GameLogic.prototype = {

      getRandomCandidate: function(){
        const candidate = this.candidates[this.getRandomIndex()]
        this.randomCandidate = candidate 
        return this.randomCandidate
      },

      getRandomIndex: function() {
        min = Math.ceil(0);
        max = Math.floor(this.candidates.length - 1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },

      genderGuess: function(gender){

        if (gender === this.randomCandidate.gender) {
            return "yes! " + gender + " is the right gender"
          }
          else
          {
              return "no! " + gender + " is the wrong gender"          
          }
      },

      hairColourGuess: function(hairColour){
        if (hairColour === this.randomCandidate.hairColour) {
          return "yes! " + hairColour + " is the right hair colour"
        }
        else
        {
            return "no! " + hairColour + " is the wrong hair colour"          
        }
      },

      heightGuess: function(height){

        if (height === this.randomCandidate.height) {
          return "yes! " + height + " is the right height"
        }
        else
        {
            return "no! " + height + " is the wrong height"          
        }


      },

      candidateGuess: function(name){

        if (name === this.randomCandidate.name) {
          return "yes! " + name + " is the right person"
        }
        else
        {
            return "no! " + name + " is the wrong person"          
        }


      }




    }



module.exports = GameLogic