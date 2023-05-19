import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(500).end();
  }
  try {
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      throw new Error("invalid user id");
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const followwersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });
    return res.status(200).json({ ...existingUser, followwersCount });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
