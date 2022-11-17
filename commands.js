// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1.   use jaskis
//     'switched to db jaskis'
//      db
//      jaskis


// 2. Create a collection called bounties:    
//    db.createCollection('bounties')
//    show collections
//    bounties


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
//    db.bountyInfo.insertOne({
//   name: "Thanoceros",
//   species: "Rhinoceros",
//   location: "Grasslands",
//   wantedFor: "Eating too much grass",
//   client: "Songbird",
//   reward: 10000,
//   captured: false
//    })
// { acknowledged: true,
//   insertedId: ObjectId("6375e926f0903346d20de302") }


// 2. Query for all bounties in the bounties collection
// db.bountyInfo.find()
// { _id: ObjectId("6375e926f0903346d20de302"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   client: 'Songbird',
//   reward: 10000,
//   captured: false }

// 3. Insert many bounties at once using the given objects
// db.bountiesInfo.insertMany([
//     {
//       "name": "Lokinkajou",
//       "species": "Kinkajou",
//       "location": "Tropical rainforest",
//       "wantedFor": "Partying too late at night",
//       "client": "White tiger",
//       "reward": 1000,
//       "captured": false
//     },
//     {
//       "name": "Nebullama",
//       "species": "Llama",
//       "location": "Grasslands",
//       "wantedFor": "Drinking all the water from the ocean",
//       "client": "Songbird",
//       "reward": 2500,
//       "captured": false
//     },
//     {
//       "name": "Polarwind",
//       "species": "Polar Bear",
//       "location": "Arctic",
//       "wantedFor": "Not hibernating",
//       "client": "Sabertooth",
//       "reward": 4000,
//       "captured": false
//     },
//     {
//       "name": "Wrecking Crows",
//       "species": "Crow",
//       "location": "Grasslands",
//       "wantedFor": "Cawing too loudly",
//       "client": "Red wolf",
//       "reward": 40000,
//       "captured": false
//     },
//     {
//       "name": "Grandhog",
//       "species": "Groundhog",
//       "location": "Woodlands",
//       "wantedFor": "Not coming out of the hole on time and prolonging winter",
//       "client": "Songbird",
//       "reward": 50000,
//       "captured": false
//     },
//     {
//       "name": "Grim Panda",
//       "species": "Giant Panda",
//       "location": "Temperate forest",
//       "wantedFor": "Eating all the bamboo",
//       "client": "Red wolf",
//       "reward": 5000,
//       "captured": false
//     }
//   ]
//     )
//   { acknowledged: true,
//     insertedIds: 
//      { '0': ObjectId("6375ee4ef0903346d20de303"),
//        '1': ObjectId("6375ee4ef0903346d20de304"),
//        '2': ObjectId("6375ee4ef0903346d20de305"),
//        '3': ObjectId("6375ee4ef0903346d20de306"),
//        '4': ObjectId("6375ee4ef0903346d20de307"),
//        '5': ObjectId("6375ee4ef0903346d20de308") } }

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
//   db.bountiesInfo.find()

// { _id: ObjectId("6375ef89f0903346d20de309"),
//   name: 'Lokinkajou',
//   species: 'Kinkajou',
//   location: 'Tropical rainforest',
//   wantedFor: 'Partying too late at night',
//   client: 'White tiger',
//   reward: 1000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30a"),
//   name: 'Nebullama',
//   species: 'Llama',
//   location: 'Grasslands',
//   wantedFor: 'Drinking all the water from the ocean',
//   client: 'Songbird',
//   reward: 2500,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30b"),
//   name: 'Polarwind',
//   species: 'Polar Bear',
//   location: 'Arctic',
//   wantedFor: 'Not hibernating',
//   client: 'Sabertooth',
//   reward: 4000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30c"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30d"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   client: 'Songbird',
//   reward: 50000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30e"),
//   name: 'Grim Panda',
//   species: 'Giant Panda',
//   location: 'Temperate forest',
//   wantedFor: 'Eating all the bamboo',
//   client: 'Red wolf',
//   reward: 5000,
//   captured: false }

// 2. Query for all bounties with a reward worth 10000 or more
// db.bountiesInfo.find({reward: {$gte: 10000}})

// { _id: ObjectId("6375ef89f0903346d20de30c"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30d"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   client: 'Songbird',
//   reward: 50000,
//   captured: false }

// 3. Query for all bounties, but exclude the client attribute from being shown
// db.bountiesInfo.find({}, {client: 0})

// { _id: ObjectId("6375ef89f0903346d20de309"),
//   name: 'Lokinkajou',
//   species: 'Kinkajou',
//   location: 'Tropical rainforest',
//   wantedFor: 'Partying too late at night',
//   reward: 1000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30a"),
//   name: 'Nebullama',
//   species: 'Llama',
//   location: 'Grasslands',
//   wantedFor: 'Drinking all the water from the ocean',
//   reward: 2500,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30b"),
//   name: 'Polarwind',
//   species: 'Polar Bear',
//   location: 'Arctic',
//   wantedFor: 'Not hibernating',
//   reward: 4000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30c"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30d"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   reward: 50000,
//   captured: false }
// { _id: ObjectId("6375ef89f0903346d20de30e"),
//   name: 'Grim Panda',
//   species: 'Giant Panda',
//   location: 'Temperate forest',
//   wantedFor: 'Eating all the bamboo',
//   reward: 5000,
//   captured: false }
// 4. Query for a Groundhog in the Woodlands
// db.bountiesInfo.find( {$and: [ {species: "Groundhog"}, {location: "Woodlands"}]})

// { _id: ObjectId("6375ef89f0903346d20de30d"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   client: 'Songbird',
//   reward: 50000,
//   captured: false }


// Update and Delete
// 1. Update the reward for Polarwind to 10000
// db.bountiesInfo.updateOne(
//     { name: "Polarwind"},
//     { $set: { reward: 10000}}
//     )


// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }


// 2. Remove Lokinkajou
// db.bountiesInfo.deleteOne({ name: "Lokinkajou"})

// { acknowledged: true, deletedCount: 1 }



// 3. Delete all bounties sent by Songbird

// db.bountiesInfo.deleteMany({client: "Songbird"})

// { acknowledged: true, deletedCount: 2 }

// 4. Update all captured statuses to true

// db.bountiesInfo.updateMany(
//     { captured: false },
//     { $set: { captured: true } }
//     )
    
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0 }