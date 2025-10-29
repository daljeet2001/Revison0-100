import Image from "next/image";
import axios from "axios";


async function getData() {

  await new Promise((r)=>setTimeout(r,5000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;

}


export default async function Home() {



  const userData= await getData();

  return (
    <div >


      <div className="text-red-500">username:{userData?.username}</div>
      <div>email:{userData?.password}</div>


    </div>
  ); 
}
