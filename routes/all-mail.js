EmailClient.AllMailRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('mail');
  }
});
