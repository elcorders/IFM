Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});

Template.home.helpers({
    nowOnair: "lorem"
  });


Template.home.helpers({
    Sda: function () {
      return sData.findOne({}, {sort: {createdAt: -1}});
    }
  });

Template.dataReal.helpers({
    Srda: function () {
      return sData.findOne({}, {sort: {createdAt: -1}});
    }
  });

Template.dataReal.events({
  "submit .uPdate-sdata": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.noOna.value;

    console.log(event);
    sData.insert({
      noOna: text,
      createdAt: new Date() // current time
    });

    // Clear form
    // event.target.noOna.value = "";

    // Prevent default form submit
    return false;
  }
});