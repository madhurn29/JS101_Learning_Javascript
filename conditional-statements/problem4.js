// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "masai@gmail.com";
let reg_pass = 12345;

let username = "masai@gmail.com";
let pass = 12345;

if(reg_username == username)
{
  if(reg_pass == pass)
  {
    console.log("Login suceesfully");
  }
  else{
    console.log("Incorrect Password");
  }
}
else
{
  console.log("Invalid Username");
}