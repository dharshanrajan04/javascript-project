 const apiKey = "AQ.Ab8RN6KIgDE6c-2ROzPrtmmkyzjeeCJho0jK_ywb-Mj15Y76IA";

    async function checkWeather() {

      const city = document.getElementById("cityInput").value;

      const apiURL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(apiURL);

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
      }
      else{

        const data = await response.json();

        console.log(data);

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML =
          Math.round(data.main.temp) + "°C";

        document.getElementById("humidity").innerHTML =
          data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
          data.wind.speed + " km/h";

        const weatherMain = data.weather[0].main;

        const icon = document.getElementById("weatherIcon");

        if(weatherMain == "Clouds"){
          icon.src =
          "https://cdn-icons-png.flaticon.com/512/414/414825.png";
        }
        else if(weatherMain == "Rain"){
          icon.src =
          "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
        }
        else if(weatherMain == "Clear"){
          icon.src =
          "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        }
        else if(weatherMain == "Snow"){
          icon.src =
          "https://cdn-icons-png.flaticon.com/512/642/642102.png";
        }

        document.querySelector(".error").style.display = "none";
      }
    }