// A simple test to learn more about how JS and prototypes work.
// Especially the this keyword. 
var J  = function(){
    this.initialize();
};
    
_.extend(J.prototype, {

    initialize: function(){
        this.self = this;
        var self = this;
        console.log("!");
        self.blah.apply({ a: 6}, []);
        var mmmmm = new self.blah();
        setTimeout(self.blah, 10);

        setTimeout(function(){self.blah()}, 500);
        //$(document).on('click', this.click);
        console.log("---end--");

    },

    blah: function() {
        console.log(this);
        console.log("should be..... a number:", this.a);
    },

    click: function() {
        //console.log(this.a);
    }


});



new J();