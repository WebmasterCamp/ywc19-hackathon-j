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
    const newLotto = await prisma.lotto.create({
      data: {
        code: '111222',
        endAt: new Date,
      }
    })
    res.send(newLotto);
  } catch (error) {
    res.status(500);
  }
}

