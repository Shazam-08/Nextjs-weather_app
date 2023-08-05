import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      <Image
        src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        layout="fill"
        className="object-cover"
      />
      {/* search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-white text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none
               text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Search City"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>

        {/* weather */}
      </div>
    </>
  );
}
