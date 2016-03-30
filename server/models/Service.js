var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  cost: {type:Number, required:'{PATH} is required!'},
  description: {type:String, required:'{PATH} is required!'}
});
var Service = mongoose.model('Service', serviceSchema);

function createDefaultServices() {
  Service.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Service.create({name: 'Nail Trimming', featured: true, cost: 5, description: "Whether they've got a fancy occasion coming up or those doggy toes just deserve a treat, our Pawdicure offers nail clipping, nail polish, fragrant spray and a paw pad wax to keep them strutting happy."});
      Service.create({name: 'Dog Grooming', featured: true, cost: 5, description: "Our grooming includes: pre-bath groom, warm water bath and dry with styling, and ear cleaning."});
      Service.create({name: 'Day Care', featured: true, cost: 10, description: "Is your pup stressed out from being left at home alone all day? Maybe bored enough to eat the couch, your favorite shoes or the dining room table? Our day care service, is a way to give your pup exercise, mental stimulation and socialization."});
      Service.create({name: 'Boarding', featured: true, cost: 22, description: "While you are on vacation, have one less thing to worry about when it comes to the care of your dog.  Our dog boarding facility will kennel small to large sized dogs.  We provide premium dog food, blankets, and dishes, but feel free to bring any beloved blanket or toy as well as food, anything to make your dog feel more at home."});
      Service.create({name: 'Dog Walking', featured: true, cost: 5, description: "Humans and dogs share similar social needs; we live with others and enjoy social interaction. Staying inside for long periods of time without contact decreases their sense of normality, even when surrounded by other pets. The energy they accumulate during the day may cause behavior problems such as: chewing (furniture or themselves), jumping on you and visitors as soon as they enter the door, excessive barking, uncontrolled body functions, and depression. Our program is great for owners who wish to eliminate their dog’s extra energy and weight that builds up during the day. We practice positive reinforcement training and we will partner with you to implement a plan that will set your dog up to be successful in their training. Our regular, midday visits are 25-minutes in length."});
    }
  });
}

exports.createDefaultServices = createDefaultServices;
