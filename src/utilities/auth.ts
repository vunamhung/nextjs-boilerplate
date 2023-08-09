import type { NextRequest } from 'next/server';

// import { jwtVerify } from 'jose';
// import { http } from '@/utilities';

export async function verifyAuth({ cookies }: NextRequest) {
  const token = cookies.get('token')?.value;

  if (!token) throw new Error('Missing user token');
  return true;

  /*try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY));

    return verified.payload;
  } catch (err) {
    throw new Error('Your token has expired.');
  }*/
}
