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
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}
