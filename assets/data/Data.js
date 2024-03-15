const nvRandomIDChars = {
    num: "0123456789",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

var recipeList = [
    {
        "name": "Beef Stroganoff",
        "cat": "Red Meat",
        "time": 60,
        "ingredients": [
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "ingredient": "Parsley",
                "comment": [
                    "Fresh, Chopped",
                    "For garnish"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1½",
                        "size": "lbs",
                        "ingredient": "Sirloin Roast"
                    },
                    {
                        "amount": "1½",
                        "size": "lbs",
                        "ingredient": "Beef Tenderloin"
                    }
                ]
            },
            {
                "amount": "2",
                "size": "Tablespoons",
                "ingredient": "All-Purpose Flour"
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Hot Paprika"
            },
            {
                "amount": "1",
                "size": "Tablespoon",
                "ingredient": "Neutral Oil"
            },
            {
                "amount": "4",
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": "½",
                "size": "lbs",
                "ingredient": "Button Mushrooms",
                "comment": [
                    "Cut into corners"
                ]
            },
            {
                "amount": "2",
                "size": "Small",
                "ingredient": "Shallots",
                "comment": [
                    "Thinly sliced"
                ]
            },
            {
                "amount": "12",
                "size": "Ounce",
                "ingredient": "Wide Egg Noodles"
            },
            {
                "amount": "¼",
                "size": "Cup",
                "ingredient": "Dry White Wine"
            },
            {
                "amount": "1",
                "size": "Cup",
                "ingredient": "Heavy Cream"
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Worcestershire Sauce"
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Dijon Mustard"
            }
        ],
        "steps": [
            "Bring a large pot of salted water to a boil",
            "Cut the beef against the grain into 1/2-inch slices, pound lightly, then cut those slices into 1-inch-wide strips",
            "Add the flour, paprika, 3/2 teaspoons salt and 3/2 teaspoons pepper to a large shallow bowl, and toss to combine. Dredge the strips of meat in the flour mixture, shake them to remove excess flour, then transfer them to a rimmed baking sheet.",
            "Place a large skillet over high heat, and swirl in the oil. When the oil begins to shimmer, sauté the beef slices, in two batches, until they are well browned on both sides but rate inside, 3-4 minutes. Transfer the seared meat to the baking sheet. Turn the heat down slightly.",
            "Add 1 tablespoon of the butter to the pan. When it has melted and started to foam, add the mushrooms, toss to coat them with the fat and season with salt and pepper. Cook, stirring frequently, until they have released their moisture and are a deep, dark brown, 12-15 minutes. About halfway into the process, add the sliced shallots and 1 tablespoon butter, and stir to combine.",
            "While the mushrooms cook, add the noodles to the boiling water, and cook until just done, about 10 minutes. Drain the noodles, and toss with the remaining 2 tablespoons butter. Set aside.",
            "When the mushrooms and shallots are soft and caramelized, deglaze the pan with the wine, scraping at all the stuck-on bits on the pan's surface. When the wine has reduced by about half, slowly stir in the cream, followed by the Worcestershire and mustard. Add the meat, along with any accumulated juices, and stir to combine. Cook, stirring occasionally, until the dish is hot and the beef is medium-rare, 2-3 minutes. Taste and adjust the seasonings.",
            "Serve the noodles under or alongside the stroganoff; sprinkle stroganoff with parsley."
        ],
        "id": "VYJ1HJB4"
    },
    {
        "name": "Beer-braised Beef and Onions",
        "cat": "Red Meat",
        "time": 210,
        "id": "8YK96NKZ",
        "ingredients": [
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "More if needed"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "More for garnish"
                ]
            },
            {
                "amount": 6,
                "ingredient": "Bay Leaves"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Sweet Paprika",
                "comment": [
                    "More for garnish"
                ]
            },
            {
                "amount": 4,
                "size": "Pounds",
                "ingredient": "Beef Stew Meat",
                "comment": [
                    "Cut into 3/2-inch chunks",
                    "Boneless"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Extra-Virgin Olive Oil",
                "comment": [
                    "More if needed"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 4,
                        "comment": [
                            "Thinly sliced"
                        ],
                        "ingredient": "Spanish Onions"
                    },
                    {
                        "amount": 4,
                        "comment": [
                            "Thinly sliced"
                        ],
                        "ingredient": "Large Yellow Onions"
                    }
                ]
            },
            {
                "amount": 6,
                "size": "Sprigs",
                "ingredient": "Thyme",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": 4,
                "size": "Sprigs",
                "ingredient": "Parsley",
                "comment": [
                    "Fresh",
                    "+ chopped Parsley for garnish"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tomato Paste"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Coriander",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": "¼",
                "size": "Teaspoon",
                "ingredient": "Cinnamon",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoond",
                "ingredient": "All-Purpose Flour"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Beef Stock"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Chicken Stock"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Beer"
            }
        ],
        "steps": [
            "In a large bowl, combine salt, pepper, bay leaves and paprika. Toss meat to coat, then cover, refrigerate and marinate at least 2 hours or overnight.",
            "Heat oven to 325 degrees. In a large (8-quart) Dutch oven or other heavy pot, heat butter and oil over medium-high until shimmering. Working in batches, brown beef on two sides until dark and crusty, transferring to a bowl when browned (reserve bay leaves). As you cook, add more oil and adjust heat if necessary to prevent burning.",
            "When all the meat is browned, add onions to the empty pot and raise heat to medium-high. Cook, stirring and scraping up the brown coating on the bottom of the pan as the onions release their liquid.",
            "Continue cooking until onions are deeply golden brown and soft, 20 to 30 minutes, stirring occasionally.",
            "Meanwhile, make a bouquet garni by tying thyme, parsley and reserved bay leaves together with kitchen string (or just throw them in the pot and warn your guests not to eat them).",
            "Push the onions to the sides, then add tomato paste, coriander and cinnamon to the bottom of the pan. Cook, stirring, 1 minute, until paste is darkened and fragrant. Stir in flour, cook another minute, then add stock, beer, 1 cup water and bouquet garni. Return beef and any juices in the bowl to the pot, bring to a simmer, then cover and transfer to oven. Cook until beef is tender, about 2 ½ to 3 hours, turning it over halfway through.",
            "lf the sauce seems thin, remove the meat with a slotted spoon; cover with foil to keep warm. Return pot with liquid to stove and simmer until thickened to taste, 5 to 10 minutes. Return the meat to pot and stir to heat through. Serve from the pot or a platter. Garnish with chopped parsley, flaky sea salt, pepper and paprika. Serve with mustard on the side."
        ]
    },
    {
        "name": "Pot Roast",
        "cat": "Red Meat",
        "time": 180,
        "ingredients": [
            {
                "amount": 3,
                "size": "Pound",
                "ingredient": "Beef Chuck Roast",
                "comment": [
                    "Boneless"
                ]
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Canola Oil"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Butter"
            },
            {
                "amount": 2,
                "size": "Medium",
                "ingredient": "Red Onions",
                "comment": [
                    "Cut into quarters"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Carrots",
                "comment": [
                    "Cut into 2-inch pieces",
                    "Peeled"
                ]
            },
            {
                "amount": 3,
                "size": "Stalks",
                "ingredient": "Celery",
                "comment": [
                    "Cut into 2-inch pieces"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Rutabaga",
                "comment": [
                    "Cut into 12-16 pieces (a pound)",
                    "Peeled"
                ]
            },
            {
                "amount": 8,
                "ingredient": "Cremini Mushrooms",
                "comment": [
                    "Halved"
                ]
            },
            {
                "amount": 2,
                "ingredient": "Parsnips",
                "comment": [
                    "Cut into 2-inch pieces",
                    "Peeled"
                ]
            },
            {
                "amount": 1,
                "size": "Head",
                "ingredient": "Garlic",
                "comment": [
                    "Top cut off to expose cloves"
                ]
            },
            {
                "amount": "¾",
                "size": "Cup",
                "ingredient": "Tomato Paste"
            },
            {
                "amount": 2,
                "ingredient": "Bay Leaves"
            },
            {
                "amount": 3,
                "size": "Sprigs",
                "ingredient": "Rosemary"
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Red Wine",
                "comment": [
                    "Preferably carbernet"
                ]
            },
            {
                "amount": 4,
                "size": "Cups",
                "ingredient": "Beef Broth"
            }
        ],
        "steps": [
            "Heat oven to 340 degrees. Season meat generously with salt and pepper. Heat oil in a large Dutch oven, or other heavy roasting pan with a lid, over medium-high heat. Sear the meat until a dark crust forms (3 to 4 min per side). Remove meat to a plate.",
            "Reduce heat to medium and add butter to the pan. Melt the butter and add the vegetables, stirring frequently and scraping the bottom of the pot, until the vegetables start to color (8 to 10 minutes).",
            "Add tomato paste and cook, stirring frequently, until it darkens slightly, about 5 minutes.",
            "Add bay leaves, rosemary and wine and cook, stirring occasionally, until liquid is reduced to a thick gravy consistency, 5 to 7 minutes.",
            "Return meat to the pot. Add broth, then cover the pot and transfer to the oven. Cook for 2 hours 20 minutes.",
            "Let roast sit at room temperature for at least 10 minutes. Remove meat to a cutting board to slice. Discard bay leaves and rosemary stems. Squeeze any garlic cloves remaining in their skins into the stew and discard the skins. Serve slices of meat in shallow bowls along with the vegetables and a generous amount of cooking liquid ladled over top."
        ],
        "id": "08I5AKBB"
    },
    {
        "name": "Geraldine's Pot Roast",
        "cat": "Red Meat",
        "time": 210,
        "ingredients": [
            {
                "amount": "4-5",
                "size": "Pound",
                "ingredient": "Brisket"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "ingredient": "All-Purpose Flour"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Onions",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 5,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 3,
                "size": "Cups",
                "ingredient": "Tomatoes",
                "comment": [
                    "Peeled, seeded, diced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Oregano",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Red Wine"
            },
            {
                "amount": "1½",
                "size": "Cups",
                "ingredient": "Beef Stock"
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Green Olives",
                "comment": [
                    "Pitted & Chopped"
                ]
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Dijon Mustard"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Tomato Paste"
            }
        ],
        "steps": [
            "Season the brisket with salt and pepper and dust it with flour. In a large, heavy pot or Dutch oven with a tight lid, heat 3 tablespoons of the oil over high heat. Add the brisket and brown on all sides. Transfer the meat to a plate.",
            "Add the remaining tablespoon of oil to the pot and reduce the heat to medium low. Add the onions and garlic and cook, stirring, until the vegetables are softened, 3 to 5 minutes. Add the tomatoes, oregano, red wine and stock and bring to a boil.",
            "Return the meat to the pot, reduce the heat and simmer, covered, for 2 hours. Stir in the olives, mustard and tomato paste, and simmer for an additional hour, until the meat is very tender.",
            "Transfer the meat to a platter. If the sauce in the pot seems too watery, simmer, uncovered, until it thickens slightly. Season the sauce with the salt and pepper and pour over the meat. Serve immediately."
        ],
        "id": "O7G5A5AI"
    },
    {
        "name": "Soy-Ginger Flank Steak",
        "cat": "Red Meat",
        "time": 45,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Vegetable Oil"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Canola Oil"
                    }
                ]
            },
            {
                "amount": "1½",
                "size": "Tablespoons",
                "ingredient": "Ginger",
                "comment": [
                    "Peeled, finely grated"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "⅔",
                        "size": "Cup",
                        "ingredient": "Soy Sauce",
                        "comment": [
                            "Low sodium"
                        ]
                    },
                    {
                        "type": "and",
                        "ingredients": [
                            {
                                "amount": "½",
                                "size": "Cup",
                                "ingredient": "Soy Sauce"
                            },
                            {
                                "amount": 3,
                                "size": "Tablespoons",
                                "ingredient": "Water"
                            }
                        ]
                    }
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Brown Sugar",
                "comment": [
                    "Light or dark",
                    "Lightly packed"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Red Pepper Flakes",
                "comment": [
                    "Optional"
                ]
            },
            {
                "amount": "2.5-3.0",
                "size": " Pound",
                "ingredient": "Flank Steak"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "ingredient": "Scallions",
                "comment": [
                    "Thinly sliced",
                    "White & (Optionally) Light Green parts"
                ]
            },
            {
                "ingredient": "Lime Wedges",
                "comment": [
                    "For serving"
                ]
            },
            {
                "ingredient": "Rice",
                "comment": [
                    "Cooked",
                    "For serving"
                ]
            }
        ],
        "steps": [
            "Preheat the broiler.",
            "Heat the oil in a small saucepan over medium heat. Add the ginger and garlic and cook, stirring, until you can really smell everything and the garlic turns golden, about 3 minutes. Add the soy sauce, brown sugar, and red pepper flakes (optional). Increase the heat to medium-high and let the soy glaze simmer until slightly reduced and syrupy, stirring occasionally, about 5 minutes. Set the glaze aside to cool for about 5 minutes.",
            "Season the flank steak lgihtly with black pepper. Brush the top side of the flank steak with some of the soy glaze, then broil it for 4 minutes. Using tongs, turn the steak, then brush the second side with the glaze.Broil the glank steak until it is done to your liking, about 4 minutes longer for medium-rare. Transfer the steak to a cutting board and let it sit for 5 minutes. Meanwhile, bring the remaining soy glaze to a simmer over low heat.",
            "Thinly slice the flank steak across the grain and brush the slices with some of the reheated soy glaze. Transfer the sliced steak to a platter and scatter the scallions, if using, on top. Arrange the lime wedges on the edge of the platter for people to squeeze over their steak if they like. Put the rest of the soy glaze in a small pitcher or bowl to serve at the table for drizzling over the rice."
        ],
        "id": "6T597Y44"
    },
    {
        "name": "Ground Lamb Pulao",
        "cat": "Red Meat",
        "time": 45,
        "ingredients": [
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Basmati Rice"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "3/2",
                        "size": "Pounds",
                        "comment": [
                            "Ground"
                        ],
                        "ingredient": "Lamb"
                    },
                    {
                        "amount": "3/2",
                        "size": "Pounds",
                        "comment": [
                            "Ground"
                        ],
                        "ingredient": "Beef"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Teaspoon",
                        "ingredient": "Ghee"
                    },
                    {
                        "ingredient": "Butter",
                        "comment": [
                            "Unsalted"
                        ]
                    },
                    {
                        "ingredient": "Extra-Virgin Olive Oil"
                    }
                ]
            },
            {
                "amount": 4,
                "ingredient": "Garlic",
                "comment": [
                    "Cloves",
                    "Peeled and grated"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Ginger",
                "comment": [
                    "Grated, fresh"
                ]
            },
            {
                "amount": "3/2",
                "size": "Teaspoons",
                "ingredient": "Garam Masala"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Red Chile Powder"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Black Pepper"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Lime Juice"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Turmeric",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Bunch",
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed, thinly sliced",
                    "About 6"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Mint Leaves",
                "comment": [
                    "Fresh, loosely packed"
                ]
            }
        ],
        "steps": [
            "Check the rice and discard any debris. Place the rice in a fine-mesh sieve and rinse under running water until the water runs clear. Place the rice in a bowl, cover with water by 1 inch, and soak for 30 minutes.",
            "As the rice soaks, cook the lamb: Place a medium saucepan with a heavy lid or a Dutch oven over medium heat. When the saucepan is hot, break the lamb into chunks, and cook until the fat renders, about 2 minutes. Drain most of the fat, leaving behind 1 to 2 teaspoons, and continue to cook the lamb until it browns, another 2 minutes.",
            "Add the ghee and heat over medium until it melts, 30 to 45 seconds. Add the garlic and ginger and saute for 1 minute.",
            "Add the garam masala, chile powder, black pepper and 1 teaspoon salt and saute until the spices are fragrant, 1 minute. Add 1 tablespoon lime juice and stir until the flavors come together, about 1 minute.",
            "Transfer the lamb mixture to a large bowl and keep warm (Such as transferring it to a 250-degree oven). Clean the saucepan and wipe dry.",
            "Drain the soaked rice. Add to the same saucepan and cover with water by 1 inch. Stir in 1 tablespoon lime juice, the turmeric and the remaining 1 teaspoon salt. Bring to a boil over medium heat, then cover, and reduce heat to a simmer until the rice absorbs all the water, about 10 minutes. (Do not stir the rice as it ccoks, or the grains might break.) Remove the saucepan from heat, and let sit, uncovered, for 5 minutes.",
            "Stir the rice into the cooked Iamb mixture, then drizzle with the remaining 1 tablespoon lime juice. Fold the scallions and mint into the rice, and serve immediately."
        ],
        "id": "770CQPF8"
    },
    {
        "name": "Thin Pan-Seared Pork Chops",
        "cat": "Red Meat",
        "time": 30,
        "ingredients": [
            {
                "type": "cat",
                "name": "PORK CHOPS and BRINE",
                "ingredients": [
                    {
                        "amount": "1/2",
                        "size": "Cup",
                        "ingredient": "Kosher Salt"
                    },
                    {
                        "type": "alternatives",
                        "ingredients": [
                            {
                                "amount": "1/4",
                                "size": "Cup",
                                "ingredient": "Brown Sugar"
                            },
                            {
                                "amount": "1/4",
                                "size": "Cup",
                                "ingredient": "Granulated Sugar"
                            }
                        ]
                    },
                    {
                        "amount": 2,
                        "ingredient": "Bay Leaves"
                    },
                    {
                        "amount": 1,
                        "size": "Teaspoon",
                        "ingredient": "Coriander Seeds"
                    },
                    {
                        "amount": 12,
                        "ingredient": "Black Peppercorn",
                        "comment": [
                            "Lightly crushed"
                        ]
                    },
                    {
                        "amount": 6,
                        "ingredient": "Allspice Berries",
                        "comment": [
                            "Lightly crushed"
                        ]
                    },
                    {
                        "amount": 8,
                        "ingredient": "Pork Chops",
                        "comment": [
                            "4-5 ounces each",
                            "Thin, bone-in"
                        ]
                    },
                    {
                        "ingredient": "Extra-Virgin Olive Oil"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "HERB SALAD",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Lemon Juice"
                    },
                    {
                        "amount": "1/2",
                        "size": "Teaspoons",
                        "ingredient": "Lemon Zest",
                        "comment": [
                            "Grated"
                        ]
                    },
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "Extra-Virgin Olive Oil"
                    },
                    {
                        "ingredient": "Salt"
                    },
                    {
                        "ingredient": "Black Pepper"
                    },
                    {
                        "type": "and",
                        "ingredients": [
                            {
                                "amount": 5,
                                "size": "Ounces",
                                "ingredient": "Baby Arugula",
                                "comment": [
                                    "About 4 cups"
                                ]
                            },
                            {
                                "ingredient": "Arugula"
                            },
                            {
                                "ingredient": "Parsley",
                                "comment": [
                                    "Leaves"
                                ]
                            },
                            {
                                "ingredient": "Mint Leaves"
                            },
                            {
                                "ingredient": "Pecorino Cheese",
                                "comment": [
                                    "Optionally"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "steps": [
            "Prepare the brine: In a nonreactive large bowl or large deep baking dish, combine salt, sugar, bay leaves, coriander, peppercorns and allspice. Stir in 8 cups cold water to dissolve salt and sugar.",
            "Add pork chops to brine, making sure they are well submerged, and refrigerate. Leave chops in brine for 1 to 2 hours. Remove from brine, pat dry and bring to room temperature. Discard brine.",
            "Make the dressing for the herb salad: Whisk together lemon juice, zestt and olive oil. Season with salt and pepper and set aside.",
            "Put 2 large cast-iron skillets over medium-high heat and film each pan lightly with oil. (Alternatively, use a large cast-iron griddle or ridged stovetop grill.) When oil is hot, add chops in one layer without crowding.",
            "Cook for about 4 minutes, until chops are nicely browned, then turn and cook for about 3 minutes more, until firm to the touch. Transfer to a warm platter.",
            "Put herb salad leaves in a shallow bowl and season lightly with salt. Toss leaves with half the dressing, just to coat. Place dressed salad on top of pork chops. Drizzle remaining dressing over the top, add shavings of Pecorino cheese (if using), and serve."
        ],
        "id": "J668JL7W"
    },
    {
        "name": "Skillet Braised Marinated Pork Chops",
        "cat": "Red Meat",
        "time": 165,
        "ingredients": [
            {
                "amount": 2,
                "ingredient": "Pork Chops",
                "comment": [
                    "Loin"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Soy Sauce"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "Dry Vermouth"
                    },
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "Dry Sherry"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Clove",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 3,
                "ingredient": "Scallions",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "ingredient": "Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Peanut Oil"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Vegetable Oil"
                    }
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "White Wine",
                "comment": [
                    "Dry"
                ]
            },
            {
                "ingredient": "Salt",
                "comment": [
                    "Coarse",
                    "To taste"
                ]
            }
        ],
        "steps": [
            "Marinate chops in mixture of soy sauce, garlic, scallions and pepper at least 2 hours (or overnight)",
            "Heat oil in skillet. Remove chops from marinade and brown on both sides. Add marinade and wine. Cover and simmer 30 minutes. Turning once or until pork is whitish-pink in center and tender. Be careful not to overcook. Season with salt and pepper.",
            "Remove chops. Reduce juices in pan and pour over chops."
        ],
        "id": "LWYD97K7"
    },
    {
        "name": "(Broiled) Grilled Veal Chops",
        "cat": "Red Meat",
        "time": 165,
        "ingredients": [
            {
                "amount": 6,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 6,
                        "size": "Tablespoons",
                        "ingredient": "Red Wine"
                    },
                    {
                        "amount": 6,
                        "size": "Tablespoons",
                        "ingredient": "Balsamac Wine"
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Sprigs",
                "ingredient": "Rosemary",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "ingredient": "Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 6,
                "size": "3lb",
                "ingredient": "Veal Chops"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Lemon Wedges"
            },
            {
                "ingredient": "Garlic",
                "comment": [
                    "Optional"
                ]
            }
        ],
        "steps": [
            "Mix olive oil, red wine, rosemary, and pepper in 9x12 ceramic or glass backing pan.",
            "Rub chops with cloves and drip both sides of veal chops and marinate, covered in refrigerator for 2 hours (turning several times). Remove 15 minutes before looking.",
            "Prepare grill or stove for 15 minutes on high.",
            "Drain veal chops. Salt and place on grill. Cook until golden with black grill marks for 5 minutes on each side. Garnish with lemon wedges."
        ],
        "id": "1B66601X"
    },
    {
        "name": "Grilled Veal with Pancetta, Fava Beans & Pear",
        "cat": "Red Meat",
        "time": 90,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Ounce",
                        "comment": [
                            "Chopped"
                        ],
                        "ingredient": "Pancetta"
                    },
                    {
                        "amount": 2,
                        "size": "Ounce",
                        "comment": [
                            "Chopped"
                        ],
                        "ingredient": "Bacon"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 10,
                        "size": "Ounce",
                        "ingredient": "Pearl Onions",
                        "comment": [
                            "Basket"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Basket Pearl Onions",
                        "comment": [
                            "Frozen"
                        ]
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Sugar"
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Canned, Unsalted"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Fava Beans",
                        "comment": [
                            "Peeled"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Lima Beans",
                        "comment": [
                            "Frozen"
                        ]
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Arrowroot"
            },
            {
                "amount": 6,
                "size": "Tablespoons",
                "ingredient": "Sweet Marsala"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Marjorem",
                "comment": [
                    "Fresh, minced"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 4,
                        "size": "6-oz",
                        "ingredient": "Veal Loin Chops",
                        "comment": [
                            "Thin-sliced"
                        ]
                    },
                    {
                        "amount": 4,
                        "size": "6-oz",
                        "ingredient": "T-bone Steaks"
                    }
                ]
            }
        ],
        "steps": [
            "Sauté pancetta in heavy large skillet over medium heat until crisp. Using slotted spoon, transfer to paper towels. Reduce heat to low, add onions, sprinkle with sugar and sauté until brown and tender, about 25 minutes.",
            "Transfer onions to bowl. Add broth, beans and arrowroot to skillet. Simmer until beans are tender, about 5 minutes. Using slotted spoons, transfer beans to onions in bowl. Cook liquid until slightly thickened, about 10 minutes. Add 1/4 cup marsala and marjoraml; return onions and beans to liquid (can be prepared 1 day ahead).",
            "Preheat barbecue (medium-high heat). Brush veal with remaining 2 tablespoons of marsala. Season with salt and pepper. Grill until just medium, approximately 3 minutes per side. Transfer veal to plates.",
            "Meanwhile, simmer sauces 3 minutes. Season to tase with salt and pepper, stir in pancetta. Spoon sauce over veal and serve immediately."
        ],
        "id": "2W9C015A"
    },
    {
        "name": "Veal Chops with Basil",
        "cat": "Red Meat",
        "time": 45,
        "ingredients": [
            {
                "amount": 4,
                "ingredient": "Veal Chops"
            },
            {
                "ingredient": "Flour",
                "comment": [
                    "For dredging"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 1,
                "size": "Medium-size",
                "ingredient": "Onion",
                "comment": [
                    "Sliced"
                ]
            },
            {
                "amount": 1,
                "size": "Clove",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Prosciutto",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Basil Leaves",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": "1/4",
                "size": "Pound",
                "ingredient": "Mushrooms",
                "comment": [
                    "Sliced"
                ]
            },
            {
                "amount": "1/4-1/2",
                "size": "Cup",
                "ingredient": "Dry White Wine"
            },
            {
                "ingredient": "Salt",
                "comment": [
                    "Coarse"
                ]
            },
            {
                "ingredient": "Pepper",
                "comment": [
                    "Ground"
                ]
            }
        ],
        "steps": [
            "Dredge the chops lightly in flour. In a large frying pan, heat the oil and brown the chop. Remove and set aside. Add onion, garlic, and proscuito and cook until soft.",
            "Return the chops to skillet, overlapping them slightly if necessary. Add the basil and the mushrooms and cook 15-20 minutes or until chops are cooked. They should be pink in the middle.",
            "Remove the chops from the pan. Add wine, salt, and pepper and bring to a boil. Cook 2-3 minutes. Return chop to pan and sprinkle with basil."
        ],
        "id": "E7OMIY1K"
    },
    {
        "name": "Red Wine-Braised Chicken Thighs with Root Vegetables",
        "cat": "Chicken",
        "time": 80,
        "ingredients": [
            {
                "amount": 8,
                "size": "Medium",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "3lb",
                    "Bone-in, skin removed"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "All-Purpose Flour"
            },
            {
                "amount": "¾",
                "size": "Teaspoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "Plus more to taste"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground, Fresh",
                    "Plus more to taste"
                ]
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Olive Oil",
                "comment": [
                    "Divided"
                ]
            },
            {
                "amount": 14,
                "size": "Ounce",
                "ingredient": "Pearl Onions",
                "comment": [
                    "Peeled",
                    "Packaged, frozen, thawed and patted dry"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "Peeled, diced",
                            "About 10 ounces"
                        ],
                        "ingredient": "Carrots"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "Peeled, diced",
                            "About 10 ounces"
                        ],
                        "ingredient": "Parsnips"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "About 10 ounces"
                        ],
                        "ingredient": "Celery Root"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "About 10 ounces"
                        ],
                        "ingredient": "Rutabaga"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "About 10 ounces"
                        ],
                        "ingredient": "Turnip"
                    }
                ]
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tomato Paste",
                "comment": [
                    "+ 1 teaspoon"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Thyme",
                "comment": [
                    "Chopped",
                    "Fresh"
                ]
            },
            {
                "amount": "1½",
                "size": "Cups",
                "ingredient": "Dry Red Wine",
                "comment": [
                    "Pinot Noir or Merlot for example"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Low-sodium"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Bay Leaf"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Red Wine Vinegar"
            },
            {
                "ingredient": "Flat-Leaf Parsley",
                "comment": [
                    "For garnish (optional)"
                ]
            }
        ],
        "steps": [
            "In a large bowl, combine the chicken with the flour and 1/4 teaspoon each of the salt and pepper, and toss to coat evenly.",
            "In a large, heavy pot such as a Dutch oven, over medium-high heat, heat 2 tablespoons of the oil until shimmering. Add half of the chicken and cook until golden on both sides, about 3 minutes per side, then transfer to a plate. Repeat with the remaining chicken.",
            "Add the remaining oil to the empty pot, followed by the onions and the diced vegetables and cook, stirring occasionally, softened slightly, about 4 minutes. Add the garlic and cook for 30 seconds more, then stir in the tomato paste and thyme. Add the wine, bring to a boil and cook, uncovered, for about 2 minutes. Add the broth, bay leaf and the remaining 1/2 teaspoon salt and 1/4 teaspoon pepper and return to a boil.",
            "Return the chicken, along with any accumulated juices, to the pot. Reduce the heat to medium-low, cover, and simmer until the chicken is cooked through and the vegetables are tender, about 25 minutes. Using a slotted spoon, transfer the chicken and vegetables to a rimmed serving plate and tent with foil. Increase the heat to high and cook until the sauce is reduced to about 2 cups, 5 to 10 minutes. Discard the bay leaf, then stir in the vinegar, and season to taste with additional salt and pepper, if desired. Pour the sauce over the chicken and vegetables, garnish with the parsley and serve."
        ],
        "id": "6WG7PN11"
    },
    {
        "name": "Roasted Chicken Provencal",
        "cat": "Chicken",
        "time": 75,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 4,
                        "ingredient": "Chicken Legs"
                    },
                    {
                        "amount": 8,
                        "ingredient": "Chicken Thighs",
                        "comment": [
                            "Bone-in, skin-on"
                        ]
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "amount": "½-¾",
                "size": "Cup",
                "ingredient": "All-Purpose Flour"
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Herbes de Provence"
            },
            {
                "amount": 1,
                "ingredient": "Lemons",
                "comment": [
                    "Quartered"
                ]
            },
            {
                "amount": "8-10",
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Peeled"
                ]
            },
            {
                "amount": "4-6",
                "size": "Medium-size",
                "ingredient": "Shallots",
                "comment": [
                    "Peeled and halved"
                ]
            },
            {
                "amount": "1/3",
                "size": "Cup",
                "ingredient": "Dry Vermouth"
            },
            {
                "amount": 4,
                "size": "Sprigs",
                "ingredient": "Thyme",
                "comment": [
                    "For serving"
                ]
            }
        ],
        "steps": [
            "Heat oven to 400 degrees. Season the chicken with salt and pepper. Put the flour in a shallow pan, and lightly dredge the chicken in it, shaking the pieces to remove excess flour.",
            "Swirl the oil in a large roasting pan, and place the floured chicken in it. Season the chicken with the herbes de Provence. Arrange the lemon, garlic cloves and shallots around the chicken, then add the vermouth to the pan.",
            "Put the pan in the oven, and roast for 25 to 30 minutes, then baste it with the pan juices. Continue roasting for another 25 to 30 minutes, or until the chicken is very crisp and the meat cooked through.",
            "Serve in the pan or on a warmed platter, garnished with the thyme."
        ],
        "id": "8E9R58J8"
    },
    {
        "name": "Three Cup Chicken",
        "cat": "Chicken",
        "time": 30,
        "ingredients": [
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Sesame Oil"
            },
            {
                "amount": 1,
                "ingredient": "Ginger",
                "comment": [
                    "2-to-3-inch",
                    "Peeled and sliced into coins, approximately 12"
                ]
            },
            {
                "amount": 12,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Peeled"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed and cut into 1-inch pieces"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 3,
                        "ingredient": "Dried Red Peppers"
                    },
                    {
                        "amount": 1,
                        "size": "Teaspoon",
                        "ingredient": "Red Pepper Flakes"
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Pounds",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless or bone-in",
                    "Cut into bite-size pieces"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Unrefined Sugar"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Light Brown Sugar"
                    }
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Rice Wine"
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Light Soy Sauce"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Basil Leaves",
                "comment": [
                    "Preferrably Thai"
                ]
            }
        ],
        "steps": [
            "Heat a wok over high heat and add 2 tablespoons sesame oil. When the oil shimmers, add the ginger, garlic, scallions and peppers, and cook until fragrant, approximately 2 minutes.",
            "Scrape the aromatics to the sides of the wok, add remaining oil and allow to heat through. Add the chicken, and cook, stirring occasionally, until it is browned and crisping at the edges, approximately 5 to 7 minutes.",
            "Add sugar and stir to combine, then add the rice wine and soy sauce, and bring just to a boil. Lower the heat, then simmer until the sauce has reduced and started to thicken, approximately 15 minutes.",
            "Turn off the heat, add the basil and stir to combine. Serve with white rice."
        ],
        "id": "G328CP39"
    },
    {
        "name": "Oven-Roasted Chicken Shawarma",
        "cat": "Chicken",
        "time": 45,
        "ingredients": [
            {
                "amount": 2,
                "ingredient": "Lemons",
                "comment": [
                    "Juiced"
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Olive Oil",
                "comment": [
                    "+ 1 tablespoon"
                ]
            },
            {
                "amount": 6,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Peeled, smashed and minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Cumin",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Paprika"
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Turmeric"
            },
            {
                "amount": 1,
                "size": "Pinch",
                "ingredient": "Cinnamon",
                "comment": [
                    "Ground"
                ]
            },
            {
                "ingredient": "Red Pepper Flakes",
                "comment": [
                    "For taste"
                ]
            },
            {
                "amount": 2,
                "size": "Pounds",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless, skinless"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Red Onions",
                "comment": [
                    "Peeled and quartered"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Chopped, fresh"
                ]
            }
        ],
        "steps": [
            "Prepare a marinade for the chicken. Combine the lemon juice, 1/2 cup olive oil, garlic, salt, pepper, cumin, paprika, turmeric, cinnamon and red pepper flakes in a large bowl, then whisk to combine. Add the chicken and toss well to coat. Cover and store in refrigerator for at least 1hour (up to 12 hours).",
            "When ready to cook, heat oven to 425 degrees. Use the remaining tablespoon of olive oil to grease a rimmed sheet pan. Add the quartered onion to the chicken and marinade, and toss once to combine. Remove the chicken and onion from the marinade, and place on the pan, spreading everything evenly across it.",
            "Put the chicken in the oven and roast until it is browned, crisp at the edges and cooked through, about 30 to 40 minutes. Remove from the oven, allow to rest 2 minutes, then slice into bits.",
            "(Optional) To make the chicken even more crisp, set a large pan over high heat, add a tablespoon of olive oil to the pan, then the sliced chicken, and sauté until everything curls tight in the heat.",
            "Scatter the Parsley over the top and serve with tomatoes, cucumbers, pita, white sauce, hot sauce, olives, fried eggplant, feta, rice (or really anything you want to)"
        ],
        "id": "E3HN4R94"
    },
    {
        "name": "Vinegar Chicken with Crushed Olive Dressing",
        "cat": "Chicken",
        "time": 40,
        "ingredients": [
            {
                "amount": "3½",
                "size": "Pounds",
                "ingredient": "Chicken Parts",
                "comment": [
                    "Bone-in, skin-on"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Turmeric",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 6,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "White Wine Vinegar"
            },
            {
                "amount": "1½",
                "size": "Cups",
                "ingredient": "Green Olives",
                "comment": [
                    "Crushed and pitted",
                    "Castelvetrano"
                ]
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Finely grated"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Parsley",
                "comment": [
                    "Tender leaves and stems, chopped"
                ]
            }
        ],
        "steps": [
            "Heat oven to 450 degrees. Place chicken on a rimmed baking sheet and toss with turmeric and 2 tablespoons olive oil, and season with salt and pepper. Make sure chicken is skin-side up, then pour vinegar over and around chicken and place in the oven.",
            "Bake chicken, without flipping, until cooked through and deeply browned all over, 25-30 minutes.",
            "Meanwhile, combine olives, garlic, parsley, the remaining 4 tablespoons olive oil and 2 tablespoons water in a small bowl; season with salt and pepper.",
            "Once chicken is cooked, remove baking sheet from the oven and transfer chicken to a large serving platter, leaving behind any of the juices and bits stuck to the pan.",
            "Make sure the baking sheet is on a sturdy surface, then pour the olive mixture onto the sheet. Using a spatula or wooden spoon, gently scrape up all the bits the chicken left behind, letting the olive mixture mingle with the rendered fat and get increasingly saucy. Pour olive mixture over the chicken, then serve."
        ],
        "id": "UDS2R5QN"
    },
    {
        "name": "Crispy Paremsan Roast Chicken with Lemon",
        "cat": "Chicken",
        "time": 75,
        "ingredients": [
            {
                "amount": 1,
                "size": "Small",
                "ingredient": "Lemons"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Kosher Salt",
                "comment": [
                    "Plus more to taste"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Black Pepper"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Rosemary",
                "comment": [
                    "Chopped",
                    "Plus 4 sprigs"
                ]
            },
            {
                "amount": 1,
                "size": "Large Pinch",
                "ingredient": "Red Pepper Flakes",
                "comment": [
                    "Optionally",
                    "+More for serving"
                ]
            },
            {
                "amount": "3½-4",
                "size": "Pound",
                "ingredient": "Whole Chicken",
                "comment": [
                    "Patted dry"
                ]
            },
            {
                "ingredient": "Extra-Virgin Olive Oil",
                "comment": [
                    "For drizzling"
                ]
            },
            {
                "amount": "1/3",
                "size": "Cup",
                "ingredient": "Parmesan",
                "comment": [
                    "Finely grated"
                ]
            }
        ],
        "steps": [
            "Finely grate 1 teaspoon zest from the lemon and place it in a small bowl. (Save the zested lemon for the drippings.) stir in 2 teaspoons salt, pepper, chopped rosemary and red-pepper flakes (if using). Season the chicken inside and out with salt mixture. Let sit at room temperature for 20 minutes or refrigerate uncovered for up to overnight.",
            "Heat oven to 425 degrees. Place chicken, breast-side up, in a large skillet, sheet pan or roasting pan. Stuff cavity of chicken with rosemary sprigs. Drizzle breast with a little olive oil.",
            "Roast chicken for 30 minutes. Sprinkle chicken all over with Parmesan, then continue roasting until bird's juices run clear when skin is pierced with a knife and the skin is golden, 25-30 minutes longer.",
            "Let chicken for 10 minutes. Squeeze juice from the zested lemon, to taste, into the pan drippings and season with more salt and red-pepper flakes if you like. Carve and serve with drippings spooned over the meat."
        ],
        "id": "AMY29W7S"
    },
    {
        "name": "Bhatti Da Murgh (Indian Grilled Chicken with Whole Spices)",
        "cat": "Chicken",
        "time": 90,
        "ingredients": [
            {
                "amount": 6,
                "ingredient": "Chicken Legs",
                "comment": [
                    "Whole, Bone-in, drumsticks with thighs attached",
                    "About 4½ pounds"
                ]
            },
            {
                "amount": 6,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Finely grated",
                    "About 2 tablespoons"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Ginger",
                "comment": [
                    "Finely grated"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "White Vinegar"
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Cayenne",
                "comment": [
                    "Ground",
                    "For to taste"
                ]
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Garam Masala"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Sea Salt",
                "comment": [
                    "Fine"
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Plain Yogurt",
                "comment": [
                    "Whole milk"
                ]
            },
            {
                "amount": "1½",
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Clove",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Mace",
                "comment": [
                    "Ground"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "½",
                        "size": "Teaspoon",
                        "ingredient": "Ground Anise"
                    },
                    {
                        "amount": "½",
                        "size": "Teaspoon",
                        "ingredient": "Fennel Seeds"
                    }
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Black Cardamom",
                "comment": [
                    "Ground",
                    "Optional"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Green Cardamom",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Cumin Seeds"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Coriander Seeds"
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "Red Pepper Flakes"
            },
            {
                "amount": "3-4",
                "size": "Tablespoons",
                "ingredient": "Melted Salted Butter",
                "comment": [
                    "As needed for basting"
                ]
            },
            {
                "ingredient": "Lime Wedges",
                "comment": [
                    "For serving"
                ]
            }
        ],
        "steps": [
            "Pop the joint on each leg: Grasp a drumstick in one hand and a thigh in the other, and bend the joint back until you hear a crack. (This helps the leg cook more evenly)",
            "Using a small knife, make a slash in the meaty part of each drumstick and thigh 2-3 times, going all the way to the bone.",
            "In a large bowl, stir together garlic, ginger, vinegar, cayenne, garam masala and salt. Keep half the mixture in the bowl and set aside; rub remaining mixture all over chicken, getting underneath the skin. Refrigerate for at least 20 minutes (or up to 2 hours) while you prepare the yogurt marinade.",
            "Stir yogurt into the large bowl with ginger-garlic mixture, then stir in black pepper, clove, mace, anise, black cardamom (if using) and green cardamom. Transfer spice-rubbed chicken to yogurt mixture, tossing gently to coat.",
            "Cover and refrigerate chicken for at least 6 hours (preferably overnight).",
            "When ready to cook, prepare the grill for indirect hear. For charcoal grills: Mound coals to one side, allowing for an area of indirect hear. For gas grills: Turn on only a few of the burners and leave the rest off. For ovens: Heat oven to 450 degrees.",
            "Using a mortar and pestle, the flat side of a knife or a spice grinder for a very brief time, crack the cumin, coriander and red-pepper flakes but do not grind; you want a coarse texture here. Sprinkle spice mix onto chicken to coat each piece.",
            "Place a rimmed baking sheet on the unlit side of the grill or in the oven and let heat for 15 minutes. Carefully place chicken on the hot baking sheet and drizzle each piece with a little melted butter. Cover grill, if grilling. Let chicken cook for 25-35 minutes, drizzling with melted butter two or three times. The chicken is done when the skin is dark brown and the juices run clear when pricked with a knife.",
            "(Optional) If you are grilling, you can sear the chicken over direct hear for 1-2 minutes per side just before serving to char the skin.",
            "Serve chicken on a platter, with lime wedges on the side."
        ],
        "id": "17L9V863"
    },
    {
        "name": "Sheet-Pan Miso Chicken with Radishes and Lime",
        "cat": "Chicken",
        "time": 45,
        "ingredients": [
            {
                "amount": 4,
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Bone-in, skin-on",
                    "About 1½ lb total"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Ghee"
                    },
                    {
                        "ingredient": "Butter",
                        "comment": [
                            "(Unsalted)",
                            "-Room temperature-"
                        ]
                    }
                ]
            },
            {
                "amount": "1½",
                "size": "Teaspoons",
                "ingredient": "White Miso Paste"
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Radishes",
                "comment": [
                    "Trimmed",
                    "If large, halved"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Lime",
                "comment": [
                    "Cut in half"
                ]
            },
            {
                "amount": 2,
                "ingredient": "Scallions",
                "comment": [
                    "Thinly sliced",
                    "Light green and white parts only"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "comment": [
                            "For sprinkling, optional"
                        ],
                        "ingredient": "Black Sesame Seeds"
                    },
                    {
                        "comment": [
                            "For sprinkling, optional"
                        ],
                        "ingredient": "White Sesame Seeds"
                    }
                ]
            }
        ],
        "steps": [
            "Heat oven to 450 degrees. Place one rack in the middle of the oven and another about 6 inches from the broiler.",
            "On a large baking sheet, drizzle the chicken all over with 1 tablespoon oil, then season all over with salt and pepper. In a medium bowl, mash together the ghee and miso until combined. Lift up the skin on one chicken thigh, carefully creating a space between the skin and meat, and place about 1/2 teaspoon miso-ghee mixture inside. Close the pocket, then lightly press on top of the skin to spread it around. Repeat with remaining chicken thighs, adding 1/2 teaspoon miso-ghee mixture to each. Massage another 1 1/2 teaspoons mixture all over the chicken, leaving about 1 teaspoon miso-ghee mixture remaining in the bowl.",
            "Arrange the chicken skin-side up, evenly spaced apart, and roast on the middle rack for 15 minutes.",
            "In the same mixing bowl, toss the radishes with the remaining miso-ghee mixture and the remaining 1 tablespoon oil. Season with salt and pepper.",
            "After the chicken has roasted for 15 minutes, scatter the radishes around the chicken and cook until radishes are tender and lightly browned and chicken is cooked through (the temperature in the thickest part of the thigh should reach 165 degrees), another 10 to 15 minutes.",
            "If the chicken skin is not as browned as you’d like, broil on the rack near the broiler until the skin is crispy and golden, 1 to 2 minutes.",
            "Squeeze the lime juice over chicken and radishes, then garnish with the scallions and sesame seeds, if using. Divide among plates and serve."
        ],
        "id": "4SWHC1NM"
    },
    {
        "name": "Cornish Game Hen (Glaze)",
        "cat": "Chicken",
        "time": 70,
        "ingredients": [
            {
                "amount": 1,
                "ingredient": "Rock Cornish Hen"
            },
            {
                "type": "cat",
                "name": "[A] Apricot Glaze",
                "ingredients": [
                    {
                        "amount": "½",
                        "size": "Cup",
                        "ingredient": "Apricot Jam"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Soy Sauce"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Dijon Mustard"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Honey"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[B] Asian Accent",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Soy Sauce"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Chicken Broth"
                    },
                    {
                        "amount": 1,
                        "size": "Teaspoon",
                        "ingredient": "Sesame Oil"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[C] Citrus Glaze",
                "ingredients": [
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "ingredient": "Orange Juice Concentrate",
                        "comment": [
                            "(Frozen)",
                            "-Thawed-"
                        ]
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Dijon Mustard"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Honey"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[D] Garlic-Herb",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Garlic",
                        "comment": [
                            "(finely chopped)",
                            "-fresh-"
                        ]
                    },
                    {
                        "amount": 2,
                        "size": "Teaspoons",
                        "ingredient": "Thyme",
                        "comment": [
                            "(finely chopped)",
                            "-fresh-"
                        ]
                    },
                    {
                        "amount": 2,
                        "size": "Teaspoons",
                        "ingredient": "Rosemary",
                        "comment": [
                            "(finely chopped)",
                            "-fresh-"
                        ]
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[E] Lemon-Basil",
                "ingredients": [
                    {
                        "amount": 1,
                        "ingredient": "Lemons"
                    },
                    {
                        "ingredient": "Butter",
                        "comment": [
                            "(melted)"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Sprig",
                        "ingredient": "Basil"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[F] Mexican Spiced",
                "ingredients": [
                    {
                        "ingredient": "Taco Seasoning"
                    },
                    {
                        "ingredient": "Cooking Spray"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "[G] Mustward-Herb",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Dijon Mustard"
                    },
                    {
                        "ingredient": "Dried Tarragon"
                    },
                    {
                        "ingredient": "Basil"
                    },
                    {
                        "ingredient": "Thyme"
                    },
                    {
                        "amount": "3/4",
                        "size": "Cup",
                        "ingredient": "White Wine"
                    }
                ]
            }
        ],
        "steps": [
            "Roast the hens at 375 degrees for about 1 hour.",
            "Add the glazes in the last 15-20 minutes of roasting the Cornish game hens.",
            "When the juices run clear (when a thigh is pierced with a knife) and a meat thermomete registers 170 degrees, the hens are done.",
            "Serve Cornish game hens out of the oven or with the variations detailed below.",
            "<mark>[A] Apricot Glaze</mark>: Mix 1/2 cup apricot jam, 2 tablespoons of soy sauce, 2 tablespoons of Dijon mustard, and 2 tablespoons honey. Brush the apricot glaze over the hens during the last 15 to 20 minutes of roasting.",
            "<mark>[B] Asian Accent</mark>: Mix 2 tablespoons of soy sauce, 2 tablespoons of chicken broth, and 1 teaspoon of sesame oil. Brush the mixture over the hens and pour a little into the cavities before roasting.",
            "<mark>[C] Citrus Glaze</mark>: Mix 1/4 cup of thawed, frozen orange juice concentrate, 2 tablespoons of Dijon mustard, and 2 tablespoons of honey until well-blended. Brush the glaze over the hens during the last 15 to 20 minutes of roasting.",
            "<mark>[D] Garlic-Herb</mark>: Mix 2 tablespoons of minced fresh garlic, 2 teaspoons of finely chopped fresh thyme, 2 teaspoons of finely chopped fresh rosemary, and 2 teaspoons of finely chopped sage. Loosen the breast skin of each hen and rub one-quarter of the mixture under the skin of each bird.",
            "<mark>[E] Lemon-Basil</mark>: Rub the outside of the hens with a cut lemon and brush with melted butter. Place one lemon half and a sprig of fresh basil into each cavity.",
            "<mark>[F] Mexican Spiced</mark>: Rub the outside of the hens with packaged taco seasoning and lightly coat with cooking spray.",
            "<mark>[G] Mustard-Herb</mark>: Coat the outside of each hen with about 1 tablespoon of Dijon mustard. Sprinkle with a mixture of dried tarragon, basil, and thyme. Deglaze the pan after roasting with 3/4 cup of white wine and serve with the pan juices."
        ],
        "id": "ABCT5P7O"
    },
    {
        "name": "Cornish Hens with Lemon & Sage",
        "cat": "Chicken",
        "time": 60,
        "ingredients": [
            {
                "amount": 2,
                "ingredient": "Cornish Hens"
            },
            {
                "amount": 14,
                "ingredient": "Sage Leaves",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": "½",
                "ingredient": "Lemons"
            },
            {
                "amount": 1,
                "size": "Clove",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "type": "and",
                "ingredients": [
                    {
                        "ingredient": "Sea Salt",
                        "comment": [
                            "(Coarse)",
                            "-to taste-"
                        ]
                    },
                    {
                        "ingredient": "Pepper",
                        "comment": [
                            "(Freshly ground)",
                            "-to taste-"
                        ]
                    }
                ]
            }
        ],
        "steps": [
            "Preheat oven to 450 degrees. Wipe hens dry with paper towels and put a few sage leaves in cavity and under skin covering breast. Rub hens with lemon inside and out, sprinkle with garlic (inside and out). Rub the skin with oil and season to taste with salt and pepper.",
            "Put hens on their sides on a rack and roast for 15 minutes. Turn them on the other side, roast another 15 minutes, then continue to cook hens until golden brown and juices run clear (about 15 more minutes).",
            "Serve hens on 2 individual heated plates."
        ],
        "id": "8GSX4CU6"
    },
    {
        "name": "Chicken and Rice with Scallion-Ginger Sauce",
        "cat": "Chicken",
        "time": 45,
        "ingredients": [
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "White Rice",
                "comment": [
                    "Short-grain",
                    "Preferrably sushi rice"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Chicken Broth"
            },
            {
                "amount": 1,
                "size": "Piece",
                "ingredient": "Ginger",
                "comment": [
                    "3-inch",
                    "Peeled and grated (about 3 tablespoons)"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Chicken Breasts",
                "comment": [
                    "Boneless, skinless",
                    "Totaling 2lb"
                ]
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Kosher Pepper"
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Vegetable Oil"
            },
            {
                "amount": 6,
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed and thinly sliced"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Rice Vinegar",
                "comment": [
                    "Unseasoned"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Jalapeno",
                "comment": [
                    "Halved, seeded, then thinly sliced"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "White Sesame Seeds",
                "comment": [
                    "Toasted"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Sesame Oil"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Granulated Sugar"
            }
        ],
        "steps": [
            "Place rice in a fine-mesh sieve and rinse under cold water, shaking gently, until the water runs clear. In a medium saucepan, combine rice, broth and 1 tablespoon grated ginger. Season chicken all over with salt and pepper and place on top of rice mixture. Cover and bring mixture to a boil over high. Once mixture comes to a boil, reduce heat to medium-low and simmer until rice is plump, broth is absorbed and chicken is cooked through, 20-22 minutes. Turn off heat and let rest, covered, 10 minutes.",
            "Meanwhile, in a medium bowl, combine the vegetable oil, scallions, vinegar, jalapeno, sesame seeds, sesame oil, sugar and remaining ginger; season with salt and pepper.",
            "Remove chicken from saucepan and slice ½-inch thick crosswise. Fluff rice with a fork and divide among bowls. Top with chicken and scallion-ginger sauce."
        ],
        "id": "37VX414X"
    },
    {
        "name": "Ginger-Scallion Chicken",
        "cat": "Chicken",
        "time": 15,
        "ingredients": [
            {
                "amount": 2,
                "size": "Large",
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "comment": [
                            "Grapeseed or sunflower for example",
                            "More as necessary"
                        ],
                        "ingredient": "Peanut Oil"
                    },
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "comment": [
                            "Grapeseed or sunflower for example",
                            "More as necessary"
                        ],
                        "ingredient": "Neutral Oil"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "7/4",
                        "size": "Pounds",
                        "comment": [
                            "Boneless, skinless",
                            "Cut into 1-inch chunks"
                        ],
                        "ingredient": "Chicken Thighs"
                    },
                    {
                        "amount": "7/4",
                        "size": "Pounds",
                        "comment": [
                            "Boneless, skinless",
                            "Cut into 1-inch chunks"
                        ],
                        "ingredient": "Chicken Breasts"
                    }
                ]
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "As needed"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Cilantro",
                "comment": [
                    "Mixed leaves and tender stems",
                    "Roughly chopped"
                ]
            },
            {
                "amount": 1,
                "size": "Piece",
                "ingredient": "Ginger",
                "comment": [
                    "5/2-inch",
                    "Cut into thin matchsticks (about 3 tablespoons)"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Soy Sauce"
            },
            {
                "ingredient": "Sugar",
                "comment": [
                    "Large pinch"
                ]
            }
        ],
        "steps": [
            "Cut the scallions in quarters lengthwise, then cut crosswise into 3/2-inch-long pieces. You should end up with thin blades of scallions. Separate out the dark green tops ffom the pale green and white parts. (You don't have to be very thorough; some mixing of colors is fine.)",
            "Heat oil in a wok or 12-inch skillet or over very high heat. When it's shimmering but not smoking, stir in chicken and salt. Cook, stirring almost constantly, until chicken is barely cooked and no longer pink, 3 to 5 minutes. Use a slotted spoon to transfer chicken onto a serving plate, leavint the oil in the pan. Imemdiately scatter cilantro and scallion greens (not whites) over hot chicken.",
            "Return wok to medium-high heat. Make sure there are at least 2 tablespoons oil in the wok. If not, add more oil. Stir in ginger and cook until lightly browned, about 1 minutes. Stir in scallion whites, soy sauce and sugar, and cook for another 30 seconds (if using a skillet, remove from heat). Immediately spoon the contents of the pan evenly over chicken and herbs. Serve right away."
        ],
        "id": "59C3MN88"
    },
    {
        "name": "Bake Rice with Chicken and Mushroom",
        "cat": "Chicken",
        "time": 80,
        "ingredients": [
            {
                "amount": 2,
                "size": "Pounds",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Skinless,boneless",
                    "Cut into 2-inch chunks"
                ]
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Onion",
                "comment": [
                    "Diced, about 3/2 cups"
                ]
            },
            {
                "amount": 1,
                "size": "Sprig",
                "ingredient": "Thyme",
                "comment": [
                    "Large",
                    "Plus 1 teaspoon freshly chopped leaves"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Bay Leaf"
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "White Wine"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Basmati Rice",
                "comment": [
                    "Soaked for 20 minutes, rinsed and drained"
                ]
            },
            {
                "amount": 8,
                "size": "Ounces",
                "ingredient": "King Trumpet Mushrooms",
                "comment": [
                    "Or a mixture of mushrooms",
                    "Sliced 1/4-inch thick"
                ]
            },
            {
                "amount": 4,
                "size": "Cups",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Hot"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Frozen Peas",
                "comment": [
                    "Cooked for 2 minutes in salted water (optional)"
                ]
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Small",
                    "Smashed to a paste with a little salt"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Roughly chopped"
                ]
            }
        ],
        "steps": [
            "Put chicken pieces on a baking sheet and season generously with salt and pepper. Set aside. Heat oven to 350 degrees.",
            "Pour olive oil into a 4-quart enamelware Dutch oven or similar heavy pot and set over medium-high heat. Add onions and cook, stirring, until nicely browned, 8 to 10 minutes, then season with salt. Add chicken, thyme sprig and bay leaf, and continue to cook, stirring, for 2 minutes more.",
            "Add wine and simmer briskly until reduced by half, about 5 minutes.",
            "Add rice and a large handful of mushrooms and stir to combine. (Reserve most of the mushrooms for garnish.) Add broth and bring to a simmer. Check broth for seasoning and adjust.",
            "Cover pot and cook for 10 minutes over medium heat. Transfer pot to oven and bake for 20 minutes. Finally, remove from oven and let rest for 10 minutes off heat.",
            "While rice is baking, sauté remaining mushrooms: Melt butter in a large skillet over high heat. Add mushrooms, season with salt and pepper and cook, rapidly stirring, until they have softened and browned, 5 to 7 minutes. Add peas, if using, and heat through. Turn off heat, then add reserved chopped thyme, the garlic and the parsley. Toss to coat well.",
            "Fluff rice, then top with sautéed mushrooms and serve."
        ],
        "id": "QT336WC9"
    },
    {
        "name": "Middle Eastern Herb and Garlic Chicken",
        "cat": "Chicken",
        "time": 40,
        "ingredients": [
            {
                "amount": 6,
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless, skinless",
                    "About 7/4 pounds"
                ]
            },
            {
                "amount": 6,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Grated on a Microplane or minced"
                ]
            },
            {
                "amount": 2,
                "ingredient": "Lemons",
                "comment": [
                    "Juice and zest of"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Extra-Virgin Olive Oil",
                "comment": [
                    "More for serving"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Minced, fresh",
                    "More for serving"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Mint",
                "comment": [
                    "Minced, fresh"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Thyme",
                "comment": [
                    "Minced, fresh"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "comment": [
                            "Minced, fresh"
                        ],
                        "ingredient": "Oregano"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "comment": [
                            "Minced, fresh"
                        ],
                        "ingredient": "Marjoram"
                    }
                ]
            },
            {
                "amount": "3/2",
                "size": "Teaspoons",
                "ingredient": "Kosher Salt",
                "comment": [
                    "More as needed"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Sesame Seeds",
                "comment": [
                    "More for garnish (optional)"
                ]
            },
            {
                "amount": "3/4",
                "size": "Teaspoon",
                "ingredient": "Sumac",
                "comment": [
                    "More for garnish (optional)"
                ]
            },
            {
                "amount": "2/3",
                "size": "Cup",
                "ingredient": "Plain Greek Yogurt",
                "comment": [
                    "Preferably whole milk yogurt"
                ]
            },
            {
                "amount": "1/4",
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            }
        ],
        "steps": [
            "Combine chicken with all but 1 teaspoon of the grated garlic (save that teaspoon for the yogurt sauce), the zest and juice of 1 lemon, oil, parsley, mint, thyme, oregano, 1 1/2 teaspoons salt, and the sesame seeds and sumac, if using. Cover and marinate for 15 to 30 minutes at room temperature; you can refrigerate it for up to 24 hours.",
            "Heat grill or broiler. If grilling, cook chicken over high heat until charred in spots, 4 to 7 minutes. Flip pieces and continue grilling until just cooked through, another 4 to 7 minutes. If broiling, arrange a rack 3 to 4 inches from flame. Line a rimmed baking sheet with foil and spread chicken out in a single layer. Broil chicken, turning halfway through cooking, until well colored and charred in spots, 4 to 7 minutes per side. Be careful that it doesn’t burn.",
            "While chicken cooks, place yogurt in a small bowl. Stir in the reserved grated garlic and lemon zest and season to taste with salt. Serve the chicken drizzled with olive oil, remaining lemon juice to taste, black pepper, parsley and sesame seeds and sumac, if using, with the yogurt alongside for dipping."
        ],
        "id": "D696927Y"
    },
    {
        "name": "Miso Chicken in Ginger, Leek, & Scallion Broth",
        "cat": "Chicken",
        "time": 60,
        "ingredients": [
            {
                "amount": 8,
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless, skinless",
                    "About 3lb"
                ]
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Large",
                    "Smashed but not peeled, plus 1/2 teaspoon grated garlic"
                ]
            },
            {
                "amount": 1,
                "size": "Piece",
                "ingredient": "Ginger",
                "comment": [
                    "2-inch",
                    "Peeled and thickly sliced, plus 1 teaspoon grated fresh ginger"
                ]
            },
            {
                "amount": 1,
                "size": "Small",
                "ingredient": "Onion",
                "comment": [
                    "Thinly sliced"
                ]
            },
            {
                "amount": 6,
                "size": "Cups",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Optional"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Mirin"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 4,
                        "size": "Tablespoons",
                        "ingredient": "Yellow Miso"
                    },
                    {
                        "amount": 4,
                        "size": "Tablespoons",
                        "ingredient": "Red Miso"
                    }
                ]
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Gochugaru",
                "comment": [
                    "Korean red-pepper flakes"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Rice Wine Vinegar"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Granulated Sugar"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Leeks",
                "comment": [
                    "White and tender green parts, chopped into 1/2-inch pieces"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Scallions",
                "comment": [
                    "Thinly sliced",
                    "For garnish"
                ]
            }
        ],
        "steps": [
            "Put chicken thighs in a large pot, seasoning well with salt and pepper on both sides. Add smashed garlic cloves, ginger slices, onion, 6 cups water (or chicken broth, if you prefer) and mirin, and bring to a boil. Reduce heat to a simmer and cook, covered, for 30 minutes, until tender. Remove chicken to a baking dish. Strain broth into a bowl. Place back into the pot, and keep warm. Heat oven to 375 degrees.",
            "In a small bowl, combine miso, gochugaru, grated garlic, grated ginger, vinegar and sugar. Add a little hot broth to thin, then smear mixture over chicken and coat well.",
            "Bake chicken until browned and glazed, about 20 minutes.",
            "While chicken is cooking, bring broth to a simmer, taste and adjust seasoning. Add leeks and cook until just done — soft, but still green, about 5 minutes.",
            "To serve, slice chicken into 1/4-inch pieces and divide among large soup bowls, then ladle broth on top. Spoon any remaining miso mixture from pan over chicken. Garnish with scallions."
        ],
        "id": "UK052834"
    },
    {
        "name": "Chicken Shawarma",
        "cat": "Chicken",
        "time": 180,
        "ingredients": [
            {
                "amount": 2,
                "ingredient": "Lemons",
                "comment": [
                    "About 6 tablespoons",
                    "Juice of"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Olive Oil",
                "comment": [
                    "+1 tablespoon"
                ]
            },
            {
                "amount": 6,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Cumin",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Turmeric",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Pinch",
                "ingredient": "Cinnamon",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Hot Paprika",
                "comment": [
                    "Or, more to taste"
                ]
            },
            {
                "ingredient": "Red Pepper Flakes",
                "comment": [
                    "Crushed",
                    "Or more to taste"
                ]
            },
            {
                "amount": 2,
                "size": "Pounds",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless, skinless"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Red Onions",
                "comment": [
                    "About 10 ½oz",
                    "Peeled and cut into 6 wedges"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Flat-leaf, chopped",
                    "Optional"
                ]
            },
            {
                "type": "cat",
                "name": "For Serving (Optional)",
                "ingredients": [
                    {
                        "type": "alternatives",
                        "ingredients": [
                            {
                                "ingredient": "Pita Bread"
                            },
                            {
                                "ingredient": "Naan bread"
                            }
                        ]
                    },
                    {
                        "ingredient": "Greek Salad"
                    },
                    {
                        "type": "and",
                        "ingredients": [
                            {
                                "ingredient": "Cucumbers",
                                "comment": [
                                    "(chopped)"
                                ]
                            },
                            {
                                "ingredient": "Tomatoes",
                                "comment": [
                                    "(chopped)"
                                ]
                            }
                        ]
                    },
                    {
                        "ingredient": "Hummus"
                    },
                    {
                        "ingredient": "Dip",
                        "comment": [
                            "-Yogurt and cucumber-"
                        ]
                    },
                    {
                        "ingredient": "Kalamata Olives"
                    },
                    {
                        "ingredient": "Feta Cheese"
                    },
                    {
                        "ingredient": "Eggplant",
                        "comment": [
                            "(roasted)"
                        ]
                    },
                    {
                        "ingredient": "Rice",
                        "comment": [
                            "(cooked)"
                        ]
                    },
                    {
                        "ingredient": "Couscous",
                        "comment": [
                            "-such as this Lemon Israeli Couscous-"
                        ]
                    },
                    {
                        "ingredient": "Hot Sauce"
                    }
                ]
            }
        ],
        "steps": [
            "In a large bowl, combine the lemon juice, 1/2 cup oil, garlic, salt, pepper, cumin, turmeric, cinnamon, paprika, and crushed red pepper flakes and whisk to combine.",
            "Add the chicken to the bowl and toss well to coat. Cover and store in the refrigerator for at least 2 hours and up to 12 hours.",
            "When you’re ready to cook, heat the oven to 425°F (218°C). Slick a rimmed baking sheet with 1 tablespoon oil.",
            "Add the onion wedges to the chicken and marinade and toss to combine.",
            "Place the chicken and onions in a single layer on the baking sheet, letting any excess marinade drip back into the bowl. Discard the marinade.",
            "Roast until the chicken is evenly browned, crisp at the edges, and cooked through, 30 to 40 minutes.",
            "Remove the chicken from the oven and let it rest for a few minutes.",
            "Cut the chicken into 1/2- to 1-inch (1- to 2.5-cm) pieces.Arrange the chicken in a large bowl or on a platter. Scatter the parsley over the top, if using.",
            "If desired, arrange small bowls of extras alongside the chicken and let everyone customize the chicken shawarma to their liking."
        ],
        "id": "0S71WPA4"
    },
    {
        "name": "Chicken Florentine",
        "cat": "Chicken",
        "time": 35,
        "ingredients": [
            {
                "amount": "3/2",
                "size": "Pound",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Skinned and boned"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Green Olive Oil"
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Garlic",
                "comment": [
                    "Full bulb, chopped"
                ]
            },
            {
                "amount": 2,
                "size": "Large",
                "ingredient": "Onion",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Rosemary"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "White Wine",
                "comment": [
                    "Italian"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Pound",
                        "ingredient": "Spinach",
                        "comment": [
                            "(fresh, chopped)"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Package",
                        "ingredient": "Spinach",
                        "comment": [
                            "(frozen, chopped)"
                        ]
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Parsley",
                "comment": [
                    "Italian, fresh, chopped"
                ]
            },
            {
                "amount": "½",
                "ingredient": "Lemons",
                "comment": [
                    "Squeezed"
                ]
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "To taste"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Water"
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Rice",
                "comment": [
                    "Long-grain"
                ]
            }
        ],
        "steps": [
            "Preheat oven at 350 degrees.",
            "Wash and dry the chicken thoroughly; place it in a shallow, oven-proof glass dish. Add 1/2 of the olive oil and 1/2 of the chopped garlic and onion, and cook for 15 minutes. Sprinkle with rosemary and 1/2 cup of wine. Cover tightly with foil and bake for 25 minutes, or until the sauce has thickened and the chicken is soft, moist, and tender.",
            "In a large covered skillet, sauté the remaining olive oil and garlic and onion over medium heat. After 1 minute, reduce the heat and add 1/2 cup of white wine. Cook slowly over low heat; reduce until slightly thick (about 3-4 minutes). Add the spinach, Italian herb seasoning, Parsley, lemon, and black pepper. Cover tightly and cook until al dente (about 6 minutes).",
            "Put exactly 2 cups of water in a separate tightly lidded saucepan, and bring to a fast boil. Add 1 cup of rice and boil for exactly 20 minutes. To serve, pour the cooked spinach in sauce onto a serving platter, and arrange the rice around the outside. Place the pieces of chicken on the bed of spinach. Garnish with thinly sliced tomato, if desired."
        ],
        "id": "QOJAPNL5"
    },
    {
        "name": "Chicken with Tarragon, Shallots, Vinegar",
        "cat": "Chicken",
        "time": 25,
        "ingredients": [
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tomato Paste"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Chicken Breasts",
                "comment": [
                    "About 5/4 pounds"
                ]
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Shallots"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Tarragon"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "White Wine"
            },
            {
                "amount": 4,
                "size": "Ripe",
                "ingredient": "Plum Tomatoes",
                "comment": [
                    "Cut into cubes"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoon",
                "ingredient": "Red Wine Vinegar"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Capers",
                "comment": [
                    "Drained"
                ]
            }
        ],
        "steps": [
            "Sprinkle chicken with salt and pepper.",
            "Heat oil in skillet.",
            "Add chicken and sauté over medium heat for 5 minutes.",
            "Add shallots and garlic, cook briefly.",
            "Add tarragon and all the rest but Parsley.",
            "Stir to dissolve brown particles (Blend Well).",
            "Bring to a boil, then simmer for 5 minutes.",
            "Serve with rice."
        ],
        "id": "F4P0Q7O0"
    },
    {
        "name": "Fippy Chicken",
        "cat": "Chicken",
        "time": 40,
        "ingredients": [
            {
                "ingredient": "Oranges"
            },
            {
                "ingredient": "Breadcrumbs"
            },
            {
                "ingredient": "Chicken Breasts"
            },
            {
                "ingredient": "Honey-Mustard"
            },
            {
                "ingredient": "Soy Sauce"
            },
            {
                "ingredient": "Orange Juice"
            },
            {
                "ingredient": "Garlic Powder"
            },
            {
                "ingredient": "Pepper"
            },
            {
                "ingredient": "Tarragon"
            },
            {
                "ingredient": "White Wine"
            }
        ],
        "steps": [
            "Create marinade by combining orange juice, soy sauce, honey mustard, garlic powder pepper, white wine.",
            "Dip chicken in marinade, then breadcrumbs. Repeat.",
            "Put in baking dish, pour in marinade.",
            "Slice oranges and put on top of chicken.",
            "Add more to marinade, include breadcrumbs and ehat up in separate pot.",
            "Bake chicken 350 degrees for about 20-25 minutes."
        ],
        "id": "5XY007I3"
    },
    {
        "name": "Roast Chicken with Garlic",
        "cat": "Chicken",
        "time": 90,
        "ingredients": [
            {
                "amount": "7/4",
                "size": "Pound",
                "ingredient": "Chicken",
                "comment": [
                    "Roasting"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Lemons",
                "comment": [
                    "Cut in half"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Garlic",
                "comment": [
                    "Head, separated in cloves"
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Water"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Extra-Virgin Olive Oil"
            }
        ],
        "steps": [
            "Preheat oven to 400 degrees. Wipe chicken dry with paper towels. Remove loose fat from inside cavity. Squeeze lemon juice on skin and inside cavity.",
            "Arrange chicken in roasting pan. Place the garlic around chicken and pour in water. Sprinkle chicken with oil.",
            "Roast 45-60 minutes or until chicken is cooked, basting frquently. Garlic should roast without bruning, once water is evaporated. If garlic browns too fast, add a little more water.",
            "Serve chicken, surrounded by garlic on platter."
        ],
        "id": "0LDOMG7J"
    },
    {
        "name": "Brined Chicken",
        "cat": "Chicken",
        "time": 135,
        "ingredients": [
            {
                "type": "cat",
                "name": "Brine",
                "ingredients": [
                    {
                        "amount": "½",
                        "size": "Cup",
                        "ingredient": "Kosher Salt"
                    },
                    {
                        "amount": "7/4",
                        "size": "Cups",
                        "ingredient": "Sugar"
                    },
                    {
                        "amount": "1",
                        "size": "Cup",
                        "ingredient": "Honey"
                    },
                    {
                        "type": "and",
                        "ingredients": [
                            {
                                "ingredient": "3 Sprigs"
                            },
                            {
                                "ingredient": "Parsley"
                            },
                            {
                                "ingredient": "Dill"
                            },
                            {
                                "ingredient": "Thyme"
                            },
                            {
                                "ingredient": "Tarragon"
                            },
                            {
                                "ingredient": "Sage"
                            }
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Sprig",
                        "ingredient": "Rosemary"
                    },
                    {
                        "amount": 1,
                        "size": "Tablepsoon",
                        "ingredient": "Mustard Seeds"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Fennel Seeds"
                    },
                    {
                        "amount": 1,
                        "ingredient": "Cinnamon Stick"
                    },
                    {
                        "amount": 2,
                        "size": "Large",
                        "ingredient": "Bay Leaves"
                    },
                    {
                        "amount": 4,
                        "ingredient": "Cloves"
                    },
                    {
                        "amount": "½",
                        "size": "Tablespoon",
                        "ingredient": "Juniper Berries"
                    },
                    {
                        "amount": "½",
                        "size": "Tablespoon",
                        "ingredient": "Cardamom Peas"
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Black Peppercorn"
                    },
                    {
                        "amount": 1,
                        "ingredient": "Lemons",
                        "comment": [
                            "(halved and squeezed lightly)"
                        ]
                    },
                    {
                        "amount": 3,
                        "ingredient": "Star Anise"
                    },
                    {
                        "amount": "½",
                        "size": "Tablespoon",
                        "ingredient": "Whole All Spice"
                    }
                ]
            },
            {
                "type": "cat",
                "name": "Chicken",
                "ingredients": [
                    {
                        "amount": "7/4",
                        "size": "Pound",
                        "ingredient": "Chicken"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Carrots",
                        "comment": [
                            "(sliced)"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Celery",
                        "comment": [
                            "(sliced)"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "ingredient": "Onion",
                        "comment": [
                            "(sliced)"
                        ]
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Butter",
                        "comment": [
                            "(unsalted, melted)"
                        ]
                    }
                ]
            }
        ],
        "steps": [
            "In large stockpot or roasting pan, palce 1 gallon water. Bring to boil and remove from heat. Add all ingredients for brine and stir. Coolt or oom temperature.",
            "Add chicken to pan. Cover and refrigrerate overnight.",
            "Drain chicken well and discard brine. Cut off and discard wing tips. Preheat oven to 350 degrees. In a roasting pan, place carrots, celery, and onion. Place chicken on top of vegetables. Brush chicken with melted butter.",
            "Roast chicken until thigh joint temperature reaches 150 degrees (about 1 hour). Baste with pan juices at least every 15 minutes. Watch carefully to avoid burning; if parts become well-browned, cover with foil. When chick is done, remove from oven, and allow it to rest 10 minutes before carving."
        ],
        "id": "UO969TT5"
    },
    {
        "name": "Nobu's Chicken Teriyaki",
        "cat": "Chicken",
        "ingredients": [
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Chicken Stock"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Soy Sauce",
                "comment": [
                    "Japanese"
                ]
            },
            {
                "amount": 7,
                "size": "Tablespoons",
                "ingredient": "Sugar"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Corn Starch"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Water"
            },
            {
                "amount": 2,
                "ingredient": "Chicken Breasts",
                "comment": [
                    "Whole, boneless, skinless"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Vegetable Oil"
            }
        ],
        "steps": [
            "Bring the stock, soy sauce and sugar to a boil in a small saucepan. Lower the heat and simmer for 2 minutes. Mix together the cornstarch and the water and whisk into the teriyaki base. Bring back to a boil and simmer for 2 more minutes. Remove from the heat.",
            "Prick holes in the chicken with the tines of a fork. Pour the sauce over the chicken breasts and marinate, turning occasionally, for 6 hours, or overnight.",
            "Heat the grill. Scrape the excess sauce off the chicken and reserve. Brush the grill with oil. Grill the chicken for 5 minutes. Turn and baste with the sauce. Continue to turn and baste, using as much sauce as desired, until the juices run clear when pricked with a knife. About 12 to 15 minutes."
        ],
        "id": "57X9PUS4"
    },
    {
        "name": "Peruvian Chicken",
        "cat": "Chicken",
        "time": 120,
        "ingredients": [
            {
                "amount": "3½",
                "size": "Pound",
                "ingredient": "Whole Chicken",
                "comment": [
                    "Spatchcock recommended"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Tablespoon",
                        "ingredient": "Avocado Oil"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoon",
                        "ingredient": "Olive Oil"
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoon",
                "ingredient": "Ajiamarillo Paste"
            },
            {
                "amount": "3/2",
                "size": "Tablespoon",
                "ingredient": "Lime Juice"
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Large, pressed or minced"
                ]
            },
            {
                "amount": 2,
                "size": "Teasponns",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Cumin",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Teasponn",
                "ingredient": "Oregano",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "ingredient": "Cilantro Jalapeno Sauce",
                "comment": [
                    "For serving, optional"
                ]
            }
        ],
        "steps": [
            "While it's not required, I highly recommend you spatchcock the chicken. All this means is you cut the backbone out so it lays flat on the roasting pan. Spatchcock chicken cooks more evenly, more quickly, and is much easier to carve. My Spatchcock Chicken post shows you how do to this.",
            "In a small bowl, mix together the avocado oil, aji amarillo paste, lime juice, garlic, salt, cumin, oregano, and black pepper.",
            "Place the chicken on a sheet pan and pat the chicken dry with a paper towel. Then rub the marinade all over the chicken. Let sit at room temperature for one hour.",
            "Alternatively, you can marinate this up to 24 hours in advance in the fridge. Note: never leave meat out of the fridge for more than 2 hours.",
            "15 minutes before cooking, preheat the oven to 425F.",
            "Roast the chicken for 40-45 minutes, basting the chicken in its own juices after 30 minutes, and again at 40 minutes. When the chicken is done, the breast should register at 160F when measured with a thermometer.",
            "Let the chicken rest for 5-10 minutes after roasting, so the juices don't run out while carving. Enjoy!"
        ],
        "id": "FL3X7989"
    },
    {
        "name": "Chicken Breast w Mushrooms & Capers",
        "cat": "Chicken",
        "ingredients": [
            {
                "ingredient": "4 Chicken Breasts (boneless, skinless)"
            },
            {
                "ingredient": " Around 3/2 Pounds"
            },
            {
                "ingredient": "Salt And Freshly Ground Pepper For Taste"
            },
            {
                "ingredient": "2 Tablespoons Olive Oil"
            },
            {
                "ingredient": "1/2 Cup Onion (finely Chopped)"
            },
            {
                "ingredient": "1 Teaspoon Garlic (finely Chopped)"
            },
            {
                "ingredient": "1 Teaspoon Chopped Fresh Rosemary Or 1 Teaspoon Dried"
            },
            {
                "ingredient": "1 Pound Small Mushrooms (if Large"
            },
            {
                "ingredient": " Cut In Quarters)"
            },
            {
                "ingredient": "2 Tablespoons Red Wine Vinegar"
            },
            {
                "ingredient": "4 Tablespoons Capers (drained)"
            },
            {
                "ingredient": "1/2 Cup Chicken Broth (Fresh Or Canned)"
            },
            {
                "ingredient": "1 Tablespoon Tomato Paste"
            },
            {
                "ingredient": "4 Tablespoons Parsley (chopped)"
            }
        ],
        "steps": [
            "Cut the chicken in lite-sized pieces. Sprinkle the chicken with salt, pepper and flour.",
            "Heat the oil in a heavy-bottomed skillet. Add the chicken breasts. Sauté them over medium-high heat, turning often, until lightly browned, about 5 minutes.",
            "Add the onion, garlic, rosemary and mushrooms. Cook stirring about 5 minutes.",
            "Pour off the fat and add the vinegar, stirring to dissolve the brown particles clinging to the skillet. Add the capers, broth and tomato paste and blend well. Bring to a boil, cover and simmer 5 minutes. Add the Parsley and stir to coat the chicken well. Serve."
        ],
        "id": "BP141JZI"
    },
    {
        "name": "Chicken Skillet w Orzo, Dill, & Fetas",
        "cat": "Chicken",
        "time": 35,
        "ingredients": [
            {
                "amount": 2,
                "ingredient": "Lemons"
            },
            {
                "amount": 5,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Smashed"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Black Pepper"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Pounds",
                        "ingredient": "Chicken Drumsticks"
                    },
                    {
                        "amount": 2,
                        "size": "Pounds",
                        "ingredient": "Chicken Thighs",
                        "comment": [
                            "(bone-in)"
                        ]
                    }
                ]
            },
            {
                "amount": 1,
                "ingredient": "Yellow Onion",
                "comment": [
                    "Peeled, chopped"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Orzo"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 3,
                        "size": "Cups",
                        "ingredient": "Chicken Broth"
                    },
                    {
                        "amount": 3,
                        "size": "Cups",
                        "ingredient": "Water"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Small",
                        "ingredient": "Cucumbers",
                        "comment": [
                            "(English, Thin-skinned)",
                            "-Chopped-"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Large",
                        "ingredient": "English Cucumbers",
                        "comment": [
                            "Thin-skinned",
                            "Chopped"
                        ]
                    }
                ]
            },
            {
                "amount": 5,
                "size": "Ounces",
                "ingredient": "Feta",
                "comment": [
                    "Crumbled",
                    "About 7/4 Cups"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Dill",
                "comment": [
                    "Fresh, Chopped"
                ]
            },
            {
                "ingredient": "Green Olives",
                "comment": [
                    "Castelvetrano Or Other Green Olives",
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Cut one of the lemons into wedges and set aside. Juice the remaining lemon and combine with 3 tablespoons olive oil, garlic, salt and pepper, in a large resealable plastic bag or in a bowl, along with the chicken pieces. Seal and shake the bag (or stir in the bowl) to coat. Set aside for 30 minutes, or refrigerate up to overnight.",
            "Heat the remaining 2 tablespoons olive oil in a large cast-iron skillet over medium-high heat. Remove the chicken from the marinade, letting the excess drip off, and cook until lightly golden all over, turning when the chicken releases easily from the pan, about 12 minutes total. Transfer chicken to a plate and set aside.",
            "Add the onion to the pan and stir to coat with the remaining fat. Decrease heat to medium and cook until soft, about 4 minutes. Stir in the orzo and the broth or water. Cook until the liquid is partly absorbed, stirring occasionally, about 5 minutes. Top with the chicken legs and cover with a lid or foil. Continue cooking until the orzo is tender, most of the liquid is absorbed, and the chicken is cooked through, 15 to 20 minutes more, depending on the size of your drumsticks or thighs. Remove from the heat and scatter the cucumber, feta and dill over the top. Serve from the skillet with lemon wedges and olives."
        ],
        "id": "0NASSW94"
    },
    {
        "name": "Halibut With Brown Butter, Lemon and Sage",
        "cat": "Fish",
        "time": 30,
        "ingredients": [
            {
                "amount": "3/2~",
                "size": "Pounds",
                "ingredient": "Halibut Fillets",
                "comment": [
                    "Cut Into 4 Pieces",
                    "Or other firm white-fleshed fish"
                ]
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": "12-15",
                "ingredient": "Sage Leaves",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Lemon Juice",
                "comment": [
                    "Freshly squeezed"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Bread Crumbs",
                "comment": [
                    "Oarse, Homemad",
                    "Toasted"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Finely chopped"
                ]
            },
            {
                "ingredient": "Lemon Wedges",
                "comment": [
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Season fish on both sides with plenty of salt and pepper.",
            "Pour oil into a large, heavy skillet (preferably cast iron or nonstick) and set over medium-high heat. When oil is hot (but not smoking), swirl to evenly coat the pan, then add fish in a single layer. Let cook undisturbed for 3 to 4 minutes, until first side is nicely browned. Adjust the heat as needed to produce a steady sizzle and prevent scorching.",
            "Flip and cook fish for about another 3 minutes, until just done. (To test for doneness, use a fork to gently probe the flesh: it should flake easily.) Transfer cooked fish to a warm platter or serving plates.",
            "Make the sauce: Place skillet back on the stove over medium-high heat. Add butter and sage leaves. Cook butter, swirling the pan, until foamy and just beginning to brown, about 1 minute. Turn off heat and stir in lemon juice.",
            "Spoon butter sauce and sage leaves over fish. Sprinkle with bread crumbs and parsley. Serve immediately, with lemon wedges."
        ],
        "id": "8TI667M4"
    },
    {
        "name": "Trout With Chive Butter",
        "cat": "Fish",
        "time": 10,
        "ingredients": [
            {
                "amount": 4,
                "ingredient": "Trout",
                "comment": [
                    "Whole",
                    "Butterflied"
                ]
            },
            {
                "ingredient": "Sea Salt",
                "comment": [
                    "Fine",
                    "To Taste"
                ]
            },
            {
                "amount": 1,
                "size": "Clove",
                "ingredient": "Garlic",
                "comment": [
                    "Finely grated Or minced"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/2",
                        "size": "Teaspoon",
                        "comment": [
                            "+ more to taste"
                        ],
                        "ingredient": "Lemon Juice"
                    },
                    {
                        "amount": "1/2",
                        "size": "Teaspoon",
                        "comment": [
                            "+ more to taste"
                        ],
                        "ingredient": "Lime Juice"
                    }
                ]
            },
            {
                "amount": "1/8",
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted",
                    "Cubed and softened"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Chives",
                "comment": [
                    "Minced",
                    "More for serving"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "ingredient": "Trout Roe"
                    },
                    {
                        "ingredient": "Salmon Roe"
                    },
                    {
                        "ingredient": "Capers"
                    }
                ]
            }
        ],
        "steps": [
            "Heat the broiler. Place trout, skin side down, on a rimmed baking sheet. Sprinkle with salt.",
            "In a mini food processor, or using a mortar and pestle or a bowl and a fork, stir together garlic, lemon juice, pepper and a pinch of salt. Add softened butter and chives and mash or process until well mixed.",
            "Broil trout until just opaque, 2 to 5 minutes depending upon your broiler.",
            "Drop spoonfuls of butter on top of the fish; it will melt immediately. Top with more chives and with roe or capers, and a little more lemon juice if you like."
        ],
        "id": "077Y6546"
    },
    {
        "name": "Shrimp Scampi",
        "cat": "Fish",
        "time": 25,
        "ingredients": [
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Shrimp",
                "comment": [
                    "Large",
                    "Peeled and deveined"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Lemon Zest",
                "comment": [
                    "Plus 1 Tablespoon Juice (from 1 Lemon)"
                ]
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Red Pepper Flakes"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": 4,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Orzo"
            },
            {
                "amount": "1/3",
                "size": "Cup",
                "ingredient": "Dry White Wine"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Water",
                "comment": [
                    "Boiling"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Seafood Stock"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Chicken Stock"
                    }
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Parsley",
                "comment": [
                    "Finely chopped"
                ]
            }
        ],
        "steps": [
            "In a medium bowl, stir together shrimp, 1 tablespoon olive oil, lemon zest, red-pepper flakes, 1/2 teaspoon salt, 1/4 teaspoon pepper and half the garlic. Set aside to marinate. (This step can be done up to 1 hour in advance.)",
            "Add butter, remaining olive oil and remaining garlic to a medium skillet set over medium heat. When the butter starts to bubble, add the orzo and 1/2 teaspoon salt and cook, stirring often, until the orzo is toasted, about 2 minutes, adjusting the heat as necessary to prevent the garlic from burning. Carefully add the wine — it will bubble — and stir until absorbed, about 1 minute. Stir in water, reduce heat to low, cover, and cook until orzo is al dente, about 12 minutes.",
            "Add the shrimp in a snug, even layer on top of the orzo, cover, and cook until all the shrimp is pink and cooked through, 2 to 4 minutes. Remove from heat and let sit, covered, 2 minutes.",
            "Sprinkle with parsley and lemon juice, season with salt and pepper, and serve immediately."
        ],
        "id": "6U7YKOEE"
    },
    {
        "name": "Roasted Salmon With Miso Rice and Ginger-Scallion Vinaigrette",
        "cat": "Fish",
        "time": 30,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "ingredient": "White Miso"
                    },
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "ingredient": "Sweet Miso"
                    }
                ]
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Basmati Rice",
                "comment": [
                    "Or other long-grain rice"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Salmon Fillets",
                "comment": [
                    "Skin-on",
                    "Each 6-ounce"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Soy Sauce",
                "comment": [
                    "Low sodium"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Scallions",
                "comment": [
                    "Chopped",
                    "Plus more for garnish"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "White Vinegar",
                        "comment": [
                            "Distilled"
                        ]
                    },
                    {
                        "amount": 1,
                        "size": "Tablespoon",
                        "ingredient": "Rice Vinegar",
                        "comment": [
                            "Unseasoned"
                        ]
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Ginger",
                "comment": [
                    "Fresh, Minced"
                ]
            },
            {
                "amount": 4,
                "size": "Cups",
                "ingredient": "Cabbage",
                "comment": [
                    "Finely shredded, about 8 Ounzes",
                    "Greens like Napa Or Savoy"
                ]
            },
            {
                "ingredient": "Sesame Oil",
                "comment": [
                    "Roasted",
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Heat oven to 425 degrees. In a medium saucepan, whisk miso with 2 1/4 cups water until dissolved. Stir in rice and bring to a boil. Cover, reduce heat to low and cook until all of the liquid is absorbed and rice is tender, about 15 minutes. Remove from heat and let stand for 5 minutes. Fluff rice with a fork (it will be a little sticky).",
            "On a rimmed baking sheet, rub salmon all over with olive oil, season with salt and pepper and arrange skin-side up. Roast until fish is just opaque and cooked to medium, 8 to 10 minutes.",
            "In a small bowl, combine soy sauce, scallions, vinegar and ginger, and season with salt and pepper.",
            "Divide miso rice and cabbage among bowls. Top with salmon, ginger-scallion vinaigrette and sesame oil."
        ],
        "id": "0EG62F47"
    },
    {
        "name": "Salmon With Anchovy-Garlic Butter",
        "cat": "Fish",
        "time": 25,
        "ingredients": [
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Softened",
                    "Unsalted"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Anchovy Fillets",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Clove",
                "ingredient": "Garlic",
                "comment": [
                    "Minced (or 2 Small Ones)",
                    "A"
                ]
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "Coarse"
                ]
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly Ground"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Salmon Fillets",
                "comment": [
                    "Skin-on",
                    "Each 6-8 Ounce"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Drained Capers",
                "comment": [
                    "Patted dry"
                ]
            },
            {
                "amount": "1/2",
                "ingredient": "Lemons"
            },
            {
                "ingredient": "Parsley",
                "comment": [
                    "Freshly chopped",
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Heat oven to 400 degrees. In a small bowl, mash together butter, anchovies, garlic, salt and pepper.",
            "In a large ovenproof skillet, melt about half the anchovy butter. Add fish, skin side down. Cook for 3 minutes over high heat to brown the skin, spooning some pan drippings over the top of the fish as it cooks. Add capers to bottom of pan and transfer to oven. Roast until fish is just cooked through, 8 to 10 minutes.",
            "Remove pan from oven and add remaining anchovy butter to pan to melt. Place salmon on plates and spoon buttery pan sauce over the top. Squeeze the lemon half over the salmon and garnish with chopped parsley. Serve."
        ],
        "id": "S0KP59Z8"
    },
    {
        "name": "Salty-Sweet Barbecue Salmon and Broccoli",
        "cat": "Fish",
        "time": 30,
        "ingredients": [
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Broccoli Florets",
                "comment": [
                    "Cut Into 1-inch Pieces (about 8 Cups)"
                ]
            },
            {
                "amount": 12,
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed and halved crosswise"
                ]
            },
            {
                "amount": 1,
                "size": "Piece",
                "ingredient": "Ginger",
                "comment": [
                    "Fresh, Peeled and julienned (about 1 1/2 Tablespoons",
                    "1-inch"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "ingredient": "Safflower Oil"
                    },
                    {
                        "amount": "1/4",
                        "size": "Cup",
                        "ingredient": "Canola Oil"
                    }
                ]
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Yellow Onion",
                "comment": [
                    "Finely Chopped"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Tomato Paste"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "Turbinado Sugar"
                    },
                    {
                        "amount": 2,
                        "size": "Tablespoons",
                        "ingredient": "Light Brown Sugar"
                    }
                ]
            },
            {
                "amount": 6,
                "size": "Tablespoons",
                "ingredient": "Oyster Sauce"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Rice Vinegar",
                "comment": [
                    "Unseasoned"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Soy Sauce",
                "comment": [
                    "Low Sodium"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Salmon Fillets",
                "comment": [
                    "Skin-on",
                    "Each 6-ounce"
                ]
            },
            {
                "ingredient": "Rice",
                "comment": [
                    "Steamed",
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Heat oven to 450 degrees. On a rimmed baking sheet, combine broccoli, scallions, ginger and 2 tablespoons oil. Season with salt and pepper, and toss to coat. Spread in an even layer and roast until softened, about 15 minutes.",
            "While the broccoli mixture roasts, prepare the oyster barbecue sauce: In a small saucepan, heat the remaining 2 tablespoons oil over low. Add onion and garlic, and cook until softened, about 2 minutes. Add tomato paste and cook, stirring frequently, for 1 minute. Add sugar and cook, stirring, until sugar dissolves and the mixture darkens slightly, about 3 minutes. Stir in 1/2 cup water (be careful, as the mixture may splatter a little), then the oyster sauce, vinegar and soy sauce. Bring to a simmer. (The sugar may seize, but keep stirring; it will dissolve.) Cook, stirring, until sauce is thickened, about 5 minutes. Season generously with pepper. Remove 1/2 cup and set aside for passing at the table.",
            "Stir the roasted broccoli. Season salmon with salt and arrange on top of the broccoli. Liberally brush salmon all over with half of the remaining oyster barbecue sauce in the saucepan. Roast until the vegetables are caramelized and the salmon is cooked through, 8 to 10 minutes, basting salmon after 5 minutes with the barbecue sauce.",
            "Divide salmon and vegetables among plates. Serve with steamed rice and the reserved barbecue sauce."
        ],
        "id": "ZDET38JR"
    },
    {
        "name": "Five-Ingredient Creamy Miso Pasta",
        "cat": "Pasta",
        "time": 20,
        "ingredients": [
            {
                "ingredient": "Kosher Salt"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "16",
                        "size": "Ounces",
                        "ingredient": "Spaghetti"
                    },
                    {
                        "amount": "16",
                        "size": "Ounces",
                        "ingredient": "Linguine"
                    },
                    {
                        "amount": "16",
                        "size": "Ounces",
                        "ingredient": "Bucatini"
                    }
                ]
            },
            {
                "amount": 6,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "White Miso"
                    },
                    {
                        "amount": 3,
                        "size": "Tablespoons",
                        "ingredient": "Red Miso"
                    }
                ]
            },
            {
                "amount": 4,
                "size": "Ounces",
                "ingredient": "Parmesan",
                "comment": [
                    "Finely Grated",
                    "1 Packed Cup"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "comment": [
                            "Or other thinly sliced seaweed snacks",
                            "For Garnish (Optional)"
                        ],
                        "ingredient": "Kizami Nori"
                    },
                    {
                        "comment": [
                            "Or other thinly sliced seaweed snacks",
                            "For Garnish (Optional)"
                        ],
                        "ingredient": "Furikake"
                    }
                ]
            }
        ],
        "steps": [
            "Bring a large pot of salted water to a boil. Add the pasta and cook, stirring occasionally, until al dente. Reserve 1 1/2 cups pasta water, then drain the pasta.",
            "Add the butter, miso and 1 1/4 cups pasta water to the pot and whisk over medium heat until miso breaks down and liquid is uniform, 1 to 2 minutes. Add the pasta and Parmesan and cook, stirring vigorously with tongs until cheese is melted and sauce emulsifies. (The key word here is “vigorously.” To achieve a silky smooth pasta instead of a gloppy one, put your cacio e pepe skills to work.)",
            "Divide among shallow bowls and sprinkle with nori or furikake, if using."
        ],
        "id": "J124Z3IG"
    },
    {
        "name": "Fast Spaghetti Bolognese",
        "cat": "Pasta",
        "time": 30,
        "ingredients": [
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 1,
                "size": "Medium",
                "ingredient": "Yellow Onion",
                "comment": [
                    "Finely Chopped"
                ]
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Finely Chopped"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/2",
                        "size": "Pound",
                        "comment": [
                            "Preferably 20 Percent Fat"
                        ],
                        "ingredient": "Ground Beef"
                    },
                    {
                        "amount": "1/2",
                        "size": "Pound",
                        "comment": [
                            "Preferably 20 Percent Fat"
                        ],
                        "ingredient": "Pork"
                    },
                    {
                        "amount": "1/2",
                        "size": "Pound",
                        "comment": [
                            "Preferably 20 Percent Fat"
                        ],
                        "ingredient": "Dark Meat Turkey"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 12,
                        "size": "Ounces",
                        "comment": [
                            "Or other long pasta"
                        ],
                        "ingredient": "Spaghetti"
                    },
                    {
                        "amount": 12,
                        "size": "Ounces",
                        "comment": [
                            "Or other long pasta"
                        ],
                        "ingredient": "Pappardelle"
                    }
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Tomato Paste"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Worcestershire Sauce"
            },
            {
                "ingredient": "Parmesan",
                "comment": [
                    "Grated",
                    "For Serving"
                ]
            }
        ],
        "steps": [
            "Bring a large pot of salted water to a boil. Heat oil in a large skillet over medium-high. Add onion, garlic and 1/2 teaspoon salt and cook, stirring often, until beginning to soften, 3 minutes. Add beef and cook, breaking up with a wooden spoon, until no longer pink, about 3 minutes.",
            "Add pasta to the pot and cook according to package instructions until al dente.",
            "Meanwhile, add tomato paste to skillet and cook, stirring, until darkened, about 1 minute. Add 1 cup water, Worcestershire, 1/2 teaspoon pepper and 1/2 teaspoon salt and simmer until slightly reduced, about 5 minutes.",
            "Using tongs, transfer pasta directly from the pot to the skillet along with 1 cup pasta water. Increase heat to high and simmer vigorously, tossing, until sauce reduces and coats the pasta, about 2 minutes. Season to taste with salt and pepper. Serve with Parmesan."
        ],
        "id": "5BAM031G"
    },
    {
        "name": "Mapo Ragù",
        "cat": "Pasta",
        "time": 60,
        "ingredients": [
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Neutral Oil",
                "comment": [
                    "Like Canola"
                ]
            },
            {
                "amount": 2,
                "size": "Large",
                "ingredient": "Onions",
                "comment": [
                    "Peeled and sliced"
                ]
            },
            {
                "ingredient": "Kosher Salt",
                "comment": [
                    "For taste"
                ]
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Pork",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 4,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Peeled and chopped"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "10-15",
                        "ingredient": "Rice Cakes",
                        "comment": [
                            "Cylindrical, Frozen",
                            "Optional"
                        ]
                    },
                    {
                        "ingredient": "Rice Noodles"
                    },
                    {
                        "ingredient": "Pasta"
                    },
                    {
                        "ingredient": "Steamed Rice"
                    }
                ]
            },
            {
                "ingredient": "Ginger",
                "comment": [
                    "Freshly peeled and chopped",
                    "1-inch"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Gochujang",
                "comment": [
                    "Korean Chili-bean Paste"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Soy Sauce",
                "comment": [
                    "Low-sodium"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Brown Sugar"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Sichuan Peppercorns",
                "comment": [
                    "Optional"
                ]
            },
            {
                "amount": 1,
                "size": "Bunch",
                "ingredient": "Kale",
                "comment": [
                    "Roughly Chopped",
                    "Or Any Hearty Cooking Greens"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Scallions",
                "comment": [
                    "Thinly sliced",
                    "For garnish"
                ]
            }
        ],
        "steps": [
            "Heat the oil in a wok set over medium-high heat. When it shimmers, add the onions and the pinch of salt. Cook, stirring occasionally, until the onions have released their moisture and are starting to brown, approximately 10 minutes. Then turn the heat down to low, and continue to cook, stirring every few minutes, until they have turned golden brown and sweet, an additional 20 minutes or so.",
            "Tip the onions into a bowl, and return the wok to high heat over the stove. Add remaining tablespoon of oil, then the pork, and cook, breaking the meat up with a spoon, until it is just cooked, but not yet browning, approximately 10 minutes. Add the cooked meat to the reserved onions.",
            "If using the rice cakes, put a large pot of salted water over high heat, and bring to a boil.",
            "Return wok to stove over medium heat and cook the garlic and ginger in fat remaining from pork (add an extra splash of neutral oil if necessary). When the garlic and ginger soften, add gochujang, soy sauce, brown sugar and, if using, the Sichuan peppercorns. Add 1/2 cup to 1 cup of water, enough to loosen the gochujang and make a sauce, then return pork and onions to the wok and stir to combine. Adjust seasonings.",
            "Bring sauce to a simmer, and add the chopped greens, then stir to combine and cook until they have started to soften, approximately 5 minutes.",
            "If using rice cakes, place them in the boiling water for 3 to 5 minutes to soften, then drain and add to the sauce. (If not, serve the ragù with steamed rice, rice noodles or pasta.) Garnish with the sliced scallions."
        ],
        "id": "6G00UZ7P"
    },
    {
        "name": "Linguine with Clam Sauce",
        "cat": "Pasta",
        "time": 25,
        "ingredients": [
            {
                "ingredient": "Kosher Salt"
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Linguine",
                "comment": [
                    "Or other long pasta, like Linguine Fini or Spaghetti"
                ]
            },
            {
                "amount": 0.25,
                "size": "Cup",
                "ingredient": "Extra-Virgin Olive Oil",
                "comment": [
                    "Plus more for serving (Optional)"
                ]
            },
            {
                "amount": 5,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Thinly Sliced"
                ]
            },
            {
                "amount": "½-1",
                "size": "Teaspoon",
                "ingredient": "Red-Pepper Flakes"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Dried Oregano"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/2",
                        "size": "Cup",
                        "comment": [
                            "Dry"
                        ],
                        "ingredient": "Vermouth"
                    },
                    {
                        "amount": "1/2",
                        "size": "Cup",
                        "comment": [
                            "Dry"
                        ],
                        "ingredient": "White Wine"
                    }
                ]
            },
            {
                "amount": 2,
                "size": "Cans",
                "ingredient": "Clams",
                "comment": [
                    "Baby, Whole, With their juices",
                    "10-ounce"
                ]
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Lemon Zest",
                "comment": [
                    "From 1-2 Lemons"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Parsley",
                "comment": [
                    "Italian, Chopped"
                ]
            },
            {
                "ingredient": "Lemon Wedges",
                "comment": [
                    "For Serving (Optional)"
                ]
            }
        ],
        "steps": [
            "Bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions until 2 minutes short of al dente (it will finish cooking in the sauce). Reserve 1/2 cup pasta water, then drain pasta.",
            "While the pasta cooks, make your sauce: Heat the oil in a deep-sided 12-inch skillet over medium. Add the garlic, red-pepper flakes and oregano and cook until the garlic is pale golden, 1 to 2 minutes. Add the vermouth and simmer until reduced by half, 3 to 4 minutes. Stir in the clams with their juices and cook until just warmed through, 1 to 2 minutes more. Taste and season with salt and pepper as needed.",
            "Add the cooked pasta directly to the skillet along with the butter and lemon zest and toss until the butter has melted and the pasta is glossy with sauce. If needed, add 1/4 cup reserved pasta water. Stir in half the parsley.",
            "Serve pasta topped with a drizzle of olive oil, if desired, and the remaining parsley. Serve lemon wedges alongside if you like."
        ],
        "id": "596693KK"
    },
    {
        "name": "Marcella Hazan’s Bolognese Sauce",
        "cat": "Sauce",
        "time": 360,
        "ingredients": [
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Vegetable Oil"
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Plus 1 Tablespoon For Tossing The Pasta"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Onion",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "2/3",
                "size": "Cup",
                "ingredient": "Celery",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "2/3",
                "size": "Cup",
                "ingredient": "Carrots",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "3/4",
                "size": "Pound",
                "ingredient": "Beef Chuck",
                "comment": [
                    "Ground",
                    "Or You Can Use 1 Part Pork To 2 Parts Beef"
                ]
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground fresh from the mill"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Whole Milk"
            },
            {
                "ingredient": "Nutmeg",
                "comment": [
                    "Whole"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "White Wine",
                "comment": [
                    "Dry"
                ]
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Canned Tomatoes",
                "comment": [
                    "Ut Up, With Their Juic",
                    "Imported Italian Plum"
                ]
            },
            {
                "amount": "1¼-1½",
                "size": "Pounds",
                "ingredient": "Pasta"
            },
            {
                "ingredient": "Cheese",
                "comment": [
                    "Freshly grated, Parmigiano-reggiano",
                    "At The Table"
                ]
            }
        ],
        "steps": [
            "Put the oil, butter and chopped onion in the pot and turn the heat on to medium. Cook and stir the onion until it has become translucent, then add the chopped celery and carrot. Cook for about 2 minutes, stirring vegetables to coat them well.",
            "Add ground beef, a large pinch of salt and a few grindings of pepper. Crumble the meat with a fork, stir well and cook until the beef has lost its raw, red color.",
            "Add milk and let it simmer gently, stirring frequently, until it has bubbled away completely. Add a tiny grating -- about 1/8 teaspoon -- of nutmeg, and stir.",
            "Add the wine, let it simmer until it has evaporated, then add the tomatoes and stir thoroughly to coat all ingredients well. When the tomatoes begin to bubble, turn the heat down so that the sauce cooks at the laziest of simmers, with just an intermittent bubble breaking through to the surface. Cook, uncovered, for 3 hours or more, stirring from time to time. While the sauce is cooking, you are likely to find that it begins to dry out and the fat separates from the meat. To keep it from sticking, add 1/2 cup of water whenever necessary. At the end, however, no water at all must be left and the fat must separate from the sauce. Taste and correct for salt.",
            "Toss with cooked drained pasta, adding the tablespoon of butter, and serve with freshly grated Parmesan on the side."
        ],
        "id": "04YL85XU"
    },
    {
        "name": "Sausage Ragù",
        "cat": "Sauce",
        "time": 120,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Pound",
                        "ingredient": "Sweet Italian Sausage"
                    },
                    {
                        "amount": 1,
                        "size": "Pound",
                        "ingredient": "Bulk Sausage"
                    }
                ]
            },
            {
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "amount": 1,
                "ingredient": "Onion",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Carrots",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Celery",
                "comment": [
                    "Minced",
                    "Stalk"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Flat-Leaf Parsley",
                "comment": [
                    "Minced",
                    "Plus extra for garnish"
                ]
            },
            {
                "amount": 1,
                "size": "Can",
                "ingredient": "Tomatoes",
                "comment": [
                    "Whole, 28-ounce, With its juices",
                    "Preferably San Marzano"
                ]
            },
            {
                "amount": 1,
                "size": "Sprig",
                "ingredient": "Thyme",
                "comment": [
                    "Fresh, Large"
                ]
            },
            {
                "amount": 1,
                "size": "Sprig",
                "ingredient": "Rosemary",
                "comment": [
                    "Fresh, Large"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Tomato Paste"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Pasta",
                "comment": [
                    "Tubular, Dried",
                    "Pasta such as Mezzi Rigatoni, Paccheri, Penne"
                ]
            },
            {
                "ingredient": "Parmesan Cheese",
                "comment": [
                    "Freshly grated",
                    "For garnish (Optional)"
                ]
            }
        ],
        "steps": [
            "With the tip of a small, sharp knife, slit open the sausage casings. Crumble the meat into a wide, heavy skillet or Dutch oven and set over medium-low heat. If the meat is not rendering enough fat to coat the bottom of the pan as it begins to cook, add olive oil one tablespoon at a time until the meat is frying gently, not steaming. Sauté, breaking up any large chunks, until all the meat has turned opaque (do not let it brown), about 5 minutes.",
            "Add onion, carrot, celery and parsley and stir. Drizzle in more oil if the pan seems dry. Cook over very low heat, stirring often, until the vegetables have melted in the fat and are beginning to caramelize, and the meat is toasty brown. This may take as long as 40 minutes, but be patient: It is essential to the final flavors.",
            "Add tomatoes and their juice, breaking up the tomatoes with your hands or with the side of a spoon. Bring to a simmer, then add thyme and rosemary and let simmer, uncovered, until thickened and pan is almost dry, 20 to 25 minutes.",
            "Mix tomato paste with 1 cup hot water. Add to pan, reduce heat to very low, and continue cooking until the ragù is velvety and dark red, and the top glistens with oil, about 10 minutes more. Remove herb sprigs. Sprinkle black pepper over, stir and taste.",
            "Meanwhile, bring a large pot of salted water to a boil. Boil pasta until just tender. Scoop out 2 cups cooking water, drain pasta and return to pot over low heat. Quickly add a ladleful of ragù, a splash of cooking water, stir well and let cook 1 minute. Taste for doneness. Repeat, adding more cooking water or ragù, or both, until pasta is cooked through and seasoned to your liking.",
            "Pour hot pasta water into a large serving bowl to heat it. Pour out the water and pour in the pasta. Top with remaining ragù, sprinkle with parsley and serve immediately. Pass grated cheese at the table, if desired."
        ],
        "id": "037894P7"
    },
    {
        "name": "Lemony White Bean Soup With Turkey and Greens",
        "cat": "Soup",
        "time": 45,
        "ingredients": [
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Onion",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Carrots",
                "comment": [
                    "Diced"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Bunch",
                        "ingredient": "alternatives"
                    },
                    {
                        "amount": 1,
                        "size": "Bunch",
                        "ingredient": "Kale"
                    },
                    {
                        "amount": 1,
                        "size": "Bunch",
                        "ingredient": "Broccoli Rabe"
                    },
                    {
                        "amount": 1,
                        "size": "Bunch",
                        "ingredient": "Mustard Greens"
                    },
                    {
                        "amount": 1,
                        "size": "Bunch",
                        "ingredient": "Collard Greens"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tomato Paste"
            },
            {
                "amount": "3/4",
                "size": "Teaspoon",
                "ingredient": "Cumin",
                "comment": [
                    "Ground",
                    "Plus More To Taste"
                ]
            },
            {
                "amount": "1/8",
                "size": "Teaspoon",
                "ingredient": "Red-Pepper Flakes",
                "comment": [
                    "Plus More To Taste"
                ]
            },
            {
                "amount": "1/2",
                "size": "Pound",
                "ingredient": "Turkey",
                "comment": [
                    "Ground"
                ]
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Ginger",
                "comment": [
                    "Fresh",
                    "Finely Grated"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "Plus more to taste"
                ]
            },
            {
                "amount": 1,
                "size": "Quart",
                "ingredient": "Chicken Stock"
            },
            {
                "amount": 2,
                "size": "Cans",
                "ingredient": "White Beans",
                "comment": [
                    "Drained and rinsed",
                    "15-ounce"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Parsley"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Mint"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Dill"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Basil"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Tarragon"
                    },
                    {
                        "amount": 1,
                        "size": "Cup",
                        "comment": [
                            "Chopped Fresh",
                            "Any soft herbs, or a combination"
                        ],
                        "ingredient": "Chives"
                    }
                ]
            },
            {
                "ingredient": "Lemon Juice",
                "comment": [
                    "Fresh",
                    "To Taste"
                ]
            }
        ],
        "steps": [
            "Heat a large pot over medium-high for a minute or so to warm it up. Add the oil and heat until it thins out, about 30 seconds. Add onion and carrot, and sauté until very soft and brown at the edges, 7 to 10 minutes.",
            "Meanwhile, rinse the greens and pull the leaves off the stems. Tear or chop into bite-size pieces and set aside.",
            "When the onion is golden, add tomato paste, 3/4 teaspoon cumin and 1/8 teaspoon red-pepper flakes to the pot, and sauté until paste darkens, about 1 minute. Add turkey, garlic, ginger and 1 teaspoon salt, and sauté, breaking up the meat with your spoon, until turkey is browned in spots, 4 to 7 minutes.",
            "Add stock and beans, and bring to a simmer. Let simmer until the soup is thick and flavorful, adding more salt if needed, 15 to 25 minutes. If you like a thicker broth, you can smash some of the beans with the back of the spoon to release their starch. Or leave the beans whole for a brothier soup.",
            "Add the greens to the pot and simmer until they are very soft. This will take 5 to 10 minutes for most greens, but tough collard greens might take 15 minutes. (Add a little water if the broth gets too reduced.)",
            "Stir herbs and lemon juice into the pot, taste and add more salt, cumin and lemon until the broth is lively and bright-tasting. Serve topped with a drizzle of olive oil and more red-pepper flakes, if desired"
        ],
        "id": "MBA19XKQ"
    },
    {
        "name": "Roy Choi’s Braised Short-Rib Stew",
        "cat": "Stew",
        "time": 210,
        "ingredients": [
            {
                "amount": 4,
                "size": "Pounds",
                "ingredient": "Short Ribs",
                "comment": [
                    "Bone-in"
                ]
            },
            {
                "amount": 1,
                "size": "SM Bunch",
                "ingredient": "Scallions",
                "comment": [
                    "Trimmed And Roughly Chopped"
                ]
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Soy Sauce"
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Ginger",
                "comment": [
                    "Fresh, Chopped"
                ]
            },
            {
                "amount": 1,
                "size": "Small",
                "ingredient": "Yellow Onion",
                "comment": [
                    "Roughly chopped"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Garlic Cloves",
                "comment": [
                    "Peeled",
                    "About 2 Heads"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Granulated Sugar"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Mirin"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Orange Juice",
                "comment": [
                    "Fresh"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Apple Juice"
            },
            {
                "amount": "1/2",
                "size": "Pound",
                "ingredient": "Shiitake Mushrooms",
                "comment": [
                    "Stems Reserved For Another Use",
                    "Halved or quartered if large"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Chestnuts",
                "comment": [
                    "Jarred, Peeled"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Taro",
                "comment": [
                    "Peeled and cut into large dice",
                    "About A 3-inch segment"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Carrots",
                "comment": [
                    "Peeled and cut into large dice",
                    "About 2 Carrots"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Butternut Squash",
                "comment": [
                    "Peeled and Cubed",
                    "About half a squash"
                ]
            }
        ],
        "steps": [
            "Put short ribs in a bowl, and cover with water. Drain, and discard water. Repeat twice. Remove short ribs from bowl, and score them diagonally across the top of the meat. Return ribs to the bowl, and rinse again. Remove, and pat dry.",
            "In a blender or food processor, combine scallions, soy sauce, ginger, onion, garlic, sugar, mirin, orange juice and apple juice, then pulse to purée. Add a little water if you need to thin out the sauce so it combines.",
            "Put puréed sauce in a heavy-bottomed pot or Dutch oven with a lid, add 3 cups water and stir to combine. Bring pot to a boil over high heat, then add the ribs to the pot and lower heat to a simmer. Cover pot.",
            "Cook ribs over low for at least 2 hours. Add vegetables, cover and simmer, 30 minutes more or so, until meat is tender and vegetables are cooked through. Serve warm."
        ],
        "id": "189U362X"
    },
    {
        "name": "Dijon and Cognac Beef Stew",
        "cat": "Stew",
        "time": 180,
        "ingredients": [
            {
                "amount": "1/4",
                "size": "Pound",
                "ingredient": "Pork",
                "comment": [
                    "Salt",
                    "Diced"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Onion",
                "comment": [
                    "Finely Diced"
                ]
            },
            {
                "amount": 3,
                "ingredient": "Shallots",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "2-4",
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 2,
                "size": "Pound",
                "ingredient": "Beef Chuck",
                "comment": [
                    "In 1-inch Cubes"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "All-Purpose Flour"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Cognac"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Beef Stock"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Dijon Mustard"
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Pommery Mustard",
                "comment": [
                    "Or other Whole-grain Dijon Mustard"
                ]
            },
            {
                "amount": 4,
                "size": "Large",
                "ingredient": "Carrots",
                "comment": [
                    "Peeled and cut into half-moon slices"
                ]
            },
            {
                "amount": "1/2",
                "size": "Pound",
                "ingredient": "Mushrooms",
                "comment": [
                    "Stemmed, Cleaned and Quartered"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Red Wine"
            }
        ],
        "steps": [
            "Place salt pork in a Dutch oven over low heat, and cook until fat is rendered. Remove solid pieces with a slotted spoon, and discard. Raise heat, and add onion and shallots. Cook until softened but not browned, 10 to 15 minutes. Use a slotted spoon to transfer to a large bowl.",
            "If necessary, add 2 tablespoons butter to the pot to augment fat. Dust beef cubes with flour, and season with salt and pepper. Shake off excess flour, and place half the cubes in the pot. Cook over medium-high heat until well browned, almost crusty, on all sides, then transfer to a bowl with onions. Repeat with remaining beef.",
            "Add Cognac to the empty pot, and cook, stirring, until the bottom is deglazed and the crust comes loose. Add stock, Dijon mustard and 1 tablespoon Pommery mustard. Whisk to blend, then return meat and onion mixture to pot. Lower heat, partly cover, and simmer gently until meat is very tender, about 1 1/2 hours.",
            "Add carrots, and continue simmering for 30 minutes, or until slices are tender. As they cook, heat 2 tablespoons butter in a medium skillet over medium-high, and sauté mushrooms until browned.",
            "Stir mushrooms into stew along with remaining mustard and red wine. Simmer 5 minutes, then taste, and adjust seasoning. Serve hot."
        ],
        "id": "05555539"
    },
    {
        "name": "Oliver's Chicken Stew",
        "cat": "Stew",
        "time": 60,
        "ingredients": [
            {
                "amount": "3½-4",
                "size": "Pound",
                "ingredient": "Chicken",
                "comment": [
                    "Rinsed"
                ]
            },
            {
                "amount": 8,
                "size": "Cups",
                "ingredient": "Chicken Stock"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly ground"
                ]
            },
            {
                "amount": 5,
                "size": "Medium",
                "ingredient": "Carrots",
                "comment": [
                    "Thickly sliced"
                ]
            },
            {
                "amount": 4,
                "size": "Medium",
                "ingredient": "Leeks",
                "comment": [
                    "Thickly sliced",
                    "Tender White Part Only"
                ]
            },
            {
                "amount": 4,
                "ingredient": "Celery",
                "comment": [
                    "Thickly sliced",
                    "Stalks"
                ]
            },
            {
                "amount": 4,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Smashed"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Thyme",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Bay Leaf"
            },
            {
                "amount": 3,
                "size": "Sprigs",
                "ingredient": "Parsley",
                "comment": [
                    "Flat-Leaf"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Stellini",
                "comment": [
                    "Tiny Star Pasta"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Lemon Juice"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tarragon",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Parsley",
                "comment": [
                    "Chopped",
                    "Flat-Leaf"
                ]
            },
            {
                "amount": 6,
                "size": "Slices",
                "ingredient": "Bread",
                "comment": [
                    "Toasted, Italian"
                ]
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Parmesan Cheese",
                "comment": [
                    "Grated"
                ]
            }
        ],
        "steps": [
            "Place the chicken in a 6-quart pot, breast side down. Add the stock, lightly seasoned with salt and pepper, and bring to a boil, skimming often. Add the carrots, leeks, celery, garlic, thyme, bay leaf and parsley and simmer. After 15 minutes, flip the chicken and cook for 25 minutes more. Remove the chicken and let cool.",
            "Discard the bay leaf and parsley. Strain the vegetables, reserving the vegetables and the liquid. Return the stock to the pot; bring to a simmer. Pull the chicken meat off the bones. Add the pasta to the stock and cook for 3 minutes, then whisk in the butter, lemon juice, tarragon and parsley. Add the chicken and vegetables; heat through.",
            "To serve, place a piece of toast in the bottom of each of 6 bowls, then drizzle with olive oil and sprinkle with Parmesan. Top with stew."
        ],
        "id": "3632BO1W"
    },
    {
        "name": "Red Wine Chicken Stew",
        "cat": "Stew",
        "time": 30,
        "ingredients": [
            {
                "amount": 8,
                "size": "Medium",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Bone-in, Skin removed",
                    "3 Pounds"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "All-Purpose Flour"
            },
            {
                "amount": "3/4",
                "size": "Teaspoon",
                "ingredient": "Kosher Salt",
                "comment": [
                    "Plus more to taste"
                ]
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly Ground",
                    "Plus more to taste"
                ]
            },
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Olive Oil",
                "comment": [
                    "Divided"
                ]
            },
            {
                "amount": 1,
                "size": "Package",
                "ingredient": "Pearl Onions",
                "comment": [
                    "Frozen, Thawed, Patted Dry",
                    "14-ounce"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "A mix or either, Peeled, Diced",
                            "About 10 Ounces"
                        ],
                        "ingredient": "Carrots"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "A mix or either, Peeled, Diced",
                            "About 10 Ounces"
                        ],
                        "ingredient": "Parsnips"
                    }
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "A mix of either, Peeled, Large-diced",
                            "About 10 Ounces"
                        ],
                        "ingredient": "Celery Root"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "A mix of either, Peeled, Large-diced",
                            "About 10 Ounces"
                        ],
                        "ingredient": "Rutabaga"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "comment": [
                            "A mix of either, Peeled, Large-diced",
                            "About 10 Ounces"
                        ],
                        "ingredient": "Turnip"
                    }
                ]
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Tomato Paste",
                "comment": [
                    "Plus 1 Teaspoon"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Thyme",
                "comment": [
                    "Fresh, Chopped"
                ]
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Red Wine",
                "comment": [
                    "Dry",
                    "Such as Pinot Noir or Merlot"
                ]
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Low sodium"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Bay Leaf"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Red Wine Vinegar"
            },
            {
                "ingredient": "Parsley",
                "comment": [
                    "Fresh, Flat-Leaf",
                    "For Garnish (Optional)"
                ]
            }
        ],
        "steps": [
            "In a large bowl, combine the chicken with the flour and 1/4 teaspoon each of the salt and pepper, and toss to coat evenly. In a large, heavy pot such as a Dutch oven, over medium-high heat, heat 2 tablespoons of the oil until shimmering. Add half of the chicken and cook until golden on both sides, about 3 minutes per side, then transfer to a plate. Repeat with the remaining chicken.",
            "Add the remaining oil to the empty pot, followed by the onions and the diced vegetables and cook, stirring occasionally, softened slightly, about 4 minutes. Add the garlic and cook for 30 seconds more, then stir in the tomato paste and thyme. Add the wine, bring to a boil and cook, uncovered, for about 2 minutes. Add the broth, bay leaf and the remaining 1/2 teaspoon salt and 1/4 teaspoon pepper and return to a boil.",
            "Return the chicken, along with any accumulated juices, to the pot. Reduce the heat to medium-low, cover, and simmer until the chicken is cooked through and the vegetables are tender, about 25 minutes. Using a slotted spoon, transfer the chicken and vegetables to a rimmed serving plate and tent with foil. Increase the heat to high and cook until the sauce is reduced to about 2 cups, 5 to 10 minutes. Discard the bay leaf, then stir in the vinegar, and season to taste with additional salt and pepper, if desired. Pour the sauce over the chicken and vegetables, garnish with the parsley and serve."
        ],
        "id": "7XZG4F3O"
    },
    {
        "name": "Hungarian Mushroom Soup",
        "cat": "Soup",
        "time": 30,
        "ingredients": [
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Butter"
            },
            {
                "amount": 2,
                "size": "Cups",
                "ingredient": "Onions",
                "comment": [
                    "Chopped"
                ]
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Mushrooms",
                "comment": [
                    "Sliced"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Chicken Stock"
                    },
                    {
                        "amount": 2,
                        "size": "Cups",
                        "ingredient": "Vegetable Stock"
                    }
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "White Wine",
                "comment": [
                    "Dry"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoon",
                "ingredient": "Dill",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoon",
                "ingredient": "Thyme Leaves",
                "comment": [
                    "Fresh, Minced"
                ]
            },
            {
                "amount": 2,
                "size": "Teaspoon",
                "ingredient": "Paprika"
            },
            {
                "amount": 2,
                "size": "Tablespoon",
                "ingredient": "Soy Sauce"
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Milk"
            },
            {
                "amount": 3,
                "size": "Tablespoon",
                "ingredient": "Flour"
            },
            {
                "amount": "1/4",
                "size": "Cup",
                "ingredient": "Sour Cream"
            },
            {
                "amount": 2,
                "size": "Tablespoon",
                "ingredient": "Lemon Juice"
            },
            {
                "amount": 2,
                "size": "Tablespoon",
                "ingredient": "Parsley",
                "comment": [
                    "Fresh, Italian"
                ]
            }
        ],
        "steps": [
            "In a heavy pot or dutch oven sauté onions and mushrooms in butter over medium heat until onions are soft and translucent, about 15 minutes. Add dill, thyme, paprika, chicken broth, soy sauce and white wine. Bring to a simmer and cook until the liquid reduces by half. In a small bowl, whisk flour into milk until smooth. Add the milk mixture to the soup and cook until the soup begins to thicken, about 10 more minutes.",
            "Over low heat, slowly stir in the sour cream, and lemon juice until both are completely combined. Garnish the soup with parsley and serve hot."
        ],
        "id": "I6T4K7S0"
    },
    {
        "name": "Homemade Ramen",
        "cat": "Soup",
        "time": 30,
        "ingredients": [
            {
                "amount": 2,
                "size": "Large",
                "ingredient": "Eggs"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Olive Oil"
            },
            {
                "amount": 4,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Ginger",
                "comment": [
                    "Grated"
                ]
            },
            {
                "amount": 4,
                "size": "Cups",
                "ingredient": "Chicken Broth",
                "comment": [
                    "Reduced Sodium"
                ]
            },
            {
                "amount": 4,
                "size": "Ounces",
                "ingredient": "Shiitake Mushrooms"
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Soy Sauce",
                "comment": [
                    "Reduced Sodium"
                ]
            },
            {
                "amount": 3,
                "size": "Packages",
                "ingredient": "Yaki-Soba",
                "comment": [
                    "Refrigerated, (5.6oz)",
                    "Seasoning sauce packets discarded"
                ]
            },
            {
                "amount": 3,
                "size": "Cups",
                "ingredient": "Baby Spinach"
            },
            {
                "amount": 8,
                "size": "Slices",
                "ingredient": "Narutomaki",
                "comment": [
                    "Optional"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Carrots",
                "comment": [
                    "Grated"
                ]
            },
            {
                "amount": 2,
                "size": "Tablespoons",
                "ingredient": "Chives",
                "comment": [
                    "Chopped"
                ]
            }
        ],
        "steps": [
            "Place eggs in a large saucepan and cover with cold water by 1 inch. Bring to a boil and cook for 1 minute. Cover eggs with a tight-fitting lid and remove from heat; set aside for 8-10 minutes. Drain well and let cool before peeling and halving.",
            "Heat olive oil in a large stockpot or Dutch oven over medium heat. Add garlic and ginger, and cook, stirring frequently, until fragrant, about 1-2 minutes.",
            "Whisk in chicken broth, mushrooms, soy sauce and 3 cups water.",
            "Bring to a boil; reduce heat and simmer until mushrooms have softened, about 10 minutes. Stir in Yaki-Soba until loosened and cooked through, about 2-3 minutes.",
            "Stir in spinach, Narutomaki, carrot and chives until the spinach begins to wilt, about 2 minutes.",
            "Serve immediately, garnished with eggs."
        ],
        "id": "N7T17SZ4"
    },
    {
        "name": "Broccolini (or Asparagus) and Carrots",
        "cat": "Greens",
        "ingredients": [
            {
                "amount": "1/3",
                "size": "Cup",
                "ingredient": "Chicken Broth"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Soy Sauce"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Corn Starch"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Vegetable Oil"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/2",
                        "size": "Pound",
                        "ingredient": "Broccoli"
                    },
                    {
                        "amount": "1/2",
                        "size": "Pound",
                        "ingredient": "Asparagus"
                    }
                ]
            },
            {
                "amount": "1/2",
                "ingredient": "Carrots",
                "comment": [
                    "Thinly Sliced"
                ]
            }
        ],
        "steps": [
            "In a small bowl, combine the broth, soy sauce, and corn starch, stirring to dissolve.",
            "In a large, nonstick skillet over high heat, heat the oil. Sauté green vegetables until bright green (about 2 minutes). Add the broth mixture and carrots. Cook, stirring constantly until vegetables are tender and sauce is thickened (about 3 minutes)."
        ],
        "id": "D18SCC4L"
    },
    {
        "name": "Smashed Potatoes",
        "cat": "Greens",
        "ingredients": [
            {
                "amount": 2,
                "size": "Medium",
                "ingredient": "Potatoes"
            },
            {
                "ingredient": "Butter"
            },
            {
                "ingredient": "Half And Half"
            },
            {
                "ingredient": "Garlic Powder"
            },
            {
                "ingredient": "Dill"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            }
        ],
        "steps": [
            "Smash?"
        ],
        "id": "2710NS7P"
    },
    {
        "name": "Mashed Potaotes",
        "cat": "Greens",
        "ingredients": [
            {
                "amount": "4-5",
                "ingredient": "Potatoes",
                "comment": [
                    "Peeled and Diced into ½-inch Cubes",
                    "Idaho"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Butter"
            },
            {
                "amount": "3/2",
                "size": "Cup",
                "ingredient": "Heavy Cream"
            },
            {
                "amount": 2,
                "size": "Pinches",
                "ingredient": "Salt"
            },
            {
                "amount": 1,
                "size": "Pinch",
                "ingredient": "Black Pepper"
            }
        ],
        "steps": [
            "Boil potatoes until tender (about 15 minutes).",
            "Drain.",
            "Combine potatoes with butter, cream, salt and pepper in large bowl. Mix or mash to an even but not too fine cosistency. Bake in large oven-proof Casserole for about 15 minutes at 350 degrees until golden brown."
        ],
        "id": "578M7403"
    },
    {
        "name": "Roasted Potatoes, Carrots, Parsnips and Brussel Sprouts",
        "cat": "Greens",
        "time": 60,
        "ingredients": [
            {
                "amount": "1/3",
                "size": "Cup",
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "amount": 3,
                "size": "Medium",
                "ingredient": "Carrots",
                "comment": [
                    "Cut into 1½-inch Thick Circles",
                    "About 3/4 Pound"
                ]
            },
            {
                "amount": "3/2",
                "size": "Cups",
                "ingredient": "Brussels Sprouts",
                "comment": [
                    "Halved",
                    "About 1/2 Pound"
                ]
            },
            {
                "amount": 4,
                "size": "Cups",
                "ingredient": "Red Bliss Potatoes",
                "comment": [
                    "Cut into 1½-inch Thick Slices",
                    "About 1 Pound"
                ]
            },
            {
                "amount": 3,
                "size": "Medium",
                "ingredient": "Parsnips",
                "comment": [
                    "Cut into 1½-inch Thick Slices",
                    "About 1 Pound"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Sweet Potatoes",
                "comment": [
                    "Cut into 1½-inch Thick Slices",
                    "About 1 Pound"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Oregano",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Rosemary",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Thyme",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Basil",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": "1/4",
                "size": "Teaspoon",
                "ingredient": "Sea Salt"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly Ground"
                ]
            }
        ],
        "steps": [
            "Preheat oven to 400 degrees.",
            "Grease an 11 by 17-inch baking sheet pan with extra-virgin olive oil. Place vegetables in baking sheet and add the dried herbs, salt and pepper. Toss well, evenly coating all the vegetables with the seasonings and oil. Add more oil if the vegetables seem dry.",
            "Spread the vegetables evenly on a large baking sheet. Place on middle rack in oven and bake for 35 to 40 minutes."
        ],
        "id": "748W8GMY"
    },
    {
        "name": "Nobu's Chicken Stock",
        "cat": "Other",
        "time": 210,
        "ingredients": [
            {
                "amount": 3,
                "size": "Pound",
                "ingredient": "Chicken",
                "comment": [
                    "Back and Neck"
                ]
            },
            {
                "amount": 1,
                "size": "Medium",
                "ingredient": "Carrots",
                "comment": [
                    "Cut into ½-inch pieces"
                ]
            },
            {
                "amount": 1,
                "size": "Medium",
                "ingredient": "Onion",
                "comment": [
                    "Cut into ½-inch pieces"
                ]
            },
            {
                "amount": 1,
                "ingredient": "Garlic",
                "comment": [
                    "Bulb, Cut in half, Skin-on"
                ]
            },
            {
                "amount": 1,
                "size": "Piece",
                "ingredient": "Ginger",
                "comment": [
                    "2-inch",
                    "Cut into ¼-inch Pieces"
                ]
            },
            {
                "amount": 6,
                "size": "Cups",
                "ingredient": "Water"
            }
        ],
        "steps": [
            "Heat the oven to 425 degrees. Roast the back and neck in a shallow roasting pan until lightly browned, about 20 minutes. Lower the heat to 375 and add the remaining ingredients, except the water. Roast for another 35 to 40 minutes.",
            "Transfer the mixture to a small stockpot. Place the roasting pan on top of the stove over high heat. Add 1 cup of water. Bring to a boil, scraping vigorously to get the browned bits from the bottom of the pan. Pour this over the bones and vegetables. Add the remaining water. Bring to a boil. Lower the heat and simmer for 2 hours. Strain through a fine sieve."
        ],
        "id": "01A27Y4P"
    },
    {
        "name": "Basic Stovetop Rice",
        "cat": "Other",
        "time": 45,
        "ingredients": [
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Rice",
                "comment": [
                    "Long-grain Or Medium-grain",
                    "Like Basmati Or Jasmine; Short-grain, Like Sushi Rice; Or Brown Rice"
                ]
            }
        ],
        "steps": [
            "Pour rice into a bowl, and fill it with cold water. Swirl the grains, using your fingers. Tip out any starchy water, and repeat until water runs almost clear.",
            "Combine rice and water in a pot: For most long-grain and medium-grain rice, pair 1 cup rice and 1 1/3 cups water. For short-grain rice, use 1 cup rice and 1 cup water. For most brown rice, combine 1 cup rice and 1 3/4 cups water. The rice and water should not come more than halfway up the sides of your pot; the mixture will double in volume as it cooks.",
            "Bring water to a hard boil over medium-high heat. The water's entire surface should break with big, constant bubbles. As soon as water is boiling, give it a vigorous stir with a spatula or wooden spoon, making sure to scrape at any grains at the bottom of the pot. Cover it with a lid and turn the heat to low.",
            "Cook long-grain and medium-grain rice for 15 minutes; short-grain varieties for 20 minutes; and brown rice for 30 minutes.",
            "When allotted time has passed, or when you hear a change in sound – if you listen closely, you’ll notice the sounds will slowly change from a bubbly simmer to a steamy sort of flutter – turn off heat and let rice rest for about 10 to 15 minutes before serving.",
            "To cook in an oven, bring rice to a boil on the stovetop, stir, cover and put it in a 350-degree oven to cook through (about 17 minutes for most white rice). Rest it covered at room temperature, for 10 minutes.",
            "To cook in a multicooker, rinse rice and pressure cook on high (about 3 minutes for short-grain rice; 8 minutes for long-grain rice; 22 minutes for brown rice). Open cooker after it’s depressurized naturally, then loosely cover the pot with a dish towel and plate and let it rest for 10 minutes."
        ],
        "id": "36V54AVC"
    },
    {
        "name": "Stuffing",
        "cat": "Other",
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "3/2",
                        "size": "Cup",
                        "comment": [
                            "Sauted"
                        ],
                        "ingredient": "Onions"
                    },
                    {
                        "amount": "3/2",
                        "size": "Cup",
                        "comment": [
                            "Sauted"
                        ],
                        "ingredient": "Garlic"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Box",
                "ingredient": "Ritz Crackers",
                "comment": [
                    "Crushed, Fine",
                    "3 Packages"
                ]
            },
            {
                "amount": 2,
                "ingredient": "Eggs",
                "comment": [
                    "Beaten"
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Water",
                "comment": [
                    "Cold"
                ]
            },
            {
                "amount": "1/2",
                "size": "Cup",
                "ingredient": "Celery",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Carrots",
                "comment": [
                    "Grated"
                ]
            }
        ],
        "steps": [
            "Blend onions into crushed crackers.",
            "Add 2 beaten eggs and all other ingredients.",
            "Either put into turkey or bake in dish for 20 minutes."
        ],
        "id": "55014OW6"
    },
    {
        "name": "Baked Pork Chops",
        "cat": "Red Meat",
        "time": 20,
        "ingredients": [
            {
                "amount": 4,
                "ingredient": "Pork Chops",
                "comment": [
                    "Boneless",
                    "At least 1-inch thick"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Olive Oil"
            },
            {
                "amount": "1½",
                "size": "Tablespoons",
                "ingredient": "Brown Sugar"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Paprika",
                "comment": [
                    "Sweet or Smoked"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Onion Powder"
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Thyme",
                "comment": [
                    "Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Salt"
            },
            {
                "amount": "1/2",
                "size": "Teaspoon",
                "ingredient": "Black Pepper"
            }
        ],
        "steps": [
            "Preheat oven to 425° F. Line a rimmed baking sheet with parchment paper. (You can also bake pork chops in a baking dish, without parchment.)",
            "Pat pork chops dry with paper towels. Rub pork chops with the olive oil and place them on the prepared baking sheet.",
            "Combine the brown sugar, paprika, onion powder, dried thyme, salt and pepper in a small bowl. Stir to mix well.",
            "Rub the spice mixture over all sides of the pork chops.",
            "Bake pork chops in the preheated oven for 15 to 20 minutes for 1-inch thick boneless pork chops. The pork chops are done when the internal temperature measures 145° F on an instant read thermometer. (Thinner pork chops will cook faster, bone-in pork chops will take longer to cook. See notes.) Be careful not to overcook the pork chops or they may dry out.",
            "Let the pork chops rest for 5 minutes and then serve."
        ],
        "id": "15218PSU"
    },
    {
        "name": "Chicken and Barley Stew",
        "cat": "Stew",
        "time": 60,
        "ingredients": [
            {
                "amount": "1½",
                "size": "Pounds",
                "ingredient": "Chicken Thighs",
                "comment": [
                    "Boneless, Skinless"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Seasoning",
                "comment": [
                    "Italian, Dried"
                ]
            },
            {
                "amount": 1,
                "size": "Small",
                "ingredient": "Yellow Onion",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 3,
                "size": "Large",
                "ingredient": "Carrots",
                "comment": [
                    "Peeled and Diced"
                ]
            },
            {
                "amount": 3,
                "ingredient": "Celery Ribs",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": 3,
                "size": "Small",
                "ingredient": "Potatoes",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 8,
                "size": "Cups",
                "ingredient": "Chicken Broth"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "¼",
                        "size": "Cup",
                        "ingredient": "White Wine"
                    },
                    {
                        "amount": "¼",
                        "size": "Cup",
                        "ingredient": "White Wine Vinegar"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Cup",
                "ingredient": "Barley",
                "comment": [
                    "Raw"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Thyme",
                "comment": [
                    "Fresh, Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Rosemary",
                "comment": [
                    "Fresh, Minced"
                ]
            },
            {
                "amount": 1,
                "size": "Teaspoon",
                "ingredient": "Sage",
                "comment": [
                    "Fresh, Minced"
                ]
            },
            {
                "ingredient": "Parsley",
                "comment": [
                    "Fresh, Roughly chopped",
                    "For garnish"
                ]
            },
            {
                "amount": "Salt",
                "ingredient": "Black Pepper",
                "comment": [
                    "Ground"
                ]
            }
        ],
        "steps": [
            "Pat chicken thighs dry with a paper towel. Season both sides of each thigh liberally with salt, pepper, and Italian seasoning.",
            "Heat 1 tablespoon olive oil in a dutch oven or large stew pot over medium high heat. Add the chicken and cover the pot with a lid. Cook for 5-7 minutes until golden brown on bottom, remove lid and flip chicken thighs over. Cook for another 5-7 minutes, covered with lid, again until golden brown and cooked through (temperature reaches 165˚F). Remove to a bowl, shred with two forks, and set aside.",
            "Drain excess fat out of pan, and when back on heat, pour half of the wine into the pan. Deglaze the pan by scraping the browned bits off the bottom of the pan (keeping it in the pan!).",
            "If necessary, add another tablespoon of olive oil to the pan. Saute onion, carrot and celery in pan over medium high heat and until softened, about 7 minutes. Add garlic and sauté for 30 seconds to 1 minute, until fragrant.",
            "Deglaze the pan again with the rest of the white wine (or white wine vinegar), scraping up browned bits on the bottom of the pan.",
            "Add the chicken broth, potatoes, shredded chicken, barley, chicken broth, thyme, rosemary, and sage to the pot. Stir to combine and bring to a boil. Reduce to a simmer, cover with a lid, and cook for about 30 minutes, until chicken and potatoes are tender. Garnish with fresh parsley if desired."
        ],
        "id": "P2W5841Q"
    },
    {
        "name": "Ribollita  With Cabbage",
        "cat": "Soup",
        "time": 165,
        "ingredients": [
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 6,
                        "size": "Ounces",
                        "comment": [
                            "Soaked",
                            "If desired, soaked for 4 Hours, and then drained"
                        ],
                        "ingredient": "White Beans"
                    },
                    {
                        "amount": 6,
                        "size": "Ounces",
                        "comment": [
                            "Soaked",
                            "If desired, soaked for 4 Hours, and then drained"
                        ],
                        "ingredient": "Borlotti Beans"
                    }
                ]
            },
            {
                "amount": 1,
                "ingredient": "Onion",
                "comment": [
                    "Cut in half",
                    "1/2 Chopped, 1/2 left intact"
                ]
            },
            {
                "amount": 3,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Large",
                    "1 Crushed, the rest minced"
                ]
            },
            {
                "ingredient": "Salt",
                "comment": [
                    "To taste"
                ]
            },
            {
                "amount": 3,
                "size": "Tablespoons",
                "ingredient": "Extra-Virgin Olive Oil"
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Carrot",
                "comment": [
                    "Diced"
                ]
            },
            {
                "amount": 1,
                "size": "Pinch",
                "ingredient": "Red Chili Flakes"
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "1/4",
                        "comment": [
                            "Cored and shredded",
                            "2 cups shredded"
                        ],
                        "ingredient": "Savoy Cabbage"
                    },
                    {
                        "amount": "1/4",
                        "comment": [
                            "Cored and shredded",
                            "2 cups shredded"
                        ],
                        "ingredient": "Green Cabbage"
                    }
                ]
            },
            {
                "amount": 1,
                "size": "Can",
                "ingredient": "Tomato",
                "comment": [
                    "14-ounce",
                    "Chopped or pureed tomatoes, with juice"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": "3/4",
                        "size": "Pound",
                        "comment": [
                            "Stemmed, cleaned, and chopped",
                            "Or, cut in chiffonade, 3 cups chopped greens"
                        ],
                        "ingredient": "Swiss Chard"
                    },
                    {
                        "amount": "3/4",
                        "size": "Pound",
                        "comment": [
                            "Stemmed, cleaned, and chopped",
                            "Or, cut in chiffonade, 3 cups chopped greens"
                        ],
                        "ingredient": "Kale"
                    }
                ]
            },
            {
                "amount": 1,
                "ingredient": "Bouquet Garni",
                "comment": [
                    "Made with: a bay leaf, a few sprigs each thyme and parsley, and a Parmesan rind"
                ]
            },
            {
                "amount": 6,
                "size": "Slices",
                "ingredient": "Bread",
                "comment": [
                    "Thick, Country",
                    "Preferably whole-grain, about 6 ounces"
                ]
            }
        ],
        "steps": [
            "Place the beans in a medium saucepan, and add 4 cups water, the unchopped onion half and the crushed garlic clove. Bring to a boil. Reduce the heat, add salt to taste, cover and simmer 1 hour. Remove the onion halves. Taste and adjust seasonings.",
            "Heat 2 tablespoons of the oil in a heavy soup pot, and add the chopped onion, carrots and celery. Cook, stirring often, until the onion is tender, about five minutes. Add the garlic and chili flakes, and stir together for 30 seconds to a minute until fragrant. Add the cabbage. Cook, stirring, until the cabbage wilts, three to five minutes. Add the tomatoes. Cook, stirring, until the tomatoes cook down and smell fragrant, five to 10 minutes. Season to taste with salt.",
            "Stir in the beans and their liquid, add the bouquet garni and another 2 cups of water, and bring to a boil. Reduce the heat, cover and simmer 30 minutes or until the beans are tender. Taste and adjust seasonings. Add the greens, raise the heat and simmer covered for another 15 minutes. The greens should be falling apart in the soup. Remove the bouquet garni.",
            "Meanwhile, preheat the oven to 300 degrees. Place the bread on the rack, and toast until dry but not browned, about 15 to 20 minutes. Break up into pieces. Remove about 1 cup of the beans and vegetables from the soup. Bring the remaining soup to a simmer, and add the bread. Submerge in the soup, and remove the soup from the heat. Let stand for 20 minutes until the bread is soft. Blend, using a hand immersion blender or the pulse action of a food processor. Return to the pot, add the beans and vegetables you set aside, and heat through. The ribollita should have the consistency of oatmeal. Dilute with water as necessary. Taste and adjust salt and pepper. Spoon the ribollita into bowls or onto soup plates, drizzle olive oil over each bowl and serve."
        ],
        "id": "JO7PGGFW"
    },
    {
        "name": "Perfect Instant Ramen",
        "cat": "Soup",
        "time": 10,
        "ingredients": [
            {
                "amount": 1,
                "size": "Pack",
                "ingredient": "Ramen Noodles",
                "comment": [
                    "With flavor packet"
                ]
            },
            {
                "amount": 1,
                "size": "Large",
                "ingredient": "Egg"
            },
            {
                "amount": "½",
                "size": "Teaspoon",
                "ingredient": "Butter"
            },
            {
                "amount": 2,
                "size": "Slices",
                "ingredient": "American Cheese"
            },
            {
                "amount": "¼",
                "size": "Teaspoon",
                "ingredient": "Sesame Seeds",
                "comment": [
                    "Toasted"
                ]
            },
            {
                "amount": "½",
                "ingredient": "Scallion",
                "comment": [
                    "Green part only, thinly sliced on the bias",
                    "Optional"
                ]
            }
        ],
        "steps": [
            "Bring 2½ cups of water to a boil in a small saucepan. Add the noodles and cook for 2 minutes. Add the flavor packet, stir, and continue to cook for another 30 seconds.",
            "Remove the pan from the heat and carefully add the egg. Do not stir; pull the noodles over the egg and let sit for one minute to poach.",
            "Carefully transfer everything to a serving bowl, add the butter, cheese and sesame seeds and mix. Garnish with the scallions if desired."
        ],
        "id": "6D482KG1"
    },
    {
        "name": "San Francisco-Style Vietnamese American Garlic Noodles",
        "cat": "Noodles",
        "time": 15,
        "ingredients": [
            {
                "amount": 4,
                "size": "Tablespoons",
                "ingredient": "Butter",
                "comment": [
                    "Unsalted"
                ]
            },
            {
                "amount": 20,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Medium",
                    "Minced or smashed in a mortar and pestle"
                ]
            },
            {
                "amount": 4,
                "size": "Teaspoons",
                "ingredient": "Oyster Sauce"
            },
            {
                "amount": 2,
                "size": "Teaspoons",
                "ingredient": "Fish Sauce"
            },
            {
                "amount": 1,
                "size": "Pound",
                "ingredient": "Spaghetti",
                "comment": [
                    "Dry"
                ]
            },
            {
                "type": "alternatives",
                "ingredients": [
                    {
                        "amount": 1,
                        "size": "Ounce",
                        "comment": [
                            "Grated",
                            "Heaping 1/4 Cup"
                        ],
                        "ingredient": "Parmesan"
                    },
                    {
                        "amount": 1,
                        "size": "Ounce",
                        "comment": [
                            "Grated",
                            "Heaping 1/4 Cup"
                        ],
                        "ingredient": "Pecorino"
                    }
                ]
            },
            {
                "ingredient": "Scallions",
                "comment": [
                    "Small handful, thinly sliced scallions"
                ]
            }
        ],
        "steps": [
            "Melt the butter in a wok or saucepan over medium heat. Add the garlic and cook, stirring, until fragrant but not browned, about 2 minutes. Add the oyster sauce, soy sauce and fish sauce, and stir to combine. Remove from the heat.",
            "Meanwhile, bring 1½ inches of water to a boil in a 12-inch skillet or sauté pan over high heat. (Alternatively, heat up just enough water to cover the spaghetti in a large Dutch oven or saucepan.) Add the pasta, stir a few times to make sure it’s not clumping, and cook, stirring occasionally, until just shy of al dente (about 2 minutes short of the recommended cook time on the package).",
            "Using tongs, transfer the cooked pasta to the garlic sauce, along with whatever water clings to it. (Reserve the pasta water in the skillet.) Increase the heat to high, add the cheese to the wok, and stir with a wooden spatula or spoon and toss vigorously until the sauce is creamy and emulsified, about 30 seconds. If the sauce looks too watery, let it keep reducing. If it looks greasy, splash some more cooking water into it and let it re-emulsify. Stir in the scallions (if using), and serve immediately."
        ],
        "id": "M9ZP5L7U"
    },
    {
        "name": "Pork Chops",
        "cat": "Red Meat",
        "time": 30,
        "ingredients": [
            {
                "amount": 4,
                "ingredient": "Pork Loin Chops"
            },
            {
                "ingredient": "Kosher Salt"
            },
            {
                "ingredient": "Black Pepper",
                "comment": [
                    "Freshly Ground"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Rosemary",
                "comment": [
                    "Freshly minced"
                ]
            },
            {
                "amount": 2,
                "size": "Cloves",
                "ingredient": "Garlic",
                "comment": [
                    "Minced"
                ]
            },
            {
                "amount": "½",
                "size": "Cup",
                "ingredient": "Butter",
                "comment": [
                    "Melted",
                    "1 stick"
                ]
            },
            {
                "amount": 1,
                "size": "Tablespoon",
                "ingredient": "Extra-Virgin Olive Oil"
            }
        ],
        "steps": [
            "Preheat oven to 375°. Season pork chops generously with salt and pepper.",
            "In a small bowl mix together butter, rosemary, and garlic. Set aside.",
            "In an oven safe skillet over medium-high heat, heat olive oil then add pork chops. Sear until golden, 4 minutes, flip and cook 4 minutes more. Brush pork chops generously with garlic butter.",
            "Place skillet in oven and cook until cooked through (145° for medium), 10-12 minutes. Serve with more garlic butter."
        ],
        "id": "69INFL38"
    },
    {
        "name": "Brown Sugar Garlic Pork Chops",
        "cat": "Pork",
        "ingredients": [
            {
                "amount": "5",
                "size": "Thick-cut",
                "ingredient": "Pork Chops"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            },
            {
                "amount": "1",
                "size": "tbs",
                "ingredient": "extra-virgin olive oil"
            },
            {
                "amount": "4",
                "size": "tbs",
                "ingredient": "butter"
            },
            {
                "amount": "1/4",
                "size": "cup",
                "ingredient": "Packed Light Brown Sugar"
            },
            {
                "amount": "3",
                "ingredient": "Minced Garlic Cloves"
            },
            {
                "amount": "1/2",
                "size": "tsp",
                "ingredient": "Crushed Red Pepper Flakes"
            },
            {
                "amount": "1/2",
                "size": "tsp ",
                "ingredient": "Paprika"
            },
            {
                "amount": "1/4",
                "size": "tsp",
                "ingredient": "Dried Thyme"
            }
        ],
        "steps": [
            "Note: Boneless pork chops can be used. They will cook a little faster.",
            "Preheat oven to 400 degrees. Pat pork chops dry with paper towels and season both sides with salt and pepper.",
            "Heat oil over medium-high heat in an oven-proof skillet. (Cast iron or stainless steel)",
            "When oil is hot, add pork chops. Cook for 5 minutes, flip over, and cook for 4 minutes. Remove from skillet and cover to keep warm.",
            "Turn heat down to medium-low and add butter.",
            "When butter is melted, add brown sugar, garlic, red pepper flakes, paprika, and thyme.",
            "Cook for 1 minute.",
            "Return pork chops to skillet and spoon butter mixture over them.",
            "Bake for 10-14 minutes or until pork chops reach an internal temperature of 145 degrees. You can pull it out of the oven when it is a few degrees below 145. The temperature will rise a few degrees.",
            "Plate pork chops and spoon sauce over them."
        ],
        "id": "57BBEF1A"
    }
]


