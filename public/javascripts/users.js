$(function() {
  console.log("hello")
  var $userTemplate = _.template($('#user-template').html());
  // var $userTemplate = Handlebars.compile($('#user-template').html());
  
  $.get('/api/users', function(data) {
    _.each(data, function(user) {
      $('body').append($userTemplate(user));  
    })
  })
})