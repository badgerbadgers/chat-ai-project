import mongoose from "mongoose"

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "LangAI" })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to MongoDB database", error)
  }
}
