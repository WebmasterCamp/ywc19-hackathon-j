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
  const prisma = new PrismaClient();
  try {
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}
