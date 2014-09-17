Races = new Meteor.Collection('races');

if (Meteor.isServer) {
  Meteor.publish('races', function() {
    return Races.find();
  });

  Meteor.publish('race', function(_race) {
    var race = Races.find({_id: _race});
    var participants = Participants.find({_race: _race});
    return [race, participants];
  });
}
