import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('posts');
  this.route('user');
  this.route('post', function() {
    this.route('new');
    this.route('edit');
    this.route('delete');
    this.route('index', {path: '/:id/:slug'});
  });
  this.route('profile');
});

export default Router;
