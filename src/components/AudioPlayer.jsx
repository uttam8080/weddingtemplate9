import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
export const AudioPlayer = ({ isPlaying, onTogglePlay }) => {
    const audioCtxRef = useRef(null);
    const isSynthRunning = useRef(false);
    const timerRef = useRef(null);
    // Synthesize soft, soulful Indian Flute / Tanpura meditative harmony using Web Audio API
    useEffect(() => {
        if (isPlaying) {
            startIndianSynthHarmony();
        }
        else {
            stopIndianSynthHarmony();
        }
        return () => {
            stopIndianSynthHarmony();
        };
    }, [isPlaying]);
    const startIndianSynthHarmony = () => {
        if (isSynthRunning.current)
            return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!audioCtxRef.current) {
                audioCtxRef.current = new AudioCtx();
            }
            if (audioCtxRef.current.state === 'suspended') {
                audioCtxRef.current.resume();
            }
            isSynthRunning.current = true;
            // Pentatonic Raag Bhupali frequencies for serene wedding mood (Sa Re Ga Pa Dha)
            // C, D, E, G, A notes (in Hz for low & mid octaves)
            const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
            let noteIdx = 0;
            const playNextNote = () => {
                if (!isSynthRunning.current || !audioCtxRef.current)
                    return;
                const ctx = audioCtxRef.current;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                // Sine wave with subtle triangle warmth (Bansuri flute feel)
                osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
                const freq = scale[noteIdx % scale.length];
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                // Soft attack & long decay
                const now = ctx.currentTime;
                gain.gain.setValueAtTime(0.001, now);
                gain.gain.linearRampToValueAtTime(0.08, now + 0.4);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 2.6);
                // Sequence pattern
                const intervals = [0, 2, 3, 1, 4, 2, 0, 3];
                noteIdx = (noteIdx + 1) % intervals.length;
                timerRef.current = window.setTimeout(playNextNote, 800 + Math.random() * 400);
            };
            playNextNote();
        }
        catch (e) {
            console.log('Audio Context initialization waiting for interaction', e);
        }
    };
    const stopIndianSynthHarmony = () => {
        isSynthRunning.current = false;
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };
    return (<button onClick={onTogglePlay} title={isPlaying ? "Mute Background Music" : "Play Background Shehnai & Flute Music"} className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#8B0000]/95 hover:bg-[#A00000] border-2 border-[#D4AF37] text-[#FDFBF7] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group">
      <div className="relative flex items-center justify-center">
        {isPlaying ? (<>
            <Volume2 className="w-5 h-5 text-[#FCE08F] animate-pulse"/>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FCE08F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
          </>) : (<VolumeX className="w-5 h-5 text-[#FDFBF7]/60"/>)}
      </div>

      {/* Animated Sound Frequency Equalizer Bars */}
      {isPlaying ? (<div className="flex items-end gap-0.5 h-4 px-1">
          <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_1s_infinite_100ms] h-full"/>
          <span className="w-1 bg-[#FCE08F] rounded-full animate-[bounce_1s_infinite_300ms] h-2/3"/>
          <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_1s_infinite_200ms] h-5/6"/>
        </div>) : (<span className="text-xs font-sans-clean font-bold tracking-wide hidden sm:inline text-[#FDFBF7]">
          Shehnai Music
        </span>)}
    </button>);
};
