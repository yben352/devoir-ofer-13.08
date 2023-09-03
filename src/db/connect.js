import { connect } from "mongoose"

export const connectToDb = async () => {
    try {
        connect(process.env.mongoDB_url)
        console.log("connectToDb");
    } catch (error) {
        console.log(error);
    }
}