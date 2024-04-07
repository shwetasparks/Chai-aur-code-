class User {
   // Constructor function to initialize username
   constructor(username) {
      this.username = username;
   }

   // Method to log username to console
   logMe() {
      console.log(`username: ${this.username}`);
   }

   // Static method to create an ID
   static createId() {
      return `123`;
   }
}

// Creating a new User instance with username 'shweta'
const shweta = new User("shweta");

// Calling the createId() method of User class


// Defining a Teacher class that extends User class
class Teacher extends User {
   constructor(username, email) {
      super(username); // Calling the constructor of the parent class
      this.email = email;
   }
}

// Creating a new Teacher instance with username 'iphone' and email 'i@phone.com'
const iphone = new Teacher("iphone", "i@phone.com");

// Calling the logMe() method of Teacher class
iphone.logMe();
