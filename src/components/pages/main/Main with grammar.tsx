import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Button } from 'antd';
import textgears from 'textgears-api';
import _ from 'lodash';

const Main = (props: any) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  let [mistakes, setMistakes] = useState<Array<Object>>([]);
  const textgearsApi = textgears('eBozneaQ0Hczhjf9', { language: 'zh-CN' }); //Hide Later

  if (mistakes === [{}]) {
    console.log('ran');
    setMistakes([]);
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('failed');
    return null;
  }

  const listen = () => {
    console.log('recording');
    SpeechRecognition.startListening({ language: 'zh-CN' });
  };

  const checkGrammar = () => {
    let results: {}[] = [];
    if (transcript == '') {
      console.log('hihihi');
      return; //Prevent empty Text
    }
    textgearsApi
      .checkGrammar(transcript)
      .then((data) => {
        console.log(data);
        console.log(data.response.errors);
        for (const error of data.response.errors) {
          let el = {
            error: error.bad,
            correction: error.better,
            reason: error.description.en,
            _id: error.id,
          };
          // let el =
          //   'Instead of: ' +
          //   error.bad +
          //   ' use: ' +
          //   error.better +
          //   '\n' +
          //   error.description.en;
          console.log(el);
          results.push(el);
        }
        if (results.length !== 0) {
          console.log('Passed');
          setMistakes(results);
        } else {
          console.log('Failed');
          setMistakes([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(mistakes);
  console.log(mistakes.length);

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
          <Button onClick={checkGrammar}>Check</Button>
        </div>
        <div className='row d-flex justify-content-center'>
          {mistakes.length === 0 ? (
            <p style={{ fontSize: '24px' }}>No Errors</p>
          ) : (
            <>
              {mistakes.map((el: any, index: number) => (
                <div className='col'>
                  <div
                    className='row d-flex justify-content-center'
                    key={el.id}
                  >
                    <p key={index} style={{ fontSize: '20px' }}>
                      Instead of: {el.error}, use: {el.correction}
                    </p>
                  </div>
                  <div
                    className='row d-flex justify-content-center'
                    key={el.id}
                  >
                    <p style={{ fontSize: '16px' }}>{el.reason}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
