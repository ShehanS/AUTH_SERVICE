
const router = require('express').Router();
const verify = require('./verifyToken');
/*
router.get('/proposed-profiles', (req, res) => {
  res.json([
    {
      "id": 4,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "dadasdsadaasdasdad",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "QDQQ Q ",
        "phoneNumber": null,
        "description": "asdddddddddddddd abdjkad a dkasjd jak dajksdbajsdj jads jasd jka dajsd jasd ajksd jaks dasdasd",
        "picturePath": "user4"
      },
      "date": 1618092000000
    },
    {
      "id": 5,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "SDDWQCQECQCQC",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "asdasdad",
        "phoneNumber": null,
        "description": "hello ceci dadads un test de desc.",
        "picturePath": "user5"
      },
      "date": 1618092000000
    },
    {
      "id": 1,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2@gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "Alexa",
        "age": 27,
        "activity": "IT developer",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user1"
      },
      "date": 1618092000000
    },
    {
      "id": 2,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2@gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 2",
        "age": 27,
        "activity": "IT developer",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user2"
      },
      "date": 1618092000000
    },
    {
      "id": 3,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "Teacher",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user3"
      },
      "date": 1618092000000
    }

  ])
});

router.post('/proposed-profiles/:id/like', (req, res) => {
  console.log('like user id :' + req.params.id);
  console.log(req.body);
  res.send(req.body);
});



router.post('/proposed-profiles/:id/dislike', (req, res) => {
  console.log('like user id :' + req.params.id);
  console.log(req.body);
  res.send(req.body);
});


router.get('/auth/notifications', (req, res) => {
  res.json([
    {
      "id": 1,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2@gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "Alexa",
        "age": 27,
        "activity": "IT developer",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user1"
      },
      "date": 1618092000000
    },
    {
      "id": 2,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2@gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 2",
        "age": 27,
        "activity": "IT developer",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user2"
      },
      "date": 1618092000000,
      "meet": true
    },
    {
      "id": 3,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "Designer",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "Teacher",
        "phoneNumber": null,
        "description": "hello ceci est un test de desc.",
        "picturePath": "user3"
      },
      "date": 1618092000000
    },
    {
      "id": 3,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "dadasdsadaasdasdad",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "QDQQ Q ",
        "phoneNumber": null,
        "description": "asdddddddddddddd abdjkad a dkasjd jak dajksdbajsdj jads jasd jka dajsd jasd ajksd jaks dasdasd",
        "picturePath": "user4"
      },
      "date": 1618092000000
    },
    {
      "id": 3,
      "proposedProfile": {
        "id ": 2,
        "usersData": {
          "id ": 2,
          "email": "user2 @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": {
          "id ": 1,
          "placeId": "ChIJA1ojduFx5kcRl9460pSuQnY",
          "placeName": null,
          "street": null,
          "route": "Parvis Notre Dame - Place Jean - Paul II",
          "cp": "75004",
          "city": "Paris",
          "other": null,
          "country": "FR",
          "state": "IDF"
        },
        "name": "test2 ",
        "age": 29,
        "activity": "SDDWQCQECQCQC",
        "phoneNumber": "0611223344",
        "description": "new desc(edit!!)",
        "picturePath": null
      },
      "proposedFor": {
        "id": 1,
        "usersData": {
          "id ": 5,
          "email": "testPostman @gmail.com",
          "gender": 0,
          "disabled": false
        },
        "googleMapPlace": null,
        "name": "User 1",
        "age": 27,
        "activity": "asdasdad",
        "phoneNumber": null,
        "description": "hello ceci dadads un test de desc.",
        "picturePath": "user5"
      },
      "date": 1618092000000
    }

  ])
});
*/

module.exports = router;