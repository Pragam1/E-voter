"use client"

import WebCamModal from '@/components/WebcamModal';
import { Dispatch, useRef, useState, SetStateAction } from 'react';
import Image from 'next/image';

import {createVoter} from "@/controllers/Admin"

import Input from '@/components/ui/Input';
import { create } from 'domain';

const SignupPage = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const dobRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const mobileRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const partyRef = useRef<HTMLInputElement>(null);
    const partyIDRef = useRef<HTMLInputElement>(null);

    const handleVoterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
            alert('Password and Confirm Password do not match');
            return;
        }
        
        createVoter({
            name: nameRef.current?.value,
            dob: dobRef.current?.value,
            address: addressRef.current?.value,
            city: cityRef.current?.value,
            state: stateRef.current?.value,
            email: emailRef.current?.value,
            mobile: mobileRef.current?.value,
            password: passwordRef.current?.value
        });
        
    }

    const handleNomineeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Nominee Submit');
    }

    // const handleSave = async () => {
    //     const imageData = capturedImage.split(';base64,').pop();
    //     const params = {
    //     Bucket: process.env.S3_BUCKET_NAME,
    //     Key: `captured-image-${Date.now()}.jpg`,
    //     Body: Buffer.from(imageData, 'base64'),
    //     ContentType: 'image/jpeg'
    //     };
    // };

    const [capturedImage, setCapturedImage] = useState(null);

    return (
        <div className='grid place-content-center min-h-screen'>
            <WebCamModal capturedImage={capturedImage} setCapturedImage={setCapturedImage as Dispatch<SetStateAction<string | null>>} />
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="For Voters" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form className='grid grid-cols-1 sm:grid-cols-2 gap-2' onSubmit={handleVoterSubmit}>
                        <Input ref={nameRef} type="text" placeholder="Name"/>
                        <Input ref={dobRef} type="text" placeholder="Date of Birth"/>
                        <Input ref={addressRef} type="text" placeholder="Address"/>
                        <Input ref={cityRef} type="text" placeholder="City"/>
                        <Input ref={stateRef} type="text" placeholder="State"/>
                        <Input ref={emailRef} type="text" placeholder="Email"/>
                        <Input ref={mobileRef} type="text" placeholder="Mobile Number"/>
                        <div className='col-span-full grid gap-2'>
                            <Input ref={passwordRef} type="text" placeholder="Password"/>
                            <Input ref={confirmPasswordRef} type="text" placeholder="Confirm Password"/>
                        </div>
                        <label className="form-control w-full max-w-xs my-4 col-span-full">
                            <div className="label">
                                <span className="label-text">Upload Aadhar Card</span>  
                            </div>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </label>
                        {capturedImage && <Image src={capturedImage} alt="Captured Image" width="256" height="256"/>}
                        <button className="btn self-center" onClick={() => (document.getElementById('capture_modal') as HTMLDialogElement)?.showModal()}>{capturedImage ? "Retake" : "Capture Photo"}</button>
                        <button type='submit' className="btn btn-primary col-span-full">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}; 

export default SignupPage;