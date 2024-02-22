"use client";

import { useEffect, useState } from "react";

const CountryLocal = () => {
  const [country, setCountry] = useState("Madagascar");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setCountry(data.country))
        .catch((e) => console.log(e.message));
      if (!response) return;
    };

    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountryLocal;
