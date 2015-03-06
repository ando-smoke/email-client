EmailClient.MailRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('mail', params.mail_id);
  }
});
