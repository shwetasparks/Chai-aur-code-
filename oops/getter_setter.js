class User {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   // Getter: get the value
   //getter is a method that gets the value of a specific property
   //allows you to retrieve the value of a property as if it were a regular property,
   get password() {
      return this._password.toUpperCase();
   }
   // Setter: set the value
   //class User {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   // Getter: get the value
   //getter is a method that gets the value of a specific property
   //allows you to retrieve the value of a property as if it were a regular property,
   get password() {
      return this._password.toUpperCase();
   }
   // Setter: set the value
   set password(value) {
      this._password = value;
   }
}

const shweta = new User("@shweta", "12");
console.log(shweta.password);

   set password(value) {
      this._password = value;
   }
}

const shweta = new User("@shweta", "12");
console.log(shweta.password);
