import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { CreateVoterRequest } from '@/types/interface';

export async function createVoter(data: any) {
    const response = await fetch("api/register/voter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        alert("Voter created successfully")
    } else {
        alert("Error in creating voter. Please try again.")
    }
}