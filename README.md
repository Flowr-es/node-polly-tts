# polly-tts
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/polly-tts.svg?style=flat)
![](http://img.shields.io/npm/dm/polly-tts.svg?style=flat)
![](http://img.shields.io/npm/l/polly-tts.svg?style=flat)
## Information
polly-tts is a module that uses amazon polly for providing text to speech using the aws</td>

## Notice
As it uses EcmasScript 2015 code it will probably not work with older Node Versions
For more information see http://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html 

## Roadmap
SynthesizeSpeech: 
    - SSML
    - SpeechMarkTypes
    - LexiconNames


DescribeVoice


Lexicons:
    - Delete
    - Get
    - Put


Unit-Tests


Your ideas

## Dependencies
https,
querystring,
aws4

## Usage

#### Simple example

A simple example how to use this module.

    let fs = require('fs');
    let Polly = require('polly-tts');
	let polly = new Polly();
    let options = {
        text: 'Hallo'
    };
    let fileStream = fs.createWriteStream('polly-tts.mp3');
    polly.textToSpeech( options, ( err, audioStream ) => {
        if( err ) {
            return console.log(err.message);
        }
        audioStream.pipe(fileStream);
    }); 

## API

### new Class(credentials)

Create a new Class of the module.
You can give an optional credentials Object with the class - otherwise it will be taken from process.env see aws4.
```
{ accessKeyId: 'YOUR-KEY',  secretAccessKey: 'YOUR-SECRET-KEY' }
```
####  textToSpeech(options, callback)

request text to speech 
options & callback are required 
options can look like: (optional value examples are the default values) 

```
let options = {
      text: 'some text to speech', // required
      region: "eu-west-1", // aws region - optional
      voiceId: "Vicki", // Polly Voice -> also determines the language - optional
      sampleRate: 22050, // optional
      outputFormat: "mp3" // all polly output formats like mp3, pcm etc. - optional
};
let callback = ( err, audioStream ) {
    // err is an NodeJs Error
    // audioStream is the response from the https module
}
```

## CONTRIBUTORS
Feel free to contribute - pull requests and issues are welcome :)

## LICENSE

(MIT License)

Copyright (c) 2016 Carlos Knoke Flores <carlos@knoke.net>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
