/* jshint esversion:6 */
import React, { Component } from 'react';
import logo from './logo.svg';
// import settings from './settings.png';
// import books from './books.png';
// import messages from './messages.png';
// import facetime from './facetime.png';
// import duo from './duo.png';
// import tripadvisor from './tripadvisor.png';
// import sbb from './sbb.png';
// import icloud from './icloud.png';
// import nextcloud from './nextcloud.png';
// import clock from './clock.png';
// import camera from './camera.png';
// import dji from './dji.png';
import './App.css';

class App extends Component {

  data = [
    {
      id: "a",
      title: "Daily",
      guides: [
        { id: 1, icon: "./icons/settings.png", title: "Track data usage", subtitle: "How-to track mobile data"},
        { id: 2, icon: "./icons/settings.png", title: "Track available storage", subtitle: "How-to track available storage space" },
        { id: 3, icon: "./icons/books.png", title: "Daily tech to-do list", subtitle: "Daily tech do-to list" }
      ]
    },
    {
      id: "b",
      title: "Communication",
      guides: [
        { id: 4, icon: "./icons/messages.png", title: "Send text messages and photos", subtitle: "How-to send text messages and photos"},
        { id: 5, icon: "./icons/facetime.png", title: "Make a FaceTime call", subtitle: "How-to make a FaceTime video / audio call" },
        { id: 6, icon: "./icons/duo.png", title: "Make a Duo call", subtitle: "How-to make a Duo video call" }
      ]
    },
    {
      id: "c",
      title: "Travel",
      guides: [
        { id: 7, icon: "./icons/tripadvisor.png", title: "Use TripAdvisor", subtitle: "How-to use TripAdvisor when traveling"},
        { id: 8, icon: "./icons/sbb.png", title: "Use SBB to find connections", subtitle: "How-to use SBB to find connection times" },
      ]
    },
    {
      id: "d",
      title: "Data & Backup",
      guides: [
        { id: 9, icon: "./icons/icloud.png", title: "Backup photos to iCloud", subtitle: "How-to backup photos & videos to iCloud"},
        { id: 10, icon: "./icons/nextcloud.png", title: "Backup photos to Nextcloud", subtitle: "How-to backup photos & videos to Nextcloud" },
      ]
    },
    {
      id: "e",
      title: "Departure & Arrival",
      guides: [
        { id: 11, icon: "./icons/settings.png", title: "Turn on airplane mode", subtitle: "How-to turn on airplane mode"},
        { id: 12, icon: "./icons/settings.png", title: "Connect to a Wi-Fi network", subtitle: "How-to connect to a Wi-Fi network" },
        { id: 13, icon: "./icons/clock.png", title: "Set an alarm", subtitle: "How-to set a wakeup alarm" },
      ]
    },
    {
      id: "f",
      title: "Photos & Videos",
      guides: [
        { id: 14, icon: "./icons/camera.png", title: "Take a photo", subtitle: "How-to take a photo"},
        { id: 15, icon: "./icons/camera.png", title: "Take a video", subtitle: "How-to take a video" },
        { id: 16, icon: "./icons/dji.png", title: "Use DJI Osmo Mobile 2", subtitle: "How-to use DJI Osmo Mobile 2" },
      ]
    }
  ]
  render() {
    return (
      <div>
        <div className="app" >
          {this.data.map(section => {
            return (
              <div key={section.id} className="section">
                <h4>{section.title}</h4>
                <div className="guides">
                  {section.guides.map(guide => {
                    return (
                      <div key={guide.id} className="guide">
                        <div className="iconContainer">
                          <img className="icon" src={guide.icon} />
                        </div>
                        <div className="separator" />
                        <div className="titleContainer">
                          <h5>{guide.title}</h5>
                          <p>{guide.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
