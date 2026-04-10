require("dotenv").config()

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const User = require("../models/User")
const connectDB = require("../config/db")

const seedAdmin = async () => {
  try {

    await connectDB()

    const existingAdmin = await User.findOne({
      email: "nishantsingh@gmail.com"
    })

    if (existingAdmin) {
      console.log("Admin already exists")
      process.exit()
    }

    const hashedPassword = await bcrypt.hash("12345", 10)

    const admin = new User({
      email: "nishantsingh@test.com",
      password: hashedPassword,
    })

    await admin.save()

    console.log("Admin created successfully")

    process.exit()

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedAdmin()