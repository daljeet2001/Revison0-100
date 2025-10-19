import express from "express";
import { Client } from "pg";

const app = express();
const PORT = 8080;
const client = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable")


async function createTables (){
    await client.connect();
    await client.query(`

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`)

console.log("address table created")

}


async function InsertData(){
    await client.connect();
//SQL injections
    // const result = await  client.query(`INSERT INTO users (username, email, password)
    //     VALUES ($1, $2, $3)`,
    //     [username,email,password]
    // )
  const result = await client.query(`INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (2, 'New York', 'USA', '123 Broadway St', '10001')`)  
    console.log(result)
}


async function getuserDetailsAdresses(userID:string){
   await  client.connect();


   const query = (`SELECT u.id, u.username, u.email, a.city, a.country, a.pincode 
    FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1`)

    const result=await client.query(query,[userID])
    console.log(result);

}

getuserDetailsAdresses("2");
// InsertData()
// createTables();


app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})