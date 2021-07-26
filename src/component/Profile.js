import React from "react";
import A from "../assets/A.jpg"

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state={
      Name: "Manel", 
      Bio:"this is my bio",
      Profession:"i'm a web developer"
    }
    console.log("constructor")
  };
  componentDidMount(){
    console.log("component did mount")
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    console.log("component will un mount")
}



 render() 
{ 
   return ( 
   <div>
 <h1>I am {this.state.Name} </h1>
 <h1>{this.state.Bio}</h1>
 <h2>{this.state.Profession}</h2> 
 <img src={A} alt="img" />

</div>
) ;
   
   
 }
}
export default Profile;