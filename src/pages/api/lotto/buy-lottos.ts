import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, lottoId } = req.body;
  const lottod = await prisma.lotto.update({
    where: {
      id: lottoId,
    },
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  res.json(lottod);
}
