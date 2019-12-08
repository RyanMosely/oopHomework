

class Employee {
    constructor(name, id, email, title) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.title = title;
      this.getName = function() {
        if (this.name) {
          return name;
        }
      };
      this.getId = function() {
        if (this.id) {
          return id;
        }
      };
      this.getEmail = function() {
        if (this.email) {
          return email;
        }
      };  
      
      
    }

  

    getRole() {
      return "Employee"
    };

  }



  module.exports = Employee;
  
  

  /*
printInfo() {
      for (var key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  */