$(function($) {

    var UserModel = Backbone.Model.extend({
        url: '/user',
        defaults: {
            name: '',
            email: ''
        }
    });

    var user = new UserModel();
    var userDetails = { name: "dowon", email: "ysyun@yuwin.co.kr" };
    user.save(userDetails, {
        success: function(user) {
            alert(user.toJSON());
        },
        error: function(user){
            alert(user.toJSON());
        }
    });

    var user1 = new UserModel({id: 1});
    user1.fetch({
        success: function(user) {
            alert('fetch user name : ' + user.get('name'));
        },
        error: function(user) {
            alert(user.toJSON());
        }
    });

    user1.sync();

    // var SearchView = Backbone.View.extend({
    //     initialize: function() {
    //         this.render();
    //     },
    //     render: function(){
    //         var template = _.template($("#search_template").html(), {nam: 'dowon'});
    //         this.$el.html(template);
    //     },
    //     events: {
    //         "click input[type=button]": "doSearch"
    //     },
    //     doSearch: function(event) {
    //         alert("Search for" + $("#search_input").val());
    //     }
    // });
    
    // var search_view = new SearchView({el : $("#search_container")});
})(jQuery);