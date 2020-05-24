import React from "react";

export default function Chart() {
  const URl = "https://covid19.mathdro.id/api/daily";

  const data = async () => {
    const api = await fetch(URL);
    const json = await api.json();
    return json;
  };
  console.log(data);
  return <div></div>;
}
