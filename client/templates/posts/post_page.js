/**
 * Created by henriny on 14/02/15.
 */
Template.postPage.helpers({
    comments: function(){
        return Comments.find({postId: this._id});
    }
});