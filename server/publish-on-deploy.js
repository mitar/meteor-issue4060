Meteor.startup(function() {
  dimsum.configure({
    words_per_sentence: [1, 4],
    flavor: 'jabberwocky',
    commas_per_sentence: [0, 0]
 });
 
 Meteor.setInterval(function() {
   Values.upsert('demo5', {
     value: dimsum.sentence(1).slice(0, -1).toLowerCase()
   });
 }, 3000);
});
