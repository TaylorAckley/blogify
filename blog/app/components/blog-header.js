import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['header'],

inlineStyle: Ember.computed('attrs.title', 'attrs.image', function() {
  let title = this.get('attrs.title');
  let header = this.get('attrs.image');
  console.log(header);
  return new Ember.Handlebars.SafeString(`background-image: url(${header.value}); background-size: cover; background-repeat: no-repeat; background-position: center;`);
})
});
