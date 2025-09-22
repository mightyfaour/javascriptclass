// const { appendFile } = require("fs");
// const { json } = require("stream/consumers");

const { match } = require("assert");

// appendFile.use((err, req, res, next) => {
//     res.status(500).json({message: err.message});
// ));

// Mongoose Validator
// const userSchema = new mongoose.Schema({
//     email:{type:String, required:true, match:/\S+@\S+\.\S+/},
//     age:{type:Number, min:18, max:65}
// });

UserActivation.findOne({email:"me2u@example.com"})
    .then(user => console.log(user))
    .catch(err => console.error("Database error: " + err.message));


    