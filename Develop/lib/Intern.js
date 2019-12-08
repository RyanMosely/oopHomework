const Employee = require("./Employee");

class Intern {
    constructor(...school) {
      this.school = school[3];
   
    }

    getRole() {
        return "Intern"
      };

    getSchool() {
        return this.school;
    };
  
 

  }


  module.exports = Intern;


  /*
  getRole() {
        return "Engineer"
      };

      getGithub() {
        return this.github;
    };

  */