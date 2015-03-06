EmailClient.Mail = DS.Model.extend({
  fromAddress: DS.attr(),
  toAddress: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  createDate: DS.attr()
});
