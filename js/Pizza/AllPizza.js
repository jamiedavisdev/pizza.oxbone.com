/////////////////////////////////////////////////////////////////////////////////
//
// Pizza
// Jamie Davis
// 2021
//
/////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
// Kitchen Data (hard-coded but soon read from JSON and created/modified via importer and editor)
//////////////////////////////////////////////////////////////////////////////////////////////////
var KitchenData = {

    Rules: { 
        MAX_TOPPINGS_PER_PIZZA: 10,
        MAX_CHEESES_PER_PIZZA: 1,
        RADIUS_OF_TOPPINGS_WITHIN_CRUST: 0.4,       // TODO: get this from Anthony/art specs
    },

    RarityLevels: [
        {name: "Common", chance: 1},
        {name: "Less Common", chance: 0.5}, 
        {name: "Rare", chance: 0.25},    
        {name: "Very Rare", chance: 0.125}, 
        {name: "Super Rare", chance: 0.06125},                  
    ],
    
    //["Common", "R2", "Rare", "Super Rare", "Extremely"],

    // Brittle: the name field here must match exactly to the runtime scatterTable data.
    // at pizza make time the chosen scatter here is used to look into that table for the correct scatter method.
    ScatterMethods: [
        {name: "Random", rarityLevel: 0},
        {name: "Spiral", rarityLevel: 3},
        {name: "Smiley", rarityLevel: 4},  
        {name: "Spokes", rarityLevel: 2},     
        {name: "Concentric Circles", rarityLevel: 1},                
    ],

    // TODO: refactor these so that boxes crusts, sauces, cheeses contains variant objects, each with different rarities.
    Boxes: [
        // Variant
        {
            name: "Box with waxpaper",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/0500-base-box-redcheckerpaper.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [0,0]
        },
        {
            name: "Box without waxpaper",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/0000-base-box-cardboard.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [0,0]
        }
    ],

    WaxPapers: [

    ],

    Crusts: [
        {
            name: "Thick",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/1100-base-crust-thick.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Thin",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/1000-base-crust-thin.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },  
    ],


    Sauces: [ 
        {
            name: "Tomato",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/rarepizzas-120-sauce-r0-tomato-v0.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159] 
        }, 
        {
            name: "BBQ",
            rarityLevel: 1,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/rarepizzas-2-sauce-r2-bbq-v0.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159] 
        }, 
        {
            name: "Mayo Squirt",
            rarityLevel: 2,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/rarepizzas-130-squirt-r0-mayosquirt-v0.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159] 
        },          
        {
            name: "Pesto",
            rarityLevel: 2,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/2100-base-sauce-pesto.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Pixel Pesto",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/2110-base-sauce-pixelpesto.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },        
        {
            name: "Deep Space",
            rarityLevel: 4,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/2900-base-sauce-deepspace.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },
    ],

    Cheeses: [
        {
            name: "Mozzarella",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/3000-base-cheese-mozzarella.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Vegan",
            rarityLevel: 2,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/3100-base-cheese-vegan.png"],
            sizeMinMax: [1.0, 1.0],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },                                    
    ],

    Toppings: [
        {
            name: "Pepperoni",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/4000-topping-meat-pepperoni.png"],
            sizeMinMax: [0.1, 0.15],
            countMinMax: [50,100],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Salami",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/4650-topping-meat-salami.png"],
            sizeMinMax: [0.1, 0.15],
            countMinMax: [50,100],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Special Salami",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/4660-topping-meat-salami.png"],
            sizeMinMax: [0.1, 0.15],
            countMinMax: [50,100],
            rotationMinMax: [-3.14159,3.14159]
        },         
        {
            name: "Turkey Sausage",
            rarityLevel: 1,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/4950-topping-meat-turkeysausage.png"],
            sizeMinMax: [0.03, 0.08],
            countMinMax: [5,12],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Tomato",
            rarityLevel: 0,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/5000-topping-fruit-tomato.png"],
            sizeMinMax: [0.1, 0.15],
            countMinMax: [50,100],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Watermelon",
            rarityLevel: 4,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/5250-topping-fruit-watermelon.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [5,10],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Special Watermelon",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/5260-topping-fruit-watermelon.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [5,10],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Watermelon",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/5270-topping-fruit-watermelon.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [5,10],
            rotationMinMax: [-3.14159,3.14159]
        }, 
        {
            name: "Watermelon",
            rarityLevel: 2,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/5280-topping-fruit-watermelon.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [5,10],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Crickets",
            rarityLevel: 4,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6100-topping-bugs-crickets.png"],
            sizeMinMax: [0.03, 0.08],
            countMinMax: [6,12],
            rotationMinMax: [-3.14159,3.14159]
        },                         
        {
            name: "Astronaut",
            rarityLevel: 4,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6500-toppings-space-astronaut.png"],
            sizeMinMax: [0.05, 0.15],
            countMinMax: [1,2],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Lunar Landing",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6510-toppings-space-lunarlander.png"],
            sizeMinMax: [0.05, 0.15],
            countMinMax: [1,1],
            rotationMinMax: [-3.14159,3.14159]
        },      
        {
            name: "Snap Rocks",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6800-topping-candy-snaprocks.png"],
            sizeMinMax: [0.05, 0.09],
            countMinMax: [1,3],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Snap Rocks",
            rarityLevel: 4,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6801-topping-candy-snaprocks.png"],
            sizeMinMax: [0.05, 0.09],
            countMinMax: [1,3],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Snap Rocks",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6802-topping-candy-snaprocks.png"],
            sizeMinMax: [0.05, 0.09],
            countMinMax: [1,3],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Snap Rocks",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6803-topping-candy-snaprocks.png"],
            sizeMinMax: [0.05, 0.09],
            countMinMax: [1,3],
            rotationMinMax: [-3.14159,3.14159]
        },
        {
            name: "Shrimp",
            rarityLevel: 1,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6000-topping-seafood-shrimp.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [5,10],
            rotationMinMax: [-0.5, 0.5]
        },  
        {
            name: "Pop Logo",
            rarityLevel: 1,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/8100-extra-special-poplogo.png"],
            sizeMinMax: [0.1, 0.2],
            countMinMax: [1,2],
            rotationMinMax: [-0.3,0.3]
        },   
        {
            name: "Pop Logo",
            rarityLevel: 2,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/8101-extra-special-poplogo.png"],
            sizeMinMax: [0.1, 0.2],
            countMinMax: [1,2],
            rotationMinMax: [-0.3,0.3]
        },   
        {
            name: "Worm",
            rarityLevel: 3,
            imageUrls: ["http://www.oxbone.com/Pizza/Images/Ingredients/6150-topping-bugs-worms.png"],
            sizeMinMax: [0.05, 0.1],
            countMinMax: [3, 6],
            rotationMinMax: [-3.14159,3.14159]
        }, 
    ],

}


