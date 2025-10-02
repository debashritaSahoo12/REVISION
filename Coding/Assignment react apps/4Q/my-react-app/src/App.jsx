import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const text = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setTranscript(text);
    };

    recognitionRef.current = recognition;
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  if (!supported) {
    return (
      <div className="container">
        <h1>Speech to Text</h1>
        <p>Your browser does not support the Web Speech API.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Speech to Text</h1>

      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      <div className="mic-icon">
        {isRecording ? (
          <span className="red">🔴</span>
        ) : (
          <span className="green">🟢</span>
        )}
      </div>

      <div className="transcript">
        <p>{transcript || "Speak something..."}</p>
      </div>
    </div>
  );
}

export default App;
