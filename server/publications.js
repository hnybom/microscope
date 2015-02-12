/**
 * Created by henriny on 12/02/15.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});