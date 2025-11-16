


import {Client} from "pg";

const client = new Client({
    connectionString:"postgresql://daljeet:daljeet@localhost/postgres"
})

// async function CONECT(){
// await client.connect();

// const result = await client.query(`
//             CREATE TABLE admindss (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );`)

//         return result;

// }


// const res= CONECT();
// console.log("result is"+res)


// async function putData(username:string,email:string,password:string){
//     await client.connect();

//   const result = await client.query(
//     `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
//     [username, email, password]
//   );

//   console.log("Data inserted:", result.rowCount);
//   await client.end();
// }


// putData("harman","harman@gmail.com","hamran")
        
    
    
