import { useState} from "react"
function HandleMultipleInputs() {
    //firtname
    // lastname
    //username
    //email
    //password
    //confirm password
    //phone number
    //address

    /// this is hard techniquee
    // const [firstName, setFirstname] = useState("");
    // const [lastName, setLastname] = useState("");
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    // const [cnpass, setcnpass] = useState("");
    // const [Num, setNum] = useState("");
    // const [add, setAdd] = useState("");

    const [formData, setFormdata] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        pass: "",
        cnpass: "",
        Num: "",
        add: ""
    })

    const {firstName, lastName, username, email, pass, cnpass, Num, add} = formData;

 
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        // console.log("firstname:- ", firstName)
        // console.log("Lastname:- ", lastName)
        // console.log("Username:- ", username)
        // console.log("Email:- ", email)
        // console.log("Password:- ", pass)
        // console.log("Password:- ", cnpass)
        // console.log("Phone number:- ", Num)
        // console.log("Address:- ", add)
    }
     const handleChange = (e)=>{
    setFormdata((prev)=>{
        return {...prev,
             [e.target.name]: e.target.value}
    })
  }

  return  <form style={{padding: "1rem"}} onSubmit={handleSubmit}>
    <div className="formGroup">
    <label htmlFor="name">Enter your firstName:- </label>
    <input type="text" id="name" value={firstName}
    name="firstName"
    // onChange={(e)=>{
    //     setFirstname(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="lastname">Enter you lastName:- </label>
    <input type="text" id="lastname" value={lastName} name="lastName"
    // onChange={(e)=>{
    //     setLastname(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="username">Enter your userName:- </label>
    <input type="text" id="username" value={username} name="username"
    // onChange={(e)=>{
    //     setUsername(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="email">Enter your Email:- </label>
    <input type="text" id="email" value={email} name="email"
    // onChange={(e)=>{
    //     setEmail(e.target.value)
    // }}

    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="password">Enter your password:- </label>
    <input type="text" id="password" value={pass} name="pass"
    // onChange={(e)=>{
    //     setPass(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="cnfpassword">Confirm password:- </label>
    <input type="text" id="cnfpassword" value={cnpass} name="cnpass"
    // onChange={(e)=>{
    //     setcnpass(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="num">Enter your Number:- </label>
    <input type="number" id="num" value={Num} name="Num"
    // onChange={(e)=>{
    //     setNum(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <label htmlFor="add">Enter your address:- </label>
    <input type="text"  id="add" value={add} name="add"
    // onChange={(e)=>{
    //     setAdd(e.target.value);
    // }}
    onChange={handleChange}
    />
    <br />
    <br />
    <input type="submit" value = "signUp" />
    </div>
  </form>
  
  
}

export default HandleMultipleInputs