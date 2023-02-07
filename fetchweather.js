class  Fetch{
   async getCurrent(input){
       const myKey = '338988c73442aefaa32ef9926439ac24\n';

       const respone = await fetch(
          'api.openweathermap.org/data/2.5/weather?q=${input}&APPI=${myKey}'
       );

       const data =await respone.json();

       console.log(data);

       return data;


   }

}