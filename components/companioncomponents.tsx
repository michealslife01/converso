    'use client'
  
  import { cn, getSubjectColor } from '@/lib/utils'
import React, {useEffect, useState } from 'react'
import { vapi } from '@/lib/vapi.sdk';
import Image from 'next/image';

enum CallStatus {
    INACTIVE  = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponents = ({companionId, subject, topic, name, userName,userImage, voice, style}: CompanionComponentProps) => {

    const [callStatus, setCallStatus] = useState< CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect (() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);

        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);

        const onMessage = () => {}

        const error = (error: Error) => console.log( 'Error', error);

        const onSpeechStart =() => setIsSpeaking(true);
        const onSpeechEnd =() => setIsSpeaking(false);

        vapi.on ( 'call-start', onCallStart);
        vapi.on ( 'call-end', onCallEnd);
        vapi.on ( 'message', onMessage);
        vapi.on ( 'error', error);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);
        return () => {
            vapi.off ( 'call-start', onCallStart);
            vapi.off ( 'call-end', onCallEnd);
            vapi.off ( 'message', onMessage);
            vapi.off ( 'error', error);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        }
    }, []);

    return (
    <section className="flex flex-col h-[70vh]">
        <section className="flex max-sm:flex-col gap-8">
            <div className='companion-section'> 
                <div className="companion-avatar" style={{backgroundColor: getSubjectColor(subject)}}>
                    <div className={
                        cn("flex transition-opacity  absolute duration-1000", callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0', callStatus=== CallStatus.CONNECTING && 'opacity-100 animate-pulse')}>
                            <Image src={`/icons/${subject}.svg`} alt='subject' width={150} height={150} className="max-sm:w-fit " />
                    </div>
                </div>
            </div>
        </section>
    </section>
    )
}

export default CompanionComponents