

class Engineer {
    constructor(...github) {
      this.github = github[3];
   
    }

    getRole() {
        return "Engineer"
      };

      getGithub() {
        return this.github;
    };

 

  }


  module.exports = Engineer;