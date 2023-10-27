export interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

  const recipeData: Recipe[] = [
    {
      id: 1,
      name: "Fried Head on a Swivel",
      description: "Deep web browsing might have your head on a swivel, but deep fried heads on swivels is one thing that WON'T get you arrested.",
      image: "media/THELICH_Recipe1.png",
      ingredients: [
        "Some poor soul's cranium", 
        "Bread crumbs", 
        "Seasoning (Don't be THAT cannibal!)", 
        "Metal swivel (Crunchy or melted creamy)", 
        "An attitude of gratitude"
      ],
      instructions: [
        "Get a human head somehow (judgement free zone)",
        "Stick swivel in the back of the head as picture shows (Stick it like a pig!)",
        "Rev up those fryers (like that one spongebob meme)",
        "Marinate and season head",
        "Put bread crumbs on head",
        "Fry it!!!",
        "Enjoy!! (maybe with a side of pickled persons feet?)"
      ]
    },
    {
      id: 2,
      name: "Pickled Person's Feet",
      description: "Pickled pigs foot, except WAY better!",
      image: "media/THELICH_Recipe2.png",
      ingredients: [
        "Multiple human feet (healthier feet is worth the money, trust me.)", 
        "Dell pickles (the big ones)", 
        "Olive Oil", 
        "Love!"
      ],
      instructions: [
        "Gather your human feet (judgement free zone).",
        "Heat up stove for a while until hot",
        "Pour olive oil on your pan (reduces stick)",
        "Put in all of your human feet at once (except your own)",
        "Put about 1 pickle per foot, into the pan",
        "Cook pickles and feet in the hot stove, flipping sides occasionally, until cooked fully",
        "Enjoy!! (maybe with some fried head on a swivel?)"
      ]
    },
    {
      id: 3,
      name: "Witchwoman's Human Soup",
      description: "We have partnered with The WitchesAintBitches Initiative (TWI) in order to raise awareness for the rise in witchophobia over the past 400 years. 90% of proceeds go towards aiding witches during their humanitarian crisis. Amen.",
      image: "media/THELICH_Recipe3.png",
      ingredients: [
        "Any human body part you don't mind eating", 
        "Waffle border cauldron", 
        "Gigantic waffle spoon", 
        "Any spices, seasonings, or types of wood",
        "A friend :3"
      ],
      instructions: [
        "Fill cauldron until the etched in mark, with water",
        "Heat up your conductive waffle bordered cauldron until the water is boiling",
        "(Optional) Sloppily make out with your friend while waiting",
        "Put in all human remains (or living parts, judgement free zone) and spices/seasonings/wood you brought (acacia wood tastes really good with paprika btw!)",
        "Stir the pot for about 30 minutes straight, no rest, with your gigantic waffle spoon",
        "(Optional) Throw your friend into the pot and cook them too",
        "Once it has been stirred, make serving sizes for you and your friend (if they aren't in the soup by now)",
        "(Optional) Eat the spoon and cauldron whenever desired",
        "Enjoy!! (The WitchesAintBitches Initiative thank you for your contribution! Amen)",
        "(Optional) I hate my wife?"
      ]
    }
  ];

export default recipeData;