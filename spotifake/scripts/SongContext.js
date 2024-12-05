import { createContext, useContext, useEffect, useState } from "react";
import { Audio } from "expo-av";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [song, setSong] = useState(null);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    const playSong = async (Song) => {
        if (sound) {
            stopSong()
        }

        const { sound: newSound, status } = await Audio.Sound.createAsync(
            { uri: Song.fileUrl }
        );

        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
        setSong(Song);
        setDuration(song.durationMillis);
        newSound.setOnPlaybackStatusUpdate(status => {
            setPosition(status.positionMillis);
            if (status.didJustFinish) {
                setIsPlaying(false);
                setSong(null);
                setPosition(0);
            }
        });
    };
    

    const pauseSong = async () => {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(!isPlaying);
        }
    };

    const resumeSong = async () => {
        if (sound) {
            await sound.playAsync();
            setIsPlaying(!isPlaying);
        }
    };

    const stopSong = async () => {
        if (sound) {
            await sound.stopAsync();
            sound.unloadAsync();
            setIsPlaying(false);
            setSong(null);
            setSound(null);
        }
    };

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

    return (
        <SongContext.Provider value={{ song, isPlaying, duration, position, playSong, pauseSong, resumeSong, stopSong }}>
            {children}
        </SongContext.Provider>
    );
};

export const usePlayer = () => useContext(SongContext);
