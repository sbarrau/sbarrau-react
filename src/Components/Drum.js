import React, { useState, useEffect } from 'react';

const firstSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

const soundsName = {
  heaterKit: 'Heater Kit',
  smoothPianoKit: 'Smooth Piano Kit',
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup,
};

const Drum = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [soundName, setSoundName] = useState('');
  const [soundType, setSoundType] = useState('heaterKit');
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const styleActiveKey = () => {
    setIsKeyPressed(true);
  };

  const deActivatedKey = () => {
    setIsKeyPressed(false);
  };

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      deActivatedKey();
    }, 300);
  };

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    if (audio) {
      styleActiveKey();
      audio.currentTime = 0;
      audio.play();
      deactivateAudio(audio);
    }
  };

  const stop = () => {
    setPower(!power);
  };

  const changeSoundGroup = () => {
    setSoundName('');
    if (soundType === 'heaterKit') {
      setSoundType('smoothPianoKit');
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType('heaterKit');
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key));
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };


  useEffect(() => {
    setKeyVolume();

    // Add event listener for keyboard events
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Clean up the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [volume, sounds]);

  const handleKeyDown = (event) => {
    if (power && !isKeyPressed) {
      const key = event.key.toUpperCase();
      const sound = sounds.find((s) => s.key === key);
      if (sound) {
        play(sound.key, sound.id);
      }
    }
  };

  const handleKeyUp = () => {
    deActivatedKey();
  };

  return (
    <div id="drum-machine" className="min-h-screen flex flex-col justify-center items-center">
        <div className="keyboard grid grid-cols-3 gap-4">
         {power
          ? sounds.map((sound) => (
              <button
                value="test"
                id={sound.keyCode}
                className="drum-pad bg-black rounded-md text-white p-4"
                onClick={() => play(sound.key, sound.id)}
                key={sound.key}
              >
                <audio className="clip" src={sound.url} id={sound.key} />
                {sound.key}
              </button>
            ))
          : sounds.map((sound) => (
              <button
                value="test"
                id={sound.keyCode}
                className="drum-pad bg-blue-500 rounded-md text-white p-4"
                onClick={() => play(sound.key, sound.id)}
                key={sound.key}
              >
                {sound.key}
              </button>
            ))}
        </div>
        <div className="controle mt-4 flex flex-col items-center">
            <button onClick={stop}>Power {power ? 'OFF' : 'ON'}</button>
            <h2>Volume: {Math.round(volume * 100)}</h2>
            
            <input
            max="1"
            min="0"
            step="0.01"
            type="range"
            value={volume}
            onChange={handleVolumeChange}
            className="accent-black "
            />
            <h2 id="display">{soundName || soundsName[soundType]}</h2>
            <button 
                onClick={changeSoundGroup}
                
                className="border border-black rounded-lg px-4 py-2 "
                >Change Sound Group
            </button>
        </div>
        <div className="mt-4 " >
          By Seba Barrau
        </div>
    </div>
  );
};

export default Drum;