EmailClient.Router.map(function() {
  this.resource('all-mail', {path: '/'});
  this.resource('new-mail');
  this.resource('mail', {path: '/all-mail/:mail_id'})
});
