const user={
    username:"shweta",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("got user details");
    }

}

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}
//this - new object created
//2. constructor function called due to new keyword
//3.argument injected in this keyoword
const userOne=new User("shweta",12,true)
console.log(userOne);


//instanceOf