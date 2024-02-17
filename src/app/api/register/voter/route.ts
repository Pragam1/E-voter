import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { CreateVoterRequest } from '@/types/interface';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const voter : any = req;

    console.log("dfhsdlfsdklfjk", voter);

    const prisma = new PrismaClient();
    try{
        const post = await prisma.voter.create({
            data: {
                name: voter.name, 
                address: voter.address, 
                city: voter.city, 
                state: voter.state, 
                email: voter.email, 
                mobile: voter.mobile, 
                password: voter.password
            },
        });
        console.log("Tum chutiya ho !")
        return res.status(201).json(post);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
    }
}