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



// for profile
// methods: {
//     userprofile: function() {
//       fetch('http://localhost:3000/api/auth/profile' + this.employeeID, {
//         method: 'GET',
//         headers:{ 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           employeeID: this.employeeID,
//           name:  this.name,
//           bio: this.bio,
//         })
//       })
//            .then(response => response.json())
//            .then(data => console.log(data))
//            .then(json => {this.userInfo = json.data})
//            .catch(error => {
//              this.error = error;
//           });
//     },


// mounted() {
//     axios.get('http://localhost:3000/api/auth/profile/:employeeID', {
//       headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token'),
//         }
//     })
//     .then(response => {
//     this.userInfo = response.data
//     })
// }
// }  

// let userInfo = response.data
// this.userInfo.name = userInfo.name
// this.userInfo.employeeID = userInfo.employeeID
// this.userInfo.bio = userInfo.bio