// Function to choose X objects from an array of objects, each with a rarityLevel field.
// return a list of the indices into the input array.
function choose(arr, count, RarityLevels) {
    var choices = [];

    // first, bucketize all the possibilities and calculate the bucket probability.
    // each bucket R0-R4 have a base probability. We will start with 1 / 2^n where n is 0...4.
    // THOUGH we may want to change to 1/3^n). 
    // but the base probability needs to be adjusted by the num of elements in that bucket 
    // divided by the number of elements in R0.
    // For ex.if there is 2 elems in R0 and 1 in R1, then there is equal probability that
    // an item in R0 or R1 is chosen. That's not what we want. What we want is for an element
    // in R1 to have 1/2 the probability of an element in R0. So we multiply the base bucket 
    //probability by the count in the bucket divided by the count in R0.

    // first, bucketize
    // TODO: is it necessary to ensure the buckets are in decreasing probability?
    //  
    var buckets = [];
    var totalProbability = 0.0;
    for (var i = 0; i < RarityLevels.length; i++) {
        var bucket = {};      
        bucket.items = [];   // maybe a list is better since we will be removing items from it while we choose.
        bucket.probability = RarityLevels[i].probability; // this will be adjusted once all buckets are filled.
        totalProbability += bucket.probability;
        buckets.push(bucket);
    }

    // normalize probabilities so they add to 1.0
    for (var i = 0; i < buckets.length; i++) {
        buckets[i].probability = buckets[i].probability / totalProbability;
    }    

    // now bucketize!
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var rarityLevel = 0;
        //sanity check
        if (item.rarityLevel == undefined)
            console.log(item.name + " needs a rarity level! Assume its R0.");
        else
            rarityLevel = item.rarityLevel;
        if (rarityLevel < 0 )
        {
            console.log(item.name + " rarity level < 0! Assume its R0.");
            rarityLevel = 0;           
        }
        else
        if (rarityLevel >= buckets.length)
        {
            console.log(item.name + " rarity level > max level! Assume its max.");
            rarityLevel = buckets.length - 1;           
        }

        // add to bucket
        buckets[rarityLevel].items.push(item);
    }

    // now all items are bucketized, so we need to go back and adjust the bucket probabilities
    // to account for the counts in each relative to first bucket
    var countInBucket0 = buckets[0].items.length;
    var probablityOfBucket0 = buckets[0].probability;
    for (var i = 1; i < buckets.length; i++) {
        var countInBucket = buckets[i].items.length;
        if (countInBucket > 0)
        {
            buckets[i].probability = buckets[i].probability * probablityOfBucket0 * (countInBucket / countInBucket0);
            buckets[i].probabilityOfItemInBucket = buckets[i].probability / countInBucket;
        }
        else
            buckets[i].probability = 0.0;
    }   


    // whew!! we are done building our data structure for choosing items.
    // I guess we should actually choose them then!
    for (var i = 0; i < count; i++) {
        var rollTheDice = randomRangeFloat(rand, 0.0, 1.0);

        // find which bucket this resides in....

        // TODO: we might want to save off the probablity of this item 
        // for description, etc.

    }

}

