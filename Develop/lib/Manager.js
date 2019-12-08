const Employee = require("./Employee");

class Manager {
    constructor(...officeNumber) {
      this.officeNumber = officeNumber[3];
   
    }

    getRole() {
        return "Manager"
      };
 
    getOfficeNumber() {
        return this.officeNumber;
    };

  }


  module.exports = Manager;
