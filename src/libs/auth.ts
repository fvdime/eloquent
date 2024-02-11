import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

// export function getJwtSecretKey() {
//   const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

//   if (!secret) {
//     throw new Error('JWT Secret key is not matched');
//   }

//   return new TextEncoder().encode(secret);
// }

// export async function verifyJwtToken(token: string) {
//   try {
//     const { payload } = await jwtVerify(token, getJwtSecretKey());

//     return payload;
//   } catch (error) {
//     return null;
//   }
// }

export const signJWT = async (
  payload: { sub: string },
  options: { exp: string }
) => {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY)
      )
    ).payload as T;
  } catch (error) {
    console.log(error);
    throw new Error("Your token has expired.");
  }
};

export function getToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return token || "";
}