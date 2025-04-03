import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function taskHandler(req: NextApiRequest, res: NextApiResponse) {
  const taskId = parseInt(req.query.id as string);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid Task ID' });
  }

  if (req.method === 'GET') {
    try {
      const task = await prisma.task.findUnique({
        where: { id: taskId },
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching task' });
    }
  } else if (req.method === 'PUT') {
    try {
      console.log('API - PUT Request:', {
        query: req.query,
        body: req.body
      });

      const taskId = Number(req.query.id);
      const { title, description, status, priority, favorite } = req.body;

      console.log('API - Updating task:', {
        taskId,
        data: { title, description, status, priority, favorite }
      });

      const task = await prisma.task.update({
        where: { id: taskId },
        data: { title, description, status, priority, favorite }
      });

      console.log('API - Task updated:', task);
      res.status(200).json(task);
    } catch (error) {
      console.error('API - Update error:', error);
      res.status(500).json({ error: 'Error updating task' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.task.delete({
        where: { id: taskId },
      });
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
