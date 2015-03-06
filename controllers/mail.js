EmailClient.MailController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('all-mail');
    }
  }
});
