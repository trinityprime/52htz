import React, { useState } from 'react'
import '../styles/index.css'
import useSound from 'use-sound'
import whalecall from '../assests/whalecall.wav'
import { CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg'

const Content = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const [playBoop, { pause }] = useSound(whalecall, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause(); 
        } else {
            playBoop();
        }
        setIsPlaying(!isPlaying);


    }

    return (
        <>
            <div className='w-full bg-white py-16'>

                <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
                    <div className='text-6xl mx-auto '>
                        <p>ONE OF <br></br>A KIND</p>
                    </div>

                    <div className='text-2xl -ml-20 pt-3' >
                        <p>With blue whales usually having a vocalization range of 10-39Hz, 52 Blue's call of 52Hz is much higher in frequency, shorter and more frequent.</p>
                    </div>
                </div>

                <div className='max-w-[2000px] flex py-8 pl-10 justify-center'>
                    <button onClick={togglePlay}>
                        {isPlaying ? <CgPlayPauseO size={50} /> : <CgPlayButtonO size={50} />}  {/* ? = if , : = else*/}
                    </button>
                    <p className='text-2xl p-4'>This signal was recorded in the northeast Pacific.<br></br>It has been sped up 10x, raising the pitch to 520 Hz.</p>
                </div>

            </div>
        </>
    )
}

export default Content