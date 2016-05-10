import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  handle: DS.attr(),
  verified: DS.attr(),
  profile: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
