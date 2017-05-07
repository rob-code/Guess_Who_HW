var GameLogic = function (candidates) {
  this.candidates = candidates;
  this.randomCandidate = {};
  }


    GameLogic.prototype = {

      getRandomCandidate: function(){
        const randomCandidate = this.candidates[this.getRandomIndex()]
        return randomCandidate
      },

      getRandomIndex: function() {
        min = Math.ceil(0);
        max = Math.floor(this.candidates.length - 1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }






    }



module.exports = GameLogic