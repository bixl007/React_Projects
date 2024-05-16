import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//   useEffect(() => {
//     fetch("https://api.github.com/users/Bixl007")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Account Name: {data.name}</p>
      Github Followers: {data.followers}
      <img  src={data.avatar_url} alt="Github PFP" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/bixl007")
    return response.json()
}