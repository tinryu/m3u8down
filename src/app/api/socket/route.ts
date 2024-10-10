// app/api/socket/route.ts
import { NextRequest } from 'next/server';
import { Server } from 'socket.io';

let io: Server | undefined;

export const config = {
  runtime: 'nodejs',
};

export async function GET(req: NextRequest) {
  if (!io) {
    // @ts-ignore: res.socket is available in Next.js runtime
    const { socket } = res;

    io = new Server(socket.server);
    
    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io?.emit('message', msg); // Broadcast message to all connected clients
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });

    socket.server.io = io;
  }

  return new Response('Socket initialized');
}
