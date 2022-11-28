
//const axios = require('axios')

  let schoolArray = [];
 
  async function getData(){

   

        // try {
        //      await axios.get('https://api.collegefootballdata.com/rankings?year=2022&week=8&seasonType=regular',
            
        //     {headers: { 
        //         'Content-Type' : 'application/json',   
        //         'accept' :'application/json',
        //         'Authorization': 'Bearer gWAxje/I1VJVLWcuTef5cOMXahi04GUjWYzz+qNxCTJAhwqq7959bLb4TYoK5QH5',
                
             
                
                
        //   }}).then((res) => {
              
              
            
        //      let test = res.data[0].polls[0].ranks;
        //      for (let i = 0; i < test.length; i++) {
        //         schoolArray.push(test[i].school);
        //      }

       
       
        //     console.log(schoolArray);
             
             
        //     })

           
            

        //     return schoolArray

        // }catch (error) {
        //     console.error("Error message " + error);     // NOTE - use "error.response.data` (not "error")
        //   }
     

       
         

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {league: '39', season: '2020'},
            headers: {
              'X-RapidAPI-Key': 'e5b1d86115mshd727c83ae812344p1ba934jsn9413aecb85b6',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
           await axios.request(options).then(function (response) {
              console.log(response.data.response);
              let returnedData = response.data.response;
              for (let i = 0; i < returnedData/2; i++) {
                console.log(response.data.response);
                document.getElementById('circle-graph').innerHTML = response.data.response[i].fixture.id + "\n";



              }
              
          }).catch(function (error) {
              console.error(error);
          });

          
          
    } 



getData();

