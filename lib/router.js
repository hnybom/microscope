/**
 * Created by henriny on 12/02/15.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/post/:_id', {
    name: 'postPage',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});