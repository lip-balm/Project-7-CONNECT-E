// {/* <script src="./scripts.js"></script> */}


// export default {
//     data() {
//       return {
//         data: [],
//         error: null
//       };
//     },
//     methods: {
//         usersignup: function() {
//         fetch('http://localhost:3000/api/auth/signup', {
//             mode: 'no-cors',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify("hi")})
//           .then(response => response.json())
//           .then(json => {
//             this.data = json.data;
//           })
//           .catch(error => {
//             this.error = error;
//           });
//       }
//     }
//   };