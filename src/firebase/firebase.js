import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_KEY
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });


// // const expense1 = {
// //     id: '1',
// //     description: 'etc etc',
// //     note: '',
// //     amount: 195,
// //     createdAt: 0
// // };

// // const expense2 = {
// //     id: '1',
// //     description: 'Gum',
// //     note: '',
// //     amount: 200,
// //     createdAt: 0
// // };

// // const expense3 = {
// //     id: '1',
// //     description: 'Water',
// //     note: '',
// //     amount: 30,
// //     createdAt: 0
// // };

// //database.ref('expenses').push(expense1);
// // database.ref('expenses').push(expense2);
// // database.ref('expenses').push(expense3);

// // database.ref('notes').push({
// //     title: 'course topics',
// //     body: 'other topics'
// // });

// //database.ref('/notes/-LuKH337xT042bdZ_KJY').remove();

// // const firebaseNote = {
// //     notes: {
// //         '12': {
// //             title: 'abc',
// //             body: 'info'
// //         },
// //         '24': {
// //             title: 'xyz',
// //             body: 'info 123'
// //         }
// //     }
// // };

// // const notes = [{
// //     id: '12',
// //     title: 'abc',
// //     body: 'info'
// // }, {
// //     id: '24',
// //     title: 'xyz',
// //     body: 'info 123'
// // }];

// // database.ref('notes').set(notes);
// // database.ref('notes').set(notes);

// // database.ref().once('value', (snapshot) => {
// //     let stringOutput = `${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`
// //     console.log(stringOutput);
// // }, (e) => {
// //     console.log('-- error fetching -- ', e);
// // });

// // setTimeout(() => {
// //     database.ref('job/title').set('Software Developer');
// // }, 4500);

// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(31);
// // }, 10500);

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('--- error fetching data --- ', e);
// //     });

// // database.ref().set({
// //     name: 'Russ Efen',
// //     age: 25,
// //     stressLevel: 4,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Boston',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed', e)
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('remove worked')
// //     }).catch((e) => {
// //     console.log('remove did not work', e)
// // });
