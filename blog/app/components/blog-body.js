import Ember from 'ember';

export default Ember.Component.extend({
  sanitizeBody: Ember.computed('attrs.body', function() {
    let body = this.get('attrs.body');
    console.log(body);
    return new Ember.String.htmlSafe(body.value);
  })
});
