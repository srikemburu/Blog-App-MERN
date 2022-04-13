import express from "express"

const router = express.Router()

router.get("/", (req,res) => {
    res.send('Awesome MERN BLOG')
})

export default router