import ExpressConfig from './Express/express.config'

import dotenv from 'dotenv'
dotenv.config() // Load environment variables from .env file

const PORT = process.env.PORT

const app = ExpressConfig()

app.use((_req, _res, next) => {
  next()
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })