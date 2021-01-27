import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Button } from 'antd';

const Main = (props: any) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('failed');
    return null;
  }

  const listen = () => {
    console.log('recording');
    SpeechRecognition.startListening({ language: 'zh-CN' });
  };

  return (
    <div className='mainContainer container-fluid'>
      <div className='col' style={{ paddingTop: '250px' }}>
        <div className='row d-flex justify-content-center'>
          {transcript === '' ? (
            <p style={{ fontSize: '24px' }}>Please Speak</p>
          ) : (
            <p style={{ fontSize: '24px' }}>{transcript}</p>
          )}
        </div>
        <div className='row d-flex justify-content-center'>
          <Button onClick={listen}>Start</Button>
          <Button onClick={() => SpeechRecognition.stopListening}>Stop</Button>
          <Button onClick={() => resetTranscript}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
