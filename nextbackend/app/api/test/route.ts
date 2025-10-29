import {NextRequest,NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const client = new PrismaClient();

export async function POST (req:NextRequest,res:NextResponse){
    //body
    const body = await req.json();
    console.log(`body ${body}`);


    //headers
    const headers = req.headers.get('authorization');
    console.log(`headers ${headers}`);


    //params
    const params = req.nextUrl.searchParams.get("name");
    console.log(`params ${params}`);

   await client.user.create({
    data:{
        username:body.username,
        passowrd:body.passowrd
    }
   })

   return NextResponse.json({message:"all good"});

}



export  function GET(req:NextRequest,res:NextResponse){
       const user =  await client.findFirst({});

    return NextResponse.json({msg:"w"},{status:400});
    
    

}