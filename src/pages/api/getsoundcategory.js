import { getData } from "../getData"

export default async function handler(req, res) {
   const data = await getData(req.headers.message)
  res.status(200).json(data)
}
