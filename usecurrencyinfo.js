import { useEffect, useState } from "react";

function usecurrencyinfo() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
      .then((res) => res.json())
      .then((res) => {
        console.log('API Response:', res);  // Inspect the response here
        setData(res.usd);  // Assuming the currencies are within `res.usd`
      })
      .catch((err) => console.error(err));
  }, []);

  return data;
}

export default usecurrencyinfo;

