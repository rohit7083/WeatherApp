// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import { Box } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { Button } from "@mui/material";
// import { useEffect } from "react";
// function index() {
//   const [searchValue, setSearchValue] = useState("");
//   const [tempInfo, setTempInfo] = useState({});
//   const [timestr, setTime] = useState("");
// const [weatherImg,setWeatherImg]=useState(null);

//   const handleWeatherInfo = async () => {
//     console.log(searchValue);
    
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=552ce5f77e31cd16ce75f35a87d74911`;
//       const res = await fetch(url);
//       const data = await res.json();
//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const mynewWeather = {
//         temp,
//         humidity,
//         pressure,
//         country,
//         sunset,
//         weathermood,
//         speed,
//         name,
//       };
//       const tempWether=mynewWeather.weathermood;
//       let sec = sunset;
//       let date = new Date(sec * 1000);
//       let timestr = `${date.getHours()}:${date.getMinutes()}`;
//      setTime(timestr);
//       setTempInfo(mynewWeather);
//       if(tempWether){
//         switch(tempWether){
//       case "Haze":
//         setWeatherImg("https://images.pexels.com/photos/1028600/pexels-photo-1028600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
//       break;
//       case "Clear":
//         setWeatherImg("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
//       break;
//       case "Cloudes":
//         setWeatherImg("https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg")
//       break;
//       default:
//         setWeatherImg("https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg")
      
//         }
      
//       }
//       console.log(data);
//     } catch (error) {
//       0;
//     }
//     // console.log(tempInfo);
//   };

//   useEffect(() => {
   
//     handleWeatherInfo();

//   }, []);

//   return (
//     <>
      // <Box
      //   sx={{
      //     mx: "auto",
      //     mt: 2,
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
      // >
      //   <TextField
      //     label="Search Location"
      //     id="outlined-size-small"
      //     size="small"
      //     value={searchValue}
      //     autoFocus
      //     onChange={(e) => setSearchValue(e.target.value)}
      //   />
      //   <Button
      //     sx={{ border: 2 }}
      //     onChange={handleWeatherInfo}
      //     variant="contained"
      //     color="success"
      //   >
      //     Search
      //   </Button>
      // </Box>

      // <Card
      //   sx={{
      //     maxWidth: 800,
      //     maxHeight: 600,
      //     border: 2,
      //     borderRadius: 10,
      //     mt: 5,
      //     mx: "auto",
      //   }}
      // >
      //   <CardActionArea>
      //     <CardMedia
      //       component="img"
      //       sx={{ height: 200 }}
      //       image={weatherImg}
      //       alt="green iguana"
      //     />

      //     <CardContent
      //       sx={{
      //         backgroundColor: "black",
      //         display: "flex",
      //         alignItems: "center",
      //         gap: 3,
      //       }}
      //     >
      //       <Typography
      //         sx={{ color: "white" }}
      //         gutterBottom
      //         variant="h1"
      //         component="div"
      //       >
      //         {tempInfo.temp}
      //       </Typography>
      //       <Typography
      //         sx={{ color: "white" }}
      //         gutterBottom
      //         variant="h4"
      //         component="div"
      //       >
      //         {tempInfo.weathermood}
      //         <Typography variant="body2" sx={{ color: "white" }}>
      //           {tempInfo.name}, {tempInfo.country}
      //         </Typography>
      //       </Typography>
      //       <Box
      //         sx={{
      //           backgroundColor: "orange",
      //           borderRadius: 5,
      //           padding: 1,
      //           width: 300,
      //           mx: "auto",
      //         }}
      //       >
      //         <Typography
      //           sx={{
      //             color: "black",
      //             padding: "0.5rem",
      //             mx: 4,
      //             borderRadius: "0.5rem",
      //             fontFamily: "cursive",
      //             display: "flex",
      //             alignItems: "center",
      //             gap: 3,
      //           }}
      //           gutterBottom
      //           variant="h4"
      //           component="div"
      //         >
      //           {new Date().toLocaleDateString()}
      //         </Typography>
      //       </Box>
      //     </CardContent>

      //     <CardContent
      //       sx={{
      //         display: "flex",
      //         justifyContent: "center",
      //         backgroundColor: "white",
      //       }}
      //     >
      //       <Typography
      //         sx={{ mx: 5 }}
      //         gutterBottom
      //         variant="h5"
      //         component="div"
      //       >
      //         <img
      //           width="50"
      //           height="50"
      //           src="https://img.icons8.com/ios-filled/50/FA5252/hygrometer.png"
      //           alt="hygrometer"
      //         />
      //         {tempInfo.humidity}
      //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
      //           Humidity
      //         </Typography>
      //       </Typography>

      //       <Typography
      //         sx={{ mx: 5 }}
      //         gutterBottom
      //         variant="h5"
      //         component="div"
      //       >
      //         <img
      //           width="50"
      //           height="50"
      //           src="https://img.icons8.com/ios-filled/50/FA5252/wind--v1.png"
      //           alt="wind--v1"
      //         />
      //         {tempInfo.wind}
      //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
      //           Wind
      //         </Typography>
      //       </Typography>

      //       <Typography
      //         sx={{ mx: 5 }}
      //         gutterBottom
      //         variant="h5"
      //         component="div"
      //       >
      //         <img
      //           width="50"
      //           height="50"
      //           src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FA5252/external-sunset-summer-kmg-design-glyph-kmg-design.png"
      //           alt="external-sunset-summer-kmg-design-glyph-kmg-design"
      //         />{" "}
      //         {timestr}
      //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
      //           sunset
      //         </Typography>
      //       </Typography>

      //       <Typography
      //         sx={{ mx: 5 }}
      //         gutterBottom
      //         variant="h5"
      //         component="div"
      //       >
      //         <img
      //           width="50"
      //           height="50"
      //           src="https://img.icons8.com/ios/50/FA5252/pressure.png"
      //           alt="pressure"
      //         />{" "}
      //         {tempInfo.pressure}
      //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
      //           Pressure
      //         </Typography>
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>
//     </>
//   );
// }
// export default index;





import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function Index() {
  const [searchValue, setSearchValue] = useState("Nashik");
  const [tempInfo, setTempInfo] = useState({});
  const [timestr, setTime] = useState("");
  const [weatherImg, setWeatherImg] = useState(null);
const[Sunsrise,setSunsrise]=useState("")
  const handleWeatherInfo = async () => {
    // if (!searchValue) return;
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=552ce5f77e31cd16ce75f35a87d74911`;
      const res = await fetch(url);
      const data = await res.json();

      // if (data.cod !== 200) {
      //   console.error("City not found");
      //   return;
      // }

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset ,sunrise } = data.sys;

      const mynewWeather = {
        temp,
        humidity,
        pressure,
        country,
        sunset,

        sunrise,
        weathermood,
        speed,
        name,
      };
      setTempInfo(mynewWeather);
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timestr = `${date.getHours()}:${date.getMinutes()}`;
      let sec2 = sunrise;
      let date2 = new Date(sec2 * 1000);
      let timestr2 = `${date2.getHours()}:${date2.getMinutes()}`;
      setTime(timestr);
      setSunsrise(timestr2);

      
      switch (weathermood) {
        case "Haze":
          setWeatherImg("https://images.pexels.com/photos/1028600/pexels-photo-1028600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          break;
        case "Clear":
          setWeatherImg("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          break;
        case "Clouds":
          setWeatherImg("https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg");
          break;
        default:
          setWeatherImg("https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    handleWeatherInfo();
  }, []);

  return (
    <>
            <Box
        sx={{
          mx: "auto",
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search Location"
          id="outlined-size-small"
          size="small"
          value={searchValue}
          autoFocus
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          sx={{ border: 2 }}
          onClick={handleWeatherInfo}
          variant="contained"
          color="success"
        >
          Search
        </Button>
      </Box>

      <Card
        sx={{
          maxWidth: 800,
          maxHeight: 600,
          border: 2,
          borderRadius: 10,
          mt: 5,
          mx: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={weatherImg}
            alt="green iguana"
          />

          <CardContent
            sx={{
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h1"
              component="div"
            >
              {tempInfo.temp}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {tempInfo.weathermood}
              <Typography variant="body2" sx={{ color: "white" }}>
                {tempInfo.name}, {tempInfo.country}
              </Typography>
            </Typography>
            <Box
              sx={{
                backgroundColor: "orange",
                borderRadius: 5,
                padding: 1,
                width: 300,
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  padding: "0.5rem",
                  mx: 4,
                  borderRadius: "0.5rem",
                  fontFamily: "cursive",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
                gutterBottom
                variant="h4"
                component="div"
              >
                {/* {new Date().toLocaleDateString()}
                 */}
                 {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}

              </Typography>
            </Box>
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Typography
              sx={{ mx: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FA5252/hygrometer.png"
                alt="hygrometer"
              />
              {tempInfo.humidity}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Humidity
              </Typography>
            </Typography>

            <Typography
              sx={{ mx: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FA5252/wind--v1.png"
                alt="wind--v1"
              />
              {tempInfo.speed}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Speed
              </Typography>
            </Typography>

            <Typography
              sx={{ mx: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FA5252/external-sunset-summer-kmg-design-glyph-kmg-design.png"
                alt="external-sunset-summer-kmg-design-glyph-kmg-design"
              />{" "}
              {timestr}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                sunset
              </Typography>
            </Typography>


            <Typography
              sx={{ mx: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FA5252/sun--v1.png" alt="sun--v1"/>{" "}
              {Sunsrise}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                sunrise
              </Typography>
            </Typography>


            <Typography
              sx={{ mx: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FA5252/pressure.png"
                alt="pressure"
              />{" "}
              {tempInfo.pressure}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Pressure
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default Index;



