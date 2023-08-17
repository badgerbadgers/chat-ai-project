// import NextAuth from "next-auth/next"
// import GoogleProvider from "next-auth/providers/google"
// import { connectMongoDB } from "@/lib/mongodb"
// import GoogleUser from "@/models/googleAuthUser"
// // import { signIn } from "next-auth/react"

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "google") {
//         const { name, email } = user
//         try {
//           await connectMongoDB()
//           const userExists = await GoogleUser.findOne({ email })

//           if (!userExists) {
//             const res = await fetch("http://localhost:3000/api/user", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 name,
//                 email,
//               }),
//             })

//             if (res.ok) {
//               return user
//             }
//           }
//         } catch (error) {
//           console.log(error)
//         }
//       }

//       return user
//     },
//   },
// })
// // console.log('handler', handler)

// export { handler as GET, handler as POST }

import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { connectMongoDB } from "@/lib/mongodb.js"
import googleAuthUser from "@/models/googleAuthUser"

// import googleAuthUser from "@/models/googleAuthUser"
// import GoogleUser from "@/models/googleAuthUser"
// import { signIn } from "next-auth/react"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await googleAuthUser.findOne({
        email: session.user.email,
      })
      return session
    },

    async signIn({ profile }) {
      console.log(profile)
      try {
        await connectMongoDB()

        const userExist = await googleAuthUser.findOne({ email: profile.email })

        if (!userExist) {
          const user = await googleAuthUser.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          })
        }
        return true

        // console.log()
      } catch (error) {
        console.log("error:", error)
        return false
      }
    },
  },
})
// console.log('handler', handler)

export { handler as GET, handler as POST }
