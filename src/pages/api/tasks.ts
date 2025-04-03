import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function tasksHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const tasks = await prisma.task.findMany();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to list tasks' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, status, priority, favorite } = req.body;
      if (!title || !status || !priority) {
        return res.status(400).json({ error: 'Task data is incomplete' });
      }
      const task = await prisma.task.create({
        data: {
          title,
          description,
          status,
          priority,
          favorite,
        },
      });
      console.log('Tarefa criada:', task);
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
