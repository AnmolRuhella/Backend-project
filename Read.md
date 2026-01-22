date - 20/01/2025 
Starting my Backend project 
// we will deploy the project on the render

1st lectue - how to create server 
step1 : we should know about the express.js 
through which we can do the routing and get the request from the server that if the user hit that URL then catch that request and serve that request with the response .

2nd lectue : how can we connect backend and frontend 
step 2 : follow the 1st step to craete the backend and write the routes and all 
then we need to create the separate folder for the frontend code and call that api by using fetch or axios (https library for calling an api )
we will also encounter the CORS error :
to resolve we can used proxy in frontend - basically add the proxy url - in the frontend config 
we can also whitelist that URL in the backend 

3rd lectue - Data Modelling (Mongoose)
in this basically I will get to know about how we can create the schema .
how our data reponse should be like that .
I am starting the lecture on 22/01/2026 at 11:47 pm 

// we always create the schema like this in mongoose
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({})

export const User = mongoose.model("User" , userSchema)

when you defined the schema 
 username : {
        type : String,
        required : true,
        unique : true ,
        lowercase : true
    }
you can do it like this or by directly assigned string to it .

