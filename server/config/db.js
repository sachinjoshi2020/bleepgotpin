import mongoose from 'mongoose'

export const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.DBURI)
    console.log(`db proper connected`)
  } catch (error) {
    throw new Error(error)
  }
}
