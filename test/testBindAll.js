// 
var vv = new (Backbone.View.extend({
    a: 5,

    initialize: function(){
        console.log("!");
        var mmmmm = new this.blah();
        setTimeout(this.blah, 100);
        $(document).on('click', this.click);

    },

    blah: function() {
        console.log("should be..... a number:", this.a);
    },

    click: function() {
        //console.log(this.a);
    }
}))();


