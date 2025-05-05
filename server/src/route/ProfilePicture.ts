import {Request, Response, Router} from 'express'
import getRandomImg from '../utils/getRandomImg'

const router = Router()

router.get('/images/profile', async (req: Request, res: Response): Promise<any> => {

  try{

    const randomImg = getRandomImg()

    return res.json({ picture: randomImg })

  }catch(err: any){
    console.log(err)
  }

})


module.exports = router