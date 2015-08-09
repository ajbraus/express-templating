$(function() {
  console.log("hello")
  $userTemplate = _.template($('#user-template').html());
  $.get('/api/users', function(data) {
    _.each(data, function(user) {
      $('body').append($userTemplate(user));  
    })
  })
})