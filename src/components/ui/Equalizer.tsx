import { useRef, useState } from 'react'

export const Equalizer = () => {

	const [onSound, setOnSound] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null);
  
	const onSoundInit = () => {
		setOnSound((prev) => !prev)
    togglePlay()
	}

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio!.paused) {
      audio!.play();
    } else {
      audio!.pause();
    }
  };
 

	return (
		<div className='equalizer cursor-pointer' onClick={onSoundInit}>
			<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
			<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
			<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
			<div className={`${!onSound ? 'bar' : 'no-bar'}`}></div>
      <audio loop ref={audioRef} src="https://res.cloudinary.com/dtzhtjcyr/video/upload/v1684342345/System_Of_A_Down_-_B.Y.O.B._elv04j.mp3" />
		</div>
	)
}
