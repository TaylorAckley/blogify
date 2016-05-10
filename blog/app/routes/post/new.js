import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
      return {};
  },
  actions: {

  createPost(newPost) {
    //let author = this.store.peekRecord('user', {id: 5});
    //console.log(author);
    const slugDate = moment().format('YYYY-MM-DD');
    let slugTitle = _.chain(newPost.title)
                       .escape()
                       .toLower()
                       .kebabCase()
                       .value();
    let slug = slugTitle + "-" + slugDate;

    let post = this.store.createRecord('post', {
      title: newPost.title,
      body: newPost.body,
      //author: author,
      slug: slug,
      votes: 0,
      views: 0
    });

  this.store.find('user', 5).then(function(author) {
    console.log(author);
  post.set('user', author);
  post.save().then(function(post) {
    console.log(post);
  })
  .catch(function(err) {
    console.log(err);
  });
});


}
}

});
