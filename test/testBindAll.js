// 
var vv = new (Backbone.View.extend({
    a: 5,

    initialize: function(){
        var self = this;
        console.log("!");
        this.blah.apply({ a: 6}, []);
        var mmmmm = new this.blah();
        setTimeout(this.blah, 10);

        setTimeout(function(){self.blah()}, 500);
        //$(document).on('click', this.click);
        console.log("---end--");

    },

    blah: function() {
        console.log("should be..... a number:", this.a);
    },

    click: function() {
        //console.log(this.a);
    }
}))();





//////

// 
var p = Backbone.View.extend({
    a: 5,

    initialize: function(){
        var self = this;
        console.log("!");
        this.blah.apply({ a: 6}, []);
        var mmmmm = new this.blah();
        setTimeout(this.blah, 10);

        setTimeout(function(){self.blah()}, 500);
        //$(document).on('click', this.click);
        console.log("---end--");

    },

    blah: function() {
        console.log("should be..... a number:", this.a);
    },

    click: function() {
        //console.log(this.a);
    }
});




new p();

c = p.extend({"t": "wee"})


new c();


// This will not work:

x = p.extend({"a": "hahaha"})


