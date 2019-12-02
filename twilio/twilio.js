var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

// _.times(5, sayHello);


/* 
Your solution will be evaluated on code quality, clarity and development best practices.


You are building a new web service called "ListenUp" and we need to implement 1 new endpoints in our code base:
we want to implement a "get users" used to return a list of existing users, how many songs they played, how many friends they have.
This is an example of the response we want to give for each call:
{
   "users": [
      {
         "username": "joe_example",
          "plays": 178,
          "friends": 7,
          "uri": "/users/joe_example"
      },
      ... snip additional users ...
   ],
   "uri": "/users"
}


In order to create those responses we need to get the data from different REST services and different endpoints:

GET https://mauvelous-leopard-5257.twil.io/friends
Returns a list of all users that the service has friend information for, example:

{
    "friends": [
        {
            "username": "ray_benigno",
            "uri": "/friends-detail?username=ray_benigno"
        },
        ... snip other users ...
    ],
    "uri": "/friends"
}

GET https://mauvelous-leopard-5257.twil.io/friend-detail?username=ray_benigno
Returns the list of friends for the specified user
{
    "friends": [
        "maranda_kjos",
        "jacquetta_hoelscher",
        "garth_coto",
        "leonor_mattis"
    ],
    "uri": "/friends-detail?username=ray_benigno"
}

GET https://mauvelous-leopard-5257.twil.io/plays-detail?username=whitley_cotter
Returns a given user's play history
{
    "plays": [
        ... snip other plays ...
        "E75C38C1-E2BB-BAF6-620B-9255D035B693",
        "E75C38C1-E2BB-BAF6-620B-9255D035B693",
        "68B4D809-4B4F-F735-EB92-E5B17C99220B"
    ],
    "uri": "/plays/whitley_cotter"
}

 */
var fetch = require('isomorphic-fetch');
function makeNetworkCall(url) {
  return fetch(url)
  .then((response) => {
    console.log(response.status);
    return response.json();
  });
}



function getFriendsData() {
  const FRIENDS_URL = 'https://mauvelous-leopard-5257.twil.io/friends';
  return makeNetworkCall(FRIENDS_URL);
}

function getFriendDetail(userName) {
  const FRIEND_DETAIL_URL = 'https://mauvelous-leopard-5257.twil.io/friend-detail?username=';
  const url = `${FRIEND_DETAIL_URL}${encodeURIComponent(userName)}`;
  console.log(url);
  return makeNetworkCall(url);
}

function getPlaysDetail(userName) {
  const PLAYS_URL = 'https://mauvelous-leopard-5257.twil.io/plays-detail?username=';
  const url = `${PLAYS_URL}${encodeURIComponent(userName)}`;
  return makeNetworkCall(url);
}

function listenUp() {
  const p = listenUpInternal();
  console.log('plength:' , p.length);
  Promise.all(p)
  .then((data) => {
    console.log('response', data);
  });
}

function listenUpInternal() {
  const promises = [];
  
  const p = getFriendsData()
  .then((data) => {
    if (!data || !Array.isArray(data.friends)) {
      console.error('bad data');
      return;
    }

    console.log(data.friends);
    data.friends.forEach((user, index) => {
      const { username, uri } = user;
      const result = {};
      
      if(index > 2) return;

      const p = sgetFriendDetail(username)
      .then(userDetail => {
        if (!userDetail || !Array.isArray(userDetail.friends)) {
          console.error('bad user detail');
          return;
        }
        const friendsCount = userDetail.friends.length;
        return getPlaysDetail(username)
        .then(playDetail => {
          if (!playDetail || !Array.isArray(playDetail.plays)) {
            console.error('bad play detail');
            return;
          }
          
          const playCount = playDetail.plays.length;
          /* 
          "username": "joe_example",
          "plays": 178,
          "friends": 7,
          "uri": "/users/joe_example"*/
          console.log(username, playCount, friendsCount);
          return {
            username,
            plays: playCount,
            friends: friendsCount
          };
          
        });
        
      })
    
    });
    
  });
  
  promises.push(p);
  return promises;
}


listenUp();