//////////////////////////////////////
// The Rand function
//////////////////////////////////////
// TODO: a better rand func?
// it needs to be cross platform, cross-language, etc.
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// hash function
function hash(str) {
    var hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  

//////////////////////////////////
// Utils
//////////////////////////////////
function randomRange(rand, min, max) 
{
    return Math.round(((rand() * (max - min)) + min));
}

function randomRangeFloat(rand, min, max) 
{
    return ((rand() * (max - min)) + min);
}

var PI = 3.14159;
var TWO_PI = 2.0 * PI;
function randomPointOnDisk(rand, centerX, centerY, radius)
{
    var theta = TWO_PI * rand();
    var r = Math.sqrt(rand());
    var x = centerX + r * radius * Math.cos(theta);
    var y = centerY + r * radius * Math.sin(theta);
    return [x,y];
}


/////////////////////////////////////////////////////////////////
// Scatters
/////////////////////////////////////////////////////////////////

// Scatter methods table
// could make a ScatterFactory, and each scatter a derived Scatter class, then
// keep track if it all that way. Better design. TODO for later.
var scatterTable = {
    "Random": randomScatter,
    "Spiral": spiralScatter,   
    "Smiley": smileyScatter,
    "Spokes": spokesScatter,    
    "Concentric Circles": concentricCirclesScatter  
};

function randomScatter(rand, count, renderObjList, KitchenData) {
    var ret = [];
    for (var i = 0; i < count; i++)
    {
        // subtract scale radius from the crust radius so the topping will fit inside (somewhat, it could still be rotate further out, but okay)
        ret.push(randomPointOnDisk(rand, 0.0, 0.0, KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[i].scale / 2.0));
    }
    return ret;
}

function spiralScatter(rand, count, renderObjList, KitchenData) {
    // 
    // r=a + b * angle
    // 
    // choose a rate that angle moves and rate that radius increases
    // TODO: these should be part of scatter method data??
    var angleVel = randomRangeFloat(rand, -3.0, 3.0) * PI / count;
    var maxRadius = KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[0].scale / 2.0;       // max radius will be outer edge of crust minus scale of first element. not exactly correct, but close enough. we will adjust the actual instance in further if necessary.
    var rVel = randomRangeFloat(rand, 1, 2) * maxRadius / count
    var currAngle = randomRangeFloat(rand, 0, TWO_PI);
    var currR = 0;
    var ret = [];
    for (var i = 0; i < count; i++)
    {
        currR = Math.min(currR, KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[i].scale / 2.0);

        // rotate currR thru currAngle. that is position
        var x = currR * Math.cos(currAngle);
        var y = currR * Math.sin(currAngle);

        // accum
        currAngle += angleVel;
        currR += rVel;

        ret.push([x,y]);
    }
    return ret;
}



function smileyScatter(rand, count, renderObjList, KitchenData) {
    var ret = [];
    
    var used = 0;

    // place left eye
    if (used < count)
    {
        var len = (KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[used].scale / 2.0) / 1.5;
        var angle = -3 * PI / 4;

        var x = len * Math.cos(angle);
        var y = len * Math.sin(angle);

        ret.push([x,y]);
        used++;
    }

    // place right eye
    if (used < count)
    {
        var len = (KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[used].scale / 2.0) / 1.5;
        var angle = -PI / 4;

        var x = len * Math.cos(angle);
        var y = len * Math.sin(angle);

        ret.push([x,y]);
        used++;
    }

    // place smile
    var startX = -.25;

    var numSteps = count - used;
    for (var i = 0; i < numSteps; i++)
    {
        var x = startX + i * (0.5 / numSteps);
        var y = 0.25;
        ret.push([x,y]);
    }

    return ret;
}

function spokesScatter(rand, count, renderObjList, KitchenData) {
    var ret = [];

    // calculate number of spokes
    // calculate number of points per spoke
    const MIN_POINTS_PER_SPOKE = 2;
    const MAX_POINTS_PER_SPOKE = 6;
    var maxPerSpoke = randomRange(rand, MIN_POINTS_PER_SPOKE, MAX_POINTS_PER_SPOKE);
    var numSpokes = 2;
    var numPointsPerSpoke = Math.floor(count / numSpokes);
    while (numPointsPerSpoke > maxPerSpoke)
    {
        numSpokes++;
        numPointsPerSpoke = Math.floor(count / numSpokes);
    }

    // now calculate the excess (how many more we have than we will scatter on the spokes)
    var extra = count - (numSpokes * numPointsPerSpoke);


    var iCount = 0;
    // HACK: for now put extras in the middle, but later may want to randomize it
    for  (var iExtra = 0; iExtra < extra; iExtra++)
    {
        ret.push([0,0]);
        iCount++;
    }

    // if count > 0
    if (numSpokes * numPointsPerSpoke > extra)
    { 
        // for each point on a spoke
        var maxRadius = KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[0].scale / 2.0;       // max radius will be outer edge of crust minus scale of first element. not exactly correct, but close enough. we will adjust the actual instance in further if necessary.
  
        var rInc = maxRadius / numPointsPerSpoke;
        var angInc = TWO_PI / numSpokes;
        var angStart = randomRange(rand, 0, PI);
        for (var iPoint = 0; iPoint < numPointsPerSpoke; iPoint++)
        {
            var len = (iPoint + 1) * rInc;

            // adjust len so obj fits inside the play area
            len = Math.min(len, KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[iCount].scale / 2.0);

            // for each spoke
            for (var iSpoke = 0; iSpoke < numSpokes; iSpoke++)
            {
                // choose angle
               var angle = angStart + iSpoke * angInc;

                // calculate point
                var x = len * Math.cos(angle);
                var y = len * Math.sin(angle);
                ret.push([x,y]);
                iCount++;         
            }
        }   

    }
    return ret;

}

function concentricCirclesScatter(rand, count, renderObjList, KitchenData) {
    var ret = [];

    // calculate number of circles
    // calculate number of points per circle
    const MIN_POINTS_PER_CIRCLE = 3;
    const MAX_POINTS_PER_CIRCLE = 6;
    var maxPerCircle = randomRange(rand, MIN_POINTS_PER_CIRCLE, MAX_POINTS_PER_CIRCLE);
    var numCircles = 2;
    var numPointsPerCircle = Math.floor(count / numCircles);
    while (numPointsPerCircle > maxPerCircle)
    {
        numCircles++;
        numPointsPerCircle = Math.floor(count / numCircles);
    }

    // now calculate the excess (how many more we have than we will scatter on the circles)
    var extra = count - (numCircles * numPointsPerCircle);


    var iCount = 0;
    // HACK: for now put extras in the middle, but later may want to randomize it
    for  (var iExtra = 0; iExtra < extra; iExtra++)
    {
        ret.push([0,0]);
        iCount++;
    }

    // if count > 0
    if (numCircles * numPointsPerCircle > extra)
    { 
        // for each circle
        var maxRadius = KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[0].scale / 2.0;       // max radius will be outer edge of crust minus scale of first element. not exactly correct, but close enough. we will adjust the actual instance in further if necessary.

        var rInc = maxRadius / numCircles;
        var angInc = TWO_PI / numPointsPerCircle;
        var angStart = randomRange(rand, 0, PI);
        for (var iCircle = 0; iCircle < numCircles; iCircle++)
        {
            var len = (iCircle + 1) * rInc;
            angStart += iCircle * angInc / numCircles;  // stagger the concentric circles a little, otherwise would look like spokess
            // adjust len so obj fits inside the play area
            len = Math.min(len, KitchenData.Rules.RADIUS_OF_TOPPINGS_WITHIN_CRUST - renderObjList[iCount].scale / 2.0);
        
            // for each point on a circle
            for (var iPoint = 0; iPoint < numPointsPerCircle; iPoint++)
            {
                // choose angle
               var angle = angStart + iPoint * angInc;

                // calculate point
                var x = len * Math.cos(angle);
                var y = len * Math.sin(angle);
                ret.push([x,y]);
                iCount++;         
            }
        }   

    }
    return ret;

}


function chooseScatterBasedOnRarity(rand, KitchenData) {
    // HACK for now just return random!
    // TODO: bucketize it, roll dice, choose from scatters in the chosen bucket
    return randomRange(rand, 0, KitchenData.ScatterMethods.length - 1);
}


//////////////////////////////////////////////////
// Display List
//////////////////////////////////////////////////
const DL_VERSION = 1;
function generateDisplayList(pizza, KitchenData) {
    // this will output a normalized display list
    // it may include a texture dictionary as well

    var displayBundle = {};
    var textureToIndexMap = new Map();
    displayBundle.textureList = [];
    displayBundle.displayList = [];
    displayBundle.version = DL_VERSION;

    // now generate renderables and push onto list
    var renderObj = {};

    // box
    renderObj = {};
    var box = KitchenData.Boxes[pizza.boxIndex];
    renderObj = createAndAppendRenderObjFromVariant(pizza.rand, box, displayBundle, textureToIndexMap);   
    displayBundle.displayList.push(renderObj);

    // crust
    renderObj = {};
    var crust = KitchenData.Crusts[pizza.crustIndex];
    renderObj = createAndAppendRenderObjFromVariant(pizza.rand, crust, displayBundle, textureToIndexMap);   
    displayBundle.displayList.push(renderObj);

    // sauce
    for (var i = 0; i < pizza.sauceIndices.length; i++)
    {
        renderObj = {};
        var sauceIndex = pizza.sauceIndices[i];     
        var sauce = KitchenData.Sauces[sauceIndex];
        renderObj = createAndAppendRenderObjFromVariant(pizza.rand, sauce, displayBundle, textureToIndexMap); 
        displayBundle.displayList.push(renderObj);
    }  
    
    // cheese
    for (var i = 0; i < pizza.cheeseIndices.length; i++)
    {  
        renderObj = {};
        var cheeseIndex = pizza.cheeseIndices[i];
        var cheese = KitchenData.Cheeses[cheeseIndex];
        renderObj = createAndAppendRenderObjFromVariant(pizza.rand, cheese, displayBundle, textureToIndexMap); 
        displayBundle.displayList.push(renderObj);
    }  

    // Toppings
    for (var i = 0; i < pizza.toppingIndices.length; i++)
    {
        var toppingIndex = pizza.toppingIndices[i];
        var topping = KitchenData.Toppings[toppingIndex];

        // TODO: later the count might be embedded in the dna, so it will be calculated in the make() function
        var toppingCount = randomRange(pizza.rand, topping.countMinMax[0], topping.countMinMax[1]);

        // scatter
        // we might a scatter min/max queries so we know if a particular scatter will work with the number of coords we chose, 
        // and if not adjust them or choose another scatter. all that should probably be done in the make function
        // TODO: get this from pizza dna for this topping, or for now randomly choose it? 
        // TODO: should be based on rarity of scatter
        var scatterIndex = chooseScatterBasedOnRarity(pizza.rand, KitchenData); 
        var scatter = scatterTable[KitchenData.ScatterMethods[scatterIndex].name];

        var toppingRenderObjs = [];
        for (var iCount = 0; iCount < toppingCount; iCount++)
        {
            renderObj = createAndAppendRenderObjFromVariant(pizza.rand, topping, displayBundle, textureToIndexMap, scatter);  
            toppingRenderObjs.push(renderObj); 
        }

        // now call scatter to get positions, then append them
        var positions = scatter(pizza.rand, toppingCount, toppingRenderObjs, KitchenData);
        // TODO: assert positions.length == toppingCount
        for (var iCount = 0; iCount < toppingCount; iCount++)
        {
            renderObj = toppingRenderObjs[iCount];
            renderObj.center = positions[iCount];
            displayBundle.displayList.push(renderObj);
        }
    }

    return displayBundle;

}

function createAndAppendRenderObjFromVariant(rand, variant, displayBundle, textureToIndexMap) {
    var renderObj = {};
    var imageIndex = randomRange(rand, 0, variant.imageUrls.length - 1);  

    // see if texture name is already in list
    var textureListIndex;
    if (textureToIndexMap.has(variant.imageUrls[imageIndex]) == true)
    {
        textureListIndex = textureToIndexMap.get(variant.imageUrls[imageIndex]);
    }
    else{
        // add to list and map
        textureListIndex = displayBundle.textureList.length;
        displayBundle.textureList.push(variant.imageUrls[imageIndex]);
        textureToIndexMap.set(variant.imageUrls[imageIndex], textureListIndex);
    }
    renderObj.textureIndex = textureListIndex;

    // set scale
    renderObj.scale = randomRangeFloat(rand, variant.sizeMinMax[0], variant.sizeMinMax[1]);
    // set rotation
    if (variant.rotationMinMax == undefined)
        renderObj.rotation = 0;
    else
        renderObj.rotation = randomRangeFloat(rand, variant.rotationMinMax[0], variant.rotationMinMax[1]);  

    renderObj.center = [0.0, 0.0];        

    return renderObj;
}


///////////////////////////
// char encoding
//  TODO: make this a class
///////////////////////////

const encodingString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-.";
var charToNumMap = new Map();
for (var i = 0; i < encodingString.length; i++)
  charToNumMap.set(encodingString[i], i);

function isInEncodingSet(c) {
    if (charToNumMap.has(c) == true)
        return true;
    else
        return false;
}

function encodeNumToChar(num) {
    if (num < 0 || num >= encodingString.length)
    {
        console.log("ERROR! out of range.");
        return 0;
    }
    return encodingString[num];
}

function decodeCharToNum(c) {
    return charToNumMap.get(c);
}


/////////////////////////////////////////
// Encoder class
/////////////////////////////////////////
function Encoder(str) {
    this.encodingString = str;
    this.MAX_NUM = this.encodingString.length;  // max number that can be encoded 
    this.charToNumMap = new Map();
    for (var i = 0; i < this.encodingString.length; i++)
        this.charToNumMap.set(this.encodingString[i], i);

    // calc max bits stored in each char
    this.MAX_BITS = 0;
    var x = this.MAX_NUM;
    while (x > 0)
    {
        this.MAX_BITS++;  
        x = Math.floor(x / 2);
    }
}

Encoder.prototype.contains = function(chr) {
    return this.charToNumMap.has(chr);
}

Encoder.prototype.encodeNumber = function(num) {
    if (num < 0 || num >= this.encodingString.length)
    {
        console.log("ERROR! out of range.");
        return 0;
    }
    return this.encodingString[num];
}

Encoder.prototype.decodeChar = function(chr) {
    return this.charToNumMap.get(chr);
}


////////////////////
// Bitfield
////////////////////

function Bitfield(str) {
    this.encodedString = str;
    this.BITS_PER_CHAR = 6;
}

Bitfield.prototype.growBy = function(len) {
    this.encodedString = this.encodedString.padEnd(30, "0");
}

Bitfield.prototype.getString = function(len) {
    return this.encodedString;
}



Bitfield.prototype.setCharAt = function(str,index,chr) {
    if(index > str.length-1) 
    {
        return str;
    }
    return str.substring(0,index) + chr + str.substring(index+1);
}

// 0 <= bitIndex <= BITS_PER_CHAR - 1
Bitfield.prototype.getBit = function(bitIndex) 
{
    // check if within range
    var charIndex = Math.floor(bitIndex / this.BITS_PER_CHAR);
    if (charIndex >= str.length)
    {
        console.log("bit out of range.");
        return -1;
    }

    var decoded = decodeCharToNum(this.encodedString[charIndex]);
    return (decoded & (1 << bitIndex));

}


Bitfield.prototype.setBit = function(bitIndex, val) 
{
    // check if within range
    var charIndex = Math.floor(bitIndex / this.BITS_PER_CHAR);
    if (charIndex >= this.encodedString.length)
    {
        console.log("bit out of range.");
        return -1;
    }

    var localBitIndex = bitIndex % this.BITS_PER_CHAR;
    var decoded = decodeCharToNum(this.encodedString[charIndex]);
    var newNum = (decoded & ~(1 << localBitIndex)) | (val << localBitIndex);
    var newChar = encodeNumToChar(newNum);
    this.encodedString = this.setCharAt(this.encodedString,charIndex,newChar);
}

Bitfield.prototype.DEBUG_printOnBits = function() 
{
    console.log("print on bits for: " + this.encodedString);
    // for each char in the encoded string..
    for (var iChar = 0; iChar < this.encodedString.length; iChar++)
    {
        var c = this.encodedString[iChar];
        var num = decodeCharToNum(c);

        var localBitIndex = 0;
        while (num > 0)
        {
            var actualBitIndex = iChar * this.BITS_PER_CHAR + localBitIndex;
            if (num % 2 == 1)
                console.log("bit " + actualBitIndex + " is set.");
            num = num >> 1;
            localBitIndex++;
        }
    }
}


Bitfield.prototype.countOnBits = function() 
{
    var numOnBits = 0;
    // for each char in the encoded string..
    for (var iChar = 0; iChar < this.encodedString.length; iChar++)
    {
        var c = this.encodedString[iChar];
        var num = decodeCharToNum(c);
        var localBitIndex = 0;
        while (num > 0)
        {
            var actualBitIndex = iChar * this.BITS_PER_CHAR + localBitIndex;
            if (num % 2 == 1)
                numOnBits++;
            num = num >> 1;
            localBitIndex++;
        }
    }
    return numOnBits;
}

Bitfield.prototype.getOnBits = function() 
{
    var onBits = [];
    // for each char in the encoded string..
    for (var iChar = 0; iChar < this.encodedString.length; iChar++)
    {
        var c = this.encodedString[iChar];
        var num = decodeCharToNum(c);
        var localBitIndex = 0;
        while (num > 0)
        {
            var actualBitIndex = iChar * this.BITS_PER_CHAR + localBitIndex;
            if (num % 2 == 1)
                onBits.push(actualBitIndex);
            num = num >> 1;
            localBitIndex++;
        }
    }
    return onBits;
}


//////////////////////////////////////////
// Pizza
//////////////////////////////////////////
function Pizza() {
    this.DNA_DELIM = '_';
}

Pizza.prototype.makeRandom = function(overrides, KitchenData) 
{
    var pizzaDNA = 0;

    // don't use the pizza rand to create topping indices as then it won't match up with the 
    // rand on the other side when a pizza is created from the same seed
    var localRand = mulberry32(Date.now() - 100);

    // randomly choose box
    this.boxMask = new Bitfield("00");
    this.boxMask.setBit(randomRange(localRand, 0, KitchenData.Boxes.length - 1), 1);
  //  this.boxIndex = randomRange(localRand, 0, KitchenData.Boxes.length - 1);


    // TODO: paper underlayment?
    this.paperMask = new Bitfield("00");

    // randomly choose crust
    this.crustMask = new Bitfield("00");
    this.crustMask.setBit(randomRange(localRand, 0, KitchenData.Crusts.length - 1), 1);
    //this.crustIndex = randomRange(localRand, 0, KitchenData.Crusts.length - 1);

    // randomly choose sauce
    // TODO: take into account rarity, etc.
    //this.sauceIndices = [];
    this.sauceMask = new Bitfield("00");
    var numSauces = randomRange(localRand, 0, KitchenData.Sauces.length);
    for (var iSauce = 0; iSauce < numSauces; iSauce++)
    {
        //this.sauceIndices.push(randomRange(localRand, 0, KitchenData.Sauces.length - 1));
        this.sauceMask.setBit(randomRange(localRand, 0, KitchenData.Sauces.length - 1), 1);
    }

    // randomly choose cheese
    // TODO: take into account rarity, etc.
    //this.cheeseIndices = [];
    this.cheeseMask = new Bitfield("00");
    var numCheeses = randomRange(localRand, 0, KitchenData.Cheeses.length);
    for (var iCheese = 0; iCheese < numCheeses; iCheese++)
    {
        //this.cheeseIndices.push(randomRange(localRand, 0, KitchenData.Cheeses.length - 1));
        this.cheeseMask.setBit(randomRange(localRand, 0, KitchenData.Cheeses.length - 1), 1);
    }

    // randomly choose toppings
    // TODO: take into account rarity, etc.
    //this.toppingIndices = [];
    this.toppingMask = new Bitfield("");
    this.toppingMask.growBy(30);
    var numToppings = randomRange(localRand, 0, KitchenData.Toppings.length);
    for (var iTopping = 0; iTopping < numToppings; iTopping++)
    {
        //this.toppingIndices.push(randomRange(localRand, 0, KitchenData.Toppings.length - 1));
        this.toppingMask.setBit(randomRange(localRand, 0, KitchenData.Toppings.length - 1), 1);
    }

    // choose and seed random generator
    this.seed = Date.now(); // TODO: choose better seed?
    this.rand = mulberry32(this.seed); 

    // HACK for now set derivative values
    this.HACK_setDerivativeValues();

    this.dna = this.calculateDNA();
    return this.dna;
}

Pizza.prototype.makeFromDna = function(dna) 
{
    // DNA is like this:
    // OVERALL:  "version" + "dna" + "_" + seed
    // version:
    //      - 2 chars (major and minor)
    // dna:
    //      - 2 chars for box mask
    //      - 2 chars for paper mask
    //      - 2 chars for crust mask
    //      - 2 chars for sauce mask
    //      - 2 chars for cheese mask
    //      - 30 chars for topping mask  (6 toppings per char = 180 possible toppings)
    //      - for each selected element above (boxes, papers, crusts, sauces, cheeses, toppings):
    //              - 2 chars:
    //                     - first char is instance count
    //                      - 2nd char:
    //                          - first 3 bits are rare variant index (r1 - r5)
    //                          - 2nd 3 bits are scatter method index

    // first, we can check to see if any character is outside our encoding char set.
    //    (EXCEPT FOR OUR DELIM "_")
    //   if so it's illegal.
    // TODO: break this out to static class function
    for (var iChar = 0; iChar < dna.length; iChar++)
    {
        var c = dna[iChar];
        if ((isInEncodingSet(c) == false) && (c != this.DNA_DELIM))
        {
            console.log("illegal dna.");
            return -1;
        }
    }

    // here break off the seed
    const tokens = dna.split(this.DNA_DELIM);
    if (tokens.length != 2)
    {
        console.log("illegal dna.");
        return -1;
    }
    this.seed = parseInt(tokens[1]);

    // read version
    this.version = dna.substring(0, 2);
    // TODO: READING THE REST DEPENDS ON WHICH VERSION IT IS!
    this.boxMask = new Bitfield(dna.substring(2, 4));   
    this.paperMask = new Bitfield(dna.substring(4, 6));  
    this.crustMask = new Bitfield(dna.substring(6, 8)); 
    this.sauceMask = new Bitfield(dna.substring(8, 10));     
    this.cheeseMask = new Bitfield(dna.substring(10, 12)); 
    this.toppingMask = new Bitfield(dna.substring(12, 42)); 

    
    // HACK for now set derivative values
    this.HACK_setDerivativeValues();

    // TODO: read the per-ingredient settings (2 chars per)
    // if any are missing then we will just randomly select HERE AND NOW (basically, updating the dna string)

    // create rand from seed
    this.rand = mulberry32(this.seed); 

    // if we got this far then it's a valid dna, so assign it
    this.dna = dna;
}



// HACK for now set derivative values
Pizza.prototype.HACK_setDerivativeValues = function() {
        // LATER WE CAN DEPRECATE THESE since they are derivatives of  the masks above, but for now use them.
    // box
    var boxIndices = this.boxMask.getOnBits();
    // for now support 1 box
    if (boxIndices.length < 1)
    {
        console.log("illegal dna.");
        return -1;
    }
    this.boxIndex = boxIndices[0];
    // TODO: validate this is within range!

    // TODO: we don't use paper (yet)

    // crust
    var crustIndices = this.crustMask.getOnBits();
    // for now support 1 crust
    if (crustIndices.length < 1)
    {
        console.log("illegal dna.");
        return -1;
    }
    this.crustIndex = crustIndices[0];
    // TODO: validate this is within range!

    // sauces
    this.sauceIndices = this.sauceMask.getOnBits();

    // cheeses
    this.cheeseIndices = this.cheeseMask.getOnBits();  

    // toppings
    this.toppingIndices = this.toppingMask.getOnBits();   

}



Pizza.prototype.calculateDNA = function() {
    // for now, a string:
    var dna = "";

    this.CURRENT_VERSION_MAJOR = 0;
    this.CURRENT_VERSION_MINOR = 1;   
    dna += encodeNumToChar(this.CURRENT_VERSION_MAJOR);
    dna += encodeNumToChar(this.CURRENT_VERSION_MINOR);

    dna += this.boxMask.getString();
    dna += this.paperMask.getString();
    dna += this.crustMask.getString();
    dna += this.sauceMask.getString();
    dna += this.cheeseMask.getString();
    dna += this.toppingMask.getString();
    // TODO: per-ingredient settings (instance count, rarity index, scatter method index)

    dna += this.DNA_DELIM;
    dna += this.seed;

    return dna;


/*    
    dna += encodeNumToChar(this.boxIndex);
    dna += encodeNumToChar(this.crustIndex);

    // TODO: for the indices, use bitfields encoded into chars.

    // TODO: encode into char
    dna += encodeNumToChar(this.sauceIndices.length);
    for (var i = 0; i < this.sauceIndices.length; i++)
        dna += encodeNumToChar(this.sauceIndices[i]);
    // TODO: encode into char
    dna += encodeNumToChar(this.cheeseIndices.length);    
    for (var i = 0; i < this.cheeseIndices.length; i++)
        dna += encodeNumToChar(this.cheeseIndices[i]); 
    // TODO: encode into char
    dna += encodeNumToChar(this.toppingIndices.length);    
    for (var i = 0; i < this.toppingIndices.length; i++)
        dna += encodeNumToChar(this.toppingIndices[i]); 

    // seed
    dna += this.seed;

    // return
    return dna;
*/  
}


Pizza.prototype.generateIngredientsData = function(KitchenData) {
    var ingredientsData = {};
    ingredientsData.box = {name: KitchenData.Boxes[this.boxIndex].name};
    ingredientsData.crust = {name: KitchenData.Crusts[this.crustIndex].name}; 
    ingredientsData.sauces = [];
    for (var iSauce = 0; iSauce < this.sauceIndices.length; iSauce++) {
        var sauce = KitchenData.Sauces[this.sauceIndices[iSauce]];
        ingredientsData.sauces.push({name: sauce.name});
    } 
    ingredientsData.cheeses = [];
    for (var iCheese = 0; iCheese < this.cheeseIndices.length; iCheese++) {
        var cheese = KitchenData.Cheeses[this.cheeseIndices[iCheese]];
        ingredientsData.cheeses.push({name: cheese.name});
    } 
    ingredientsData.toppings = [];
    for (var iTopping = 0; iTopping < this.toppingIndices.length; iTopping++) {
        var topping = KitchenData.Toppings[this.toppingIndices[iTopping]];
        ingredientsData.toppings.push({name: topping.name});
    }  
    
    return ingredientsData;
}



///////////////////////////////////////////////////
// exports
///////////////////////////////////////////////////
exports.Pizza = Pizza
exports.generateDisplayList = generateDisplayList
exports.randomScatter = randomScatter
exports.mulberry32 = mulberry32
exports.randomRange = randomRange
exports.randomRangeFloat = randomRangeFloat
exports.randomPointOnDisk = randomPointOnDisk
exports.KitchenData = KitchenData







