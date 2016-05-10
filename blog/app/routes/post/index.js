import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //let author = this.store.queryRecord('user', {handle: params.handle});
    console.log(params);
    let post = this.store.findRecord('post', params.id);
    return post;
  }
});
