import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function analyticsHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const totalTasks = await prisma.task.count();
      const completedTasks = await prisma.task.count({
        where: { status: 'Concluída' },
      });
      const pendingTasks = await prisma.task.count({
        where: {
          status: {
            in: ['A Fazer', 'Em Andamento']
          }
        },
      });

      const tasksByStatus = await prisma.task.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
      });

      const tasksByPriority = await prisma.task.groupBy({
        by: ['priority'],
        _count: {
          priority: true,
        },
      });

      res.status(200).json({
        totalTasks,
        completedTasks,
        pendingTasks,
        tasksByStatus,
        tasksByPriority,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching analytics data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
