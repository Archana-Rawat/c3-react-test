import React, {
 Component
}
from "react";
import axios from "axios";
export class PearsonUsers extends Component {
 constructor(props) {
  super(props);

  this.state = {
   users: [{
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
   }, {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
   }, {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
   }]
  };
 }

 componentDidMount() {
  axios.get("https://reqres.in/api/users?page=1&per_page=10")
   .then(res => {
    const users = res.data;
    let totalUsers = this.state.users;
    users.data.map((user) =>
     totalUsers.push(user)
    );
    let uniqueValues = this.removeDuplicates(totalUsers, 'id');//function to remove duplicate records
    this.setState({
     users: uniqueValues
    });
   })
 }

 removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
   return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
 }

 handleDelete(id, evt) {
  let result = this.state.users.filter((item) => item.id !== id);
  this.setState({
   users: result
  })
 }
 
 render() {
  return (
   <div className="pearon-users">
        <h1 className="heading">Pearson User Management</h1>
   <div className = "mainDiv" >
   {
    this.state.users.map((user) =>
     <div className = "card" key = {user.id} >
     <img src = {user.avatar} alt = "Avatar" className = "img" / >
     <div className = "container" >
     <p className = "name" > {user.first_name} {user.last_name} < /p> 
     <p className = "delete" onClick = {(evt) => this.handleDelete(user.id, evt)} > Delete < /p>  < / div > 
     </div>
    )
   }
   </div>
   </div>
  );
 }
}