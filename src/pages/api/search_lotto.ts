import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  code: string;
  endAt: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const lotto = await prisma.lotto.findFirst({
      where: {
        endAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        endAt: 'asc',
      },
    });
    res.status(200).json(lotto);
  } catch (error) {
    res.status(500);
  }
}
