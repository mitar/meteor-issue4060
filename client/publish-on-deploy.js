Template.hello.helpers({
  counter: function () {
    return Values.find().count();
  }
});
