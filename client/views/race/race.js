Template.race.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var name = template.find('input').value;
    template.find('input').value = '';

    var _race = Router.current().params._id;
    Participants.insert({name: name, _race: _race});
  }
});
