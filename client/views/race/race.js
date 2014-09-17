Template.race.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var name = template.find('input').value;
    template.find('input').value = '';

    var _race = Router.current().params._id;
    Participants.insert({name: name, _race: _race});
  },

  'click li': function() {
    if (!this.timestamp) {
      Participants.update({_id: this._id}, {$set: {timestamp: (+new Date)}});
    }
    else if (this.end) {
      Participants.update({_id: this._id}, {
        $set: {
          timestamp: (+new Date),
        },
        $unset: {
          end: true
        }
      });
    }
    else {
      Participants.update({_id: this._id}, {$set: {end: (+new Date)}});
    }
  }
});

Template.race.helpers({
  timer: function() {
    var time = Math.max(0, Session.get('now') - this.timestamp);
    if (time) {
      return moment.utc(time).format("mm:ss.S");
    }
  },

  finish: function() {
    var time = Math.max(0, this.end - this.timestamp);
    if (time) {
      return moment.utc(time).format("mm:ss.S");
    }
  }
});

Meteor.setInterval(function() {
  Session.set('now', (+new Date));
}, 100);
