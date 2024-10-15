import { NextRequest, NextResponse } from 'next/server';
import { Server as SocketIOServer } from 'socket.io';
import type { Server as HTTPServer } from 'http';

// Ensure a global variable to prevent re-initialization in dev mode
const globalForSocket = global as unknown as { io?: SocketIOServer };

export const runtime = 'nodejs';

// API Route Handler
export async function GET(req: NextRequest) {
  const httpServer = (req as any).socket?.server as HTTPServer;

  if (!httpServer) {
    return NextResponse.json({ error: 'HTTP server not available.' }, { status: 500 });
  }

  if (!globalForSocket.io) {
    const io = new SocketIOServer(httpServer, {
      path: '/api/socket',
    });

    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);

      // Listen for 'message' events from clients
      socket.on('message', (msg) => {
        console.log('Message received:', msg);
        io.emit('message', msg); // Broadcast to all connected clients
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });

    globalForSocket.io = io; // Store the instance globally
    console.log('Socket.IO server initialized.');
  }

  return NextResponse.json({ message: 'Socket.IO server running.' });
}
