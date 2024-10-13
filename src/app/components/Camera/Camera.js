"use client";
import Webcam from '@eduardosmarcal/webcam-easy';
import { useEffect, useState } from 'react';

export default function Camera() {
    let webcamElement;
    let canvasElement;
    let snapSoundElement;
    const [webcam, setWebcam] = useState(null);
    const [facingMode, setFacingMode] = useState('environment');

    useEffect(() => {
        console.log(facingMode);
        webcamElement = document.getElementById('webcam');
        canvasElement = document.getElementById('canvas');
        snapSoundElement = document.getElementById('snapSound');
        if (!webcam) {
            setWebcam(new Webcam(webcamElement, facingMode, canvasElement, snapSoundElement));
        }
    }, [webcam, facingMode]);

    function startWebcam() {
        console.log("in start");
        if (webcam != null) {
            webcam.start()
                .then(result => {
                    console.log("webcam started");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    function stopWebcam() {
        console.log("in stop");
        if (webcam != null) {
            webcam.stop();
        }
    }

    function flipWebcam() {
        console.log("flipping webcam");
        if (webcam != null) {
            setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
        }
    }

    return (
        <div>
            <video id="webcam" autoPlay playsInline width="640" height="480"></video>
            <canvas id="canvas" className="d-none"></canvas>
            <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
            <button onClick={startWebcam}>start webcam</button>
            <button onClick={stopWebcam}>stop webcam</button>
            <button onClick={flipWebcam}>flip</button>
        </div>
    );
}