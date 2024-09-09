import mongoose from "mongoose";



export const Connection = async(username , password) => {
    const URL= `mongodb://${username}:${password}@ac-bxcmuai-shard-00-00.vdz9ik5.mongodb.net:27017,ac-bxcmuai-shard-00-01.vdz9ik5.mongodb.net:27017,ac-bxcmuai-shard-00-02.vdz9ik5.mongodb.net:27017/?ssl=true&replicaSet=atlas-yoii0s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce`;  
    try{ 
        await mongoose.connect(URL ,{useUnifiedTopology: true , useNewUrlParser: true});
        console.log(`Database connected Successfully`);

    } catch (error){
        console.log(`Error while connecting with the database`, error.message);
    }
}

export default Connection;