dataRealController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

dataRealController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
