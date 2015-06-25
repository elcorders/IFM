Items = new Mongo.Collection('items');

sData = new Mongo.Collection("sData");

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});



sData.allow({
      insert: function () { return true; },
      update: function () { return true; },
      remove: function () { return true; }
});