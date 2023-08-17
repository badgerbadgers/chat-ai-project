// import mongoose, { Schema, model, models } from "mongoose"

// const googleAuthUserSchema = new mongoose.Schema({
//   name: {
//     type: String
//   },
//   email: {
//     type: String
//   },
//   image: {
//     type: String
//   },
//   status: {
//     type: String
//   },
//   expires: {
//     type: Date
//   },
// })

// export default models.GoogleAuthUser ||
//   model("googleAuthUser", googleAuthUserSchema);

// // const GoogleAuthUser = models.GoogleAuthUser || model("GoogleAuthUser", googleAuthUserSchema);

// // export default GoogleAuthUser;

import { Schema, model, models } from "mongoose"

const googleAuthUserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  image: {
    type: String
  },
  // status: {
  //   type: String
  // },
  // expires: {
  //   type: Date
  // },
});

export default models.GoogleAuthUser ||
  model("googleAuthUser", googleAuthUserSchema); 