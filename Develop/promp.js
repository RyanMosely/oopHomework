const prompts = require('prompts');

(async () => {

    
        
            const userNumber = await prompts([
                {
                  type: 'text',
                  name: 'number',
                  message: `how many employees?`
                }])
        

        
        

    for (let i = 0;i<userNumber.number;i++){
  const response = await prompts([
    {
      type: 'text',
      name: 'twitter',
      message: `What's your twitter handle?`
    },
    {
      type: 'multiselect',
      name: 'color',
      message: 'Pick colors',
      choices: [
        { title: 'Red', value: '#FF0000' },
        { title: 'Green', value: '#00FF00' },
        { title: 'Blue', value: '#0000FF' }
      ],
    }

    
  ]);
  console.log(response);

        }
    

})();

