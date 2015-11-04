$( document ).ready(function () {
  // select one from list at random
  function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  var pluralizable_nouns = [
    'waffle iron', 'laser cutter', 'windmill', 
    'crib', 'thermostat', 'unicycle', 
    'toaster', 'broiler', 'light switch', 'hot tub',
    'holiday lights', 'carwash', 'rice cooker',
    'treadmill', 'stationary bicycle', 'blender',
    'billboard', 'hair dryer', 'curling iron',
    'humidor', 'mini fridge', 'tractor',
    'ant farm', 'trash compactors', 'quadcopter', 
    'artificial heart', 'outernet', 'steam engine',
    'swim goggles', 'observation tower', 'mars explorer', 
    'power grid', 'cryogenics', 'parade float', 
    'satellite', 'wheelchair', 'hydraulic press',
    'city', 'public space', 'sous vide',
    'curling stone', 'security cameras', 'hidden camera',
    'jetski', 'office chair', 'messenger bag', 'elevator',
    'skyway', 'megaphone', 'happy hour',
    'wheelchair', 'arcade', 'jacket', 'demolition', 'storm window', 
    'door', 'cinema', 'earring', 'necklace',
    'beer', 'cocktail', 'porta potty', 'silo',
    'helicopter', 'snowmobile', 'lamp post',
    'tattoo', 'tree', 'situation room',
    'fortune cookie', 'seed bank', 'canoe', 'warehouse',
    'podium', 'suitcase', 'coffee mug', 'candle',
    'crampon', 'excavator', 'fallout shelter',
    'beard', 'monocle', 'model train', 'church',
    'chopstick', 'laser pointer', 'snack', 'standing desk'
  ]; 
  var unpluralizable_nouns = [
    'pest control', 'jewelry', 
    'mass transit', 'video poker', 'demolition',
    'air quality', 'self', 'wine'
  ];
  var nouns = unpluralizable_nouns.concat(pluralizable_nouns);
  var vague_iot_nouns = [
    'machine learning', 'telepresence', 'bluetooth', 'alerts',
    'analytics', 'data science', 'gps', 'fog computing', 
    'augmented reality', 'hadoop'
  ];
  var adjectives = [
    'smart', 'quadcopter borne', 'alert generating', 
    'wifi', 'connected', '3D printed', 'ubiquitous',
    'texting', 'rift enabled', 'wearable', 'crowd sourced',
    'presence sensing', 'trackable', 'robotic',
    'autonomous', 'quantified', 'next gen', 'high resolution',
    'responsive', 'self replicating', 'live tweeting'
  ];
  var companies = [
    'facebook', 'snapchat', 'uber', 'tinder', 'lyft', 
    'skynet', 'twitter', 'hyperloop', 'airbnb', 'github', 'the cloud',
    'yik yak', 'chatroulette'
  ];
  var project = '';
  var r = Math.random();
  var noun = '';
  if (r < 0.40) {
    noun = choice(nouns);
    project = choice(adjectives) + ' ' + noun;
  } else if (r < 0.90) {
    noun = choice(pluralizable_nouns);
    project = choice(companies) + ' but for ' + pluralize(noun, 2);
  } else if (r < 0.96) {
    noun = choice(nouns);
    project = 'an api for your ' + noun;
  } else {
    noun = choice(pluralizable_nouns);
    project = pluralize(noun, 2) + ' but with, like, ' + choice(vague_iot_nouns) + ' or something';
  }
  $('#project').html(project);
  var CID = '6ea5ecf4f69b732eee4de52044292dc693331862';
  var TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiaWRlYXMiLCJkb21haW4iOiJodHRwczovL2V4b2hhY2suaW8ifQ.zpAmoTu6Jc6p73Z0FmOwnqq8qQ56fNsJUEzhxUSUaqM';
  var data = JSON.stringify({
      auth: {client_id: CID},
      calls: [{
        id: 1,
        procedure: 'write',
        arguments: [
          'bc98619ed6b1ca8d892ae8b0e3af18cf2146fa34',
          project
        ]
      }] 
    });
  $.ajax({
    type: 'POST',
    url: 'https://api.exohack.io/api/onep:v1/rpc/process', 
    data: data,
    processData: false,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + TOKEN
    },
    success: function(data) {
      console.log('data', data); 
    },
    error: function(jsxhr, err) {
      console.log('error', err, jsxhr);
    }
  });

});
