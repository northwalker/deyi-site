import crypto from 'crypto';

export async function GET() {
  return new Response(crypto.randomUUID({ disableEntropyCache: true }));
}
