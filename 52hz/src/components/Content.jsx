import React, { useState } from "react";
import "../styles/index.css";
import useSound from "use-sound";
import whalecall from "../assests/whalecall.wav";
import bluewhalecall from "../assests/bluewhalecall.wav";
import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

const Content = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const [playBoop, { pause }] = useSound(whalecall, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const [playBlueWhaleCall, { pause: pauseBlueWhale }] = useSound(
    bluewhalecall,
    {
      onplay: () => setIsPlaying2(true),
      onend: () => setIsPlaying2(false),
    },
  );

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      playBoop();
    }
    setIsPlaying(!isPlaying);
  };

  const togglePlay2 = () => {
    if (isPlaying2) {
      pauseBlueWhale();
    } else {
      playBlueWhaleCall();
    }
    setIsPlaying2(!isPlaying2);
  };

  return (
    <>
      <div id="About">
        <div className="w-full bg-white py-16 z-50">
          <div className="max-w-[850px] mx-auto grid md:grid-cols-2 ">
            <div className="text-6xl mx-auto text-center">
              <p>
                ONE OF <br></br>A KIND
              </p>
            </div>

            <div className="text-2xl">
              <p>
                With blue whales usually having a vocalization range of 10-39Hz,
                52 Blue's call of 52Hz is much higher in frequency, shorter and
                more frequent.
              </p>
            </div>
          </div>

          <div className="max-w-[2000px] flex py-8 pl-10 justify-center">
            <button onClick={togglePlay}>
              {isPlaying ? (
                <CgPlayPauseO size={50} />
              ) : (
                <CgPlayButtonO size={50} />
              )}{" "}
              {/* ? = if , : = else*/}
            </button>
            <p className="text-2xl p-4">
              This signal was recorded in the northeast Pacific.<br></br>It has
              been sped up 10x, raising the pitch to 520 Hz.
            </p>
          </div>

          <div className="max-w-[2000px] flex pl-10 pb-16 justify-center">
            <button onClick={togglePlay2}>
              {isPlaying2 ? (
                <CgPlayPauseO size={50} />
              ) : (
                <CgPlayButtonO size={50} />
              )}
            </button>
            <p className="text-2xl p-4">
              Listening to the call of a blue whale, you can realise the
              difference.
            </p>
          </div>

          <div className="w-full bg-[#2A84EB]">
            <div className="py-16 max-w-[850px] mx-auto grid md:grid-cols-2 ">
              <div className="text-6xl mx-auto text-center text-white">
                <p>
                  FOREVER <br></br>ALONE?
                </p>
              </div>

              <div>
                <p className="text-2xl text-white">
                  First discovered in 1989, it's call is the only one of its
                  kind detected anywhere, with only one source per season.
                </p>
              </div>
            </div>
            <div className="max-w-[2000px] flex text-center justify-center">
              <p className=" pb-16 text-2xl text-white">
                With no actual sightings of the whale, scientists at the ㅤ
                <a
                  href="https://www.whoi.edu/oceanus/feature/a-lone-voice-crying-in-the-watery-wilderness/"
                  className="underline hover:text-blue-200 hover:cursor-pointe transition ease-in-out delay-50"
                >
                  Woods Hole Oceanographic Institution
                </a>
                <br></br>speculate that it could be a malformed whale or a blue
                whale hybrid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
