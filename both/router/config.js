Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading'
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

Tasks = new Mongo.Collection("realData");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.appLayout.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}