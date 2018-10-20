import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  jobTitle: DS.attr('string'),
  phoneNumberFormat: DS.attr('string')
});
