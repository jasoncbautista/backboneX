// 
new (Backbone.View.extend({
    a: 5,

    initialize: function(){
        console.log("!");
        setTimeout(this.blah, 100);
        $(document).on('click', this.click);
    },

    blah: function() {
        console.log(this.a);
    },

    click: function() {
        console.log(this.a);
    }
}))();


