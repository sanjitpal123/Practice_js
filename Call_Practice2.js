const animal = {
   eat: function() {
       console.log('Eating...');
   }
};

const dog = {};
animal.eat.call(dog)