Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function (){
  this.route('home', {
    path: '/',
    data: function() {
      return {
        races: Races.find()
      }
    }
  });

  this.route('race', {
    path: '/race/:_id',
    data: function() {
      return {
        participants: Participants.find({_race: this.params._id})
      }
    }
  });
});
