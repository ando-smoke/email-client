EmailClient.NewMailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newMail = this.store.createRecord('mail', {
        fromAddress: this.get('from'),
        toAddress: this.get('to'),
        subject: this.get('subject'),
        body: this.get('message'),
        createDate: Date.now()
      });

      newMail.save();
      this.transitionToRoute('all-mail');
    }
  }
});
