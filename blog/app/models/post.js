import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  user: DS.belongsTo('user', { async: true}),
  slug: DS.attr('string'),
  votes: DS.attr('number'),
  views: DS.attr('number'),
  header: DS.attr('string'),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
