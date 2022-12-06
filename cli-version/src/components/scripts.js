// methods: {
//     usersignin: function () {
//       fetch('http://localhost:3000/api/auth/signin', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           employeeID: this.employeeID,
//           password: this.password,
//         })
//       })
//           .then(response => response.json().then(parsedRES => {if (parsedRES.status === '200') {
//             this.$store.commit('loggedin', parsedRES)}
//             })
//           )
//           .then(data => {
//             console.log(data);
//             this.$router.push({name: 'forum'});
//           })
//           .catch(error => {
//             this.error = error;
//             console.log(error);
//           });
//     },
//   }
//   }

// employeeid needs to fetched from somewhere or stored locally and put in the axios spot
// need bearer token to be stored properly 
// calling methods on mount, authentication