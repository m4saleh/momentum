axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=6744a87bd42c344ad9578faf9fed30a6'
    
})
.then((response) => {
    console.log(response);
    
    const temp = response.data.main.temp;
    $('body').append(`<h1 class='weather'>${temp}</h1>`);
    const drsc = response.data.weather[0].description;
    $('body').append(`<h1>${drsc}</h1>`);
    
})
.catch((erorr)=>{
    console.log(erorr);
    
})
