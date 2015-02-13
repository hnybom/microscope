/**
 * Created by henriny on 12/02/15.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});