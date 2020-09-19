import React from 'react';
import './Player.css';
import "./videoPlayerApi";

class Player extends React.Component{
  render(){
    return (
      <div className="app-main">
        <div className="left-section"></div>
        <div className="right-section">
          <div className="camera">
            <video id="video">Video stream not available.</video><br />
              <div className="mood">
                <center>Happy</center>
              </div>
          </div>
          <canvas id="canvas"></canvas>
          <div className="content">
            <div className="song-display"></div>
          </div>
          <div className="song-details">
            <span className="song-name">
              Something Just Like This
            </span>
            <br />
            <span className="artist">
              Coldplay and The Chainsmokers
            </span>
            <div className="music-player">
              <div className="dot"></div>
                <div className="musicPlayerTimeline"></div>
                  <div className="startTime">
                    2:12
                  </div>
                  <div className="endTime">
                    4:04
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Player;
