import mongoose from 'mongoose'

/* MongoDB Connection Function */
const Connection = async (database_connection_url) => {
    const URL = database_connection_url;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connection established");
    } catch (error) {
        console.log("Error while connecting to Database", error);
    }
}

export default Connection;