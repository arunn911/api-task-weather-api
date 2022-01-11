console.log("Hello__World")

let weather = {
    fetchWeather: function (city) {
        fetch(`https://goweather.herokuapp.com/weather/${city}`)
            .then((res) => {
              if (!res.ok) {
                alert("The city you searching might not be availabe at the time please try again later or spell the city correctly");
                throw new Error("No weather found.");
              }
              return res.json();
                // console.log(res)

            })
            // .then((data) => console.log(data))
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {

        const {description,temperature,wind} = data;
        const city = document.querySelector(".search-bar").value;

        document.querySelector(".city").innerText = city ? ("Weather in " + city) : ("Weather in Erode")
        document.querySelector(".description").innerText = description;
        document.querySelector(".temprature").innerText = temperature;
        document.querySelector(".speed").innerText = wind;
       
      },
      search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
    
    weather.fetchWeather("Erode");
