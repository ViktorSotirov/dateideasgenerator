const dateIdeas = [
    "Go for a hike in the mountains",
    "Visit a local museum or art gallery",
    "Take a cooking class together",
    "Have a picnic in the park",
    "Go stargazing on a clear night",
    "Go to a concert or live music performance",
    "Visit a nearby zoo or aquarium",
    "Visit a nearby amusement park or carnival",
    "Go to a wine tasting or brewery tour",
    "Have a game night with board games",
    "Have a game night with video games",
    "Take an online dance class together",
    "Go on a sunset or sunrise hike",
    "Have a movie marathon at home",
    "Visit a nearby botanical garden or arboretum",
    "Have a DIY craft day at home",
    "Visit a nearby historical landmark or site",
    "Go on a movie date at cinema",
    "Take a photography class and go on a photo walk together",
    "Go on a road trip to a nearby city or attraction",
    "Go to a waterfall near or in your city",
    "Have a romantic dinner",
    "Krisi chooses what you'll do all day",
    "Viktor chooses what you'll do all day"
  ];
  /*
  https://png.pngtree.com/background/20210715/original/pngtree-red-valentines-day-love-3d-gift-box-ribbon-background-picture-image_1309383.jpg
  // Generates a random number between 0 and the length of the dateIdeas array
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  
  // Uses the randomIndex to select a random date idea from the array
  const randomDateIdea = dateIdeas[randomIndex];
  
  // Prints the random date idea to the console
  console.log("How about this date idea: " + randomDateIdea);
  */
  const button = document.getElementById("generate-idea");
const idea = document.getElementById("idea");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  const randomDateIdea = dateIdeas[randomIndex];
  idea.textContent = randomDateIdea;
});