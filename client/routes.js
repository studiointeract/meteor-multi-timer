Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function (){
  this.route('home', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('races');
    },
    data: function() {
      return {
        races: Races.find()
      }
    }
  });

  this.route('race', {
    path: '/race/:_id',
    waitOn: function() {
      return Meteor.subscribe('race', this.params._id);
    },
    data: function() {
      return {
        participants: Participants.find({_race: this.params._id})
      }
    }
  });
});
