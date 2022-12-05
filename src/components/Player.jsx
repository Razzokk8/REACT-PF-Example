import React, { useState, useEffect, useRef } from "react";
import { styled, Typography, Slider, Paper, Stack, Box } from "@mui/material";

// ------------ ICONS ---------
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// ------------ ICONS ---------

// ------- Tracks -------------------------------------------------------
import fade from "../assets/Music/outoffocus.mp3";
import enough from "../assets/Music/Inferno.mp3";
import immortal from "../assets/Music/Ahisogi.mp3";
import playDead from "../assets/Music/Speed.mp3";
import winning from "../assets/Music/osc515.mp3";
// ---------------------------------------------------------------

// -------- Styled Components -----------------------------------------
const Div = styled("div")(({ theme }) => ({
  height: "115px",
  width: "100%",
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  padding: theme.spacing(2),
  border: "solid 1.8px #0275d8",
  borderRadius: "10px",
  height: "172px",
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "lime",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));
// ---------------------------------------------------------------

const playlist = [fade, enough, immortal, playDead, winning];
const listName = [
  "Riccardo Limiti - OutOfFocus",
  "Matrixxman & Riccardo Limiti - Inferno",
  "Riccardo Limiti - A. - Jizo",
  "Matrixxman & Riccardo Limiti - Speed",
  "Riccardo Limiti - Osc515",
];
const rightsList = [
  "Unreleased 2022 © Riccardo Limiti",
  "Spectral 139, September 21, 2018 © Ghostly International",
  "Database, March 18, 2020 © ARKITA REC.",
  "IMF10 Part1, April 22, 2018 © Index Marcel Fengler",
  "Unreleased 2017 © Riccardo Limiti",
];

function Player() {
  const audioPlayer = useRef();
  const [index, setIndex] = useState(0);

  const [currentSong] = useState(playlist[index]);
  const [currentSongName] = useState(listName[index]);
  const [currentRightsList] = useState(rightsList[index]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  return (
    <div
      id="mPlayer"
      className="d-flex w-75 justify-content-center me-1 ms-1 mb-5"
    >
      <Div>
        <audio src={currentSong} ref={audioPlayer} muted={mute} />
        <CustomPaper>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "25%",
                alignItems: "center",
              }}
            >
              <VolumeBtns />
              <PSlider
                min={0}
                max={100}
                value={volume}
                onChange={(e, v) => setVolume(v)}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                width: "40%",
                alignItems: "center",
              }}
            >
              <SkipPreviousIcon
                sx={{
                  color: "#0275d8",
                  "&:hover": { color: "white" },
                }}
                onClick={toggleSkipBackward}
                disabled={true}
              />
              <FastRewindIcon
                sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
                onClick={toggleBackward}
              />
              {!isPlaying ? (
                <PlayArrowIcon
                  fontSize={"large"}
                  sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
                  onClick={togglePlay}
                />
              ) : (
                <PauseIcon
                  fontSize={"large"}
                  sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
                  onClick={togglePlay}
                />
              )}
              <FastForwardIcon
                sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
                onClick={toggleForward}
              />
              <SkipNextIcon
                sx={{ color: "#0275d8", "&:hover": { color: "white" } }}
                onClick={toggleSkipForward}
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
          </Box>
          <Stack
            spacing={1}
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white" }}>
              {formatTime(elapsed)}
            </Typography>
            <PSlider thumbless={'true'} value={elapsed} max={duration} />
            <Typography sx={{ color: "white" }}>
              {formatTime(duration - elapsed)}
            </Typography>
          </Stack>
          <div className="d-flex justify-content-center text-white">
            {listName[index]}
          </div>
          <div className="d-flex justify-content-center">
            <p>
              <small className="text-muted smallInfo">{rightsList[index]}</small>
            </p>
          </div>
        </CustomPaper>
      </Div>
    </div>
  );
}
export default Player;
