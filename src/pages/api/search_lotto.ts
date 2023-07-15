import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  code: string
  endAt: Date
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  try {
    console.log(req.body['code'])
    const newLotto = await prisma.lotto.findMany({
      where: {
        code: req.body.code,
      }
    })
    console.log(newLotto)
    res.json(newLotto);
  } catch (error) {
    res.status(500);
  }
}

