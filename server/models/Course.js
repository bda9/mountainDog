var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required!'},
  startDate: {type:Date, required:'{PATH} is required!'},
  cost: {type:Number, required:'{PATH} is required!'},
  description: {type:String, required:'{PATH} is required!'}
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({name: 'Housebreaking', featured: true, startDate: new Date('4/4/2016'), cost: 40, description: "Learn how to house break your new dog (or old dog), plus several management techniques that you can implement to help develop a well-balanced dog who behaves in your home."});
      Course.create({name: 'Loose Leash Walking', featured: true, startDate: new Date('4/18/2016'), cost: 55, description: "Learn how to teach your dog to walk calmy and comfortably with you on a leash. Great for dog owners and beginners in dog training."});
      Course.create({name: 'Using an e-collar', featured: true, startDate: new Date('4/12/2016'), cost: 50, description: "This course is going to teach you how to properly and successfully incorporate the remote collar into your training." });
      Course.create({name: 'Dog Health and Hygiene', featured: true, startDate: new Date('5/11/2016'), cost: 30, description: "Do you want to learn early warning signs about your dog’s health, or how to properly groom your dog? Wonder what vaccinations are required and how best to manage a budget for pet expenses? If so, then this dog course is certainly right for you." });
      Course.create({name: 'Puppy Socialization and Stimulation', featured: true, startDate: new Date('6/1/2016'), cost: 30, description: "Socializing your puppy is more than just about teaching him to behave at the dog park. It’s about teaching your dog how to respond to new and potentially stressful situations in a way that’s calm and safe for everyone involved. Socialization can help make trips to the vet and groomer less stressful and it can help prevent unwanted behaviors like separation anxiety and aggression."});
      Course.create({name: 'Basic Dog Training', featured: true, startDate: new Date('4/15/2016'), cost: 30, description: "An introduction to basic dog obedience for novice and inexperienced dog trainers, with a focus on simple commands and a reward-based training system." });
      Course.create({name: 'Intermediate Dog Training', featured: true, startDate: new Date('4/29/2016'), cost: 35, description: "The second class in a 3-part series, learn more advanced precision heeling concepts, including: Adding Movement - Critical First Steps, Proper Use of Toy Reward, Reward Placement, Bridge Behaviors, and Touch Pads & Placeboards."});
      Course.create({name: 'Advanced Dog Training', featured: true, startDate: new Date('5/13/2016'), cost: 35, description: "The final class in a 3-part series, build upon Training I & II by learning advanced concepts like Advanced Perch Work, Basic to Advanced Footwork and Patterns, Indirect Reward Systems, Value Transfer Concepts, and Piece Work & Sequences."});
      Course.create({name: 'Free Intro to Dog Training', featured: true, startDate: new Date('7/5/2016'), cost: 0, description: "This course will cover the basics of dog training and behavior. It will go over dog body language, different breeds and types of dogs, the basics to operant conditioning, important life stages and the training that should be done during them, and important things to train."});
      Course.create({name: 'Backyard Sports & Games', featured: true, startDate: new Date('2/4/2016'), cost: 20, description: "Looking for a fun activity to take the relationship with your dog to the next level?   This dog training class is designed to be mostly for fun, but it also helps you and your dog become a team, using a combination of backyard agility, dog dancing, and games. This is a great way to see if your dog would enjoy one of these sports. It's not meant for hard-core search and rescue folks or world-class agility competitors. It's meant as a way to expand your dog's mind and a chance for you to have some more fun training. "});
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;
