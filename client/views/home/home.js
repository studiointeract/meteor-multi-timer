Template.home.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var name = template.find('input').value;
    template.find('input').value = '';

    Races.insert({name: name});
  }
});
