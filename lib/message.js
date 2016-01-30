Msg = new Mongo.Collection('msg');

Places = new Mongo.Collection('places');
/*
if (Meteor.isServer) {
Places._ensureIndex({'loc.coordinates':'2dsphere'});  

Places.insert({
  "loc": {
    "type" : "Point",
    "coordinates" : [ 
        10, 
        10
    ]
  }
});
}*/
/*
Places.insert({
    "coordinates" : [ 
        10, 
        10
    ]
});


Places.find({
    loc: {
      $near: {
        $geometry: {
          coordinates: [ 
        -84.465176, 
        39.227033
    ] // this is an array ex. [-80, 25]
        },
        $maxDistance:3
      }
    }
  }).fetch();
*/