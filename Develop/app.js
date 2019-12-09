




const fs = require('fs');
const prompts = require('prompts');

let resArr = [];

(async () => {

  
        
            const userNumber = await prompts([
                {
                  type: 'text',
                  name: 'number',
                  message: `how many employees?`
                }])
        

        
        

    for (let i = 0;i<userNumber.number;i++){
  let response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: `What is your name?`
    },
    {
      type: 'multiselect',
      name: 'position',
      message: 'What is your position',
      choices: [
        { title: 'Manager', value:'Manager'},
        { title: 'Engineer', value:'Engineer'},
        { title: 'Intern', value:'Intern'}
        
      ]
    },
    {
      type: 'text',
      name: 'id',
      message: `What is your ID number?`
    },
    {
      type: 'text',
      name: 'email',
      message: `What is your email?`
    }
    
  ])
  
  if(response.position=='Manager'){
    var officeNum = await prompts([
      {
        type: 'text',
        name: 'officeNumber',
        message: `What is your office number?`
      }]); response.place = 'Office Number:<br> '+ officeNum.officeNumber
  }else if(response.position=='Engineer'){
    var gitHub = await prompts([
      {
        type: 'text',
        name: 'gitHub',
        message: `What is your GitHub username?`
      }]); response.place = 'GitHub:<br> ' + gitHub.gitHub
  }else if(response.position=='Intern'){
    var school = await prompts([
      {
        type: 'text',
        name: 'school',
        message: `What college did you go to?`
      }]); response.place = 'School:<br> ' + school.school
  };
  

  resArr.push(response);
  }
        
        //console.log(resArr);

        let mainCard = []

resArr.forEach(element => {
  console.log(element)

  mainCard.push(`<div class="container">
        <div class="row justify-content-md-center">
        
                  
        <div class="col-auto">

        <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header"><h5>${element.name}<br><br>${element.position}<h5></div>
                <div class="card-body">
                <div class="card" style="width: 100%">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:<br> ${element.id} </li>
                  <li class="list-group-item">Email:<br> ${element.email}</li>
                  <li class="list-group-item">${element.place}</li>
                </ul>
              </div>
                  
                </div>
              </div>
    
    </div>
              
              
              
                </div>
        
        </div>`)


});









        
        
        
        
        
       
        
        
        
        
        
        
        
        let mainHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>

        <nav class="navbar navbar-light bg-light">
                <div class="titleHead">My Team</div>
              </nav>

              <br>
              

            
               ${mainCard.join('')}
        
        
        </body>
        </html>`
        
        fs.writeFile('./output/team.html', mainHtml, function (err) {
          if (err) throw err;
          console.log('Replaced!');
        });


})();









