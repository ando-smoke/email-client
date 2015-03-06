EmailClient.NewMailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newMail = this.store.createRecord('mail', {
        fromAddress: this.get('from'),
        toAddress: this.get('to'),
        subject: this.get('subject'),
        body: this.get('body'),
        createDate: Date.now()
      });

      this.set('from', null);
      this.set('to', null);
      this.set('subject', null);
      this.set('body', null);

      newMail.save();
      this.transitionToRoute('all-mail');
    }
  }
});
