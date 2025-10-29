
import {NextResponse,NextRequest} from "next/server"

const Crendentials={
username:"",
password:""
}

interface BodyType{
    username:string,
    password:string
}

export async function GET(){
    return Response.json({username:Crendentials.username,password:Crendentials.password});
} 


export async function POST (req:NextRequest){
    const data:BodyType = await req.json();
    Crendentials.username = data.username;
    Crendentials.password = data.password
    return NextResponse.json({username:data?.username,password:data?.password});
}