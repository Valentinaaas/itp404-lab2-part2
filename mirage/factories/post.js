import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(i) {
    return faker.name.firstName();
  },
  lastName(i) {
    return faker.name.lastName();
  },
  jobTitle(i) {
    return faker.name.jobTitle();
  },
  phoneNumberFormat(i) {
    return faker.phone.phoneNumberFormat();
  }
});
