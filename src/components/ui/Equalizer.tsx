import { useState } from "react";

export const Equalizer = () => {
    
    const [onSound, setOnSound] = useState(true);
    const onSoundInit=() => {
      setOnSound(prev=>!prev)
    }
  return (
    <div className="equalizer cursor-pointer"  onClick={onSoundInit}>
            <div className={`${onSound ? 'bar': 'no-bar'}`}></div>
            <div className={`${onSound ? 'bar': 'no-bar'}`}></div>
            <div className={`${onSound ? 'bar': 'no-bar'}`}></div>
            <div className={`${onSound ? 'bar': 'no-bar'}`}></div>
			
    </div>
  )
};
