async function getapi() {
    
    // Storing response
    const response = await fetch('https://api.covid19api.com/summary');
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    for (let i = 0; i < data.Countries.length; i++) {
        document.getElementById('country').innerHTML += `<option value=${data.Countries[i].Country}>${data.Countries[i].Country}</option>` 
    }
   
     var select = document.querySelector('select');
     
     //show value for india
     select.value = data.Countries[77].Country
     document.getElementById('NewConfirmed').innerHTML = data.Countries[77].NewConfirmed
     document.getElementById('TotalConfirmed').innerHTML = data.Countries[77].TotalConfirmed
     document.getElementById('NewRecovered').innerHTML = data.Countries[77].NewRecovered
     document.getElementById('TotalRecovered').innerHTML = data.Countries[77].TotalRecovered
     document.getElementById('NewDeaths').innerHTML = data.Countries[77].NewDeaths
     document.getElementById('TotalDeaths').innerHTML = data.Countries[77].TotalDeaths
 

// Bind onchange event
    select.onchange = function() {
        console.log(this.value);
        for (let i = 0; i < data.Countries.length; i++) {
           if (this.value===data.Countries[i].Country) {
              document.getElementById('NewConfirmed').innerHTML = data.Countries[i].NewConfirmed
              document.getElementById('TotalConfirmed').innerHTML = data.Countries[i].TotalConfirmed
              document.getElementById('NewRecovered').innerHTML = data.Countries[i].NewRecovered
              document.getElementById('TotalRecovered').innerHTML = data.Countries[i].TotalRecovered
              document.getElementById('NewDeaths').innerHTML = data.Countries[i].NewDeaths
              document.getElementById('TotalDeaths').innerHTML = data.Countries[i].TotalDeaths
          
            }
        
        }
    };

 

}
getapi();

