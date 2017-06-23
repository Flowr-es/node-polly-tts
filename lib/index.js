"use strict";
const EventEmitter = require("events");
const https = require("https");
const querystring = require("querystring");
const aws4 = require("aws4");

class PollyTTS {
  constructor(credentials) {
    super();
    this.credentials = credentials;
  }

  textToSpeech(options, callback) {
    if(!options) {
      return callback(new Error('Options are missing'));
    }
    let qs = {
      Text: options.text,
      TextType: "text",
      VoiceId: options.voiceId || "Vicki", 
      SampleRate: options.sampleRate || 22050, 
      OutputFormat: options.outputFormat || "mp3" 
    };
    let opts = {
      service: "polly",
      region: options.region || "eu-west-1",
      path: "/v1/speech?" + querystring.stringify(qs),
      signQuery: true
    };

    // you can also pass AWS credentials in explicitly (otherwise taken from process.env)
    aws4.sign(opts, this.credentials);
    https
      .get(opts, res => {
        if (res.statusCode !== 200) {
          return callback(
            new Error(`Request Failed. Status Code: ${res.statusCode}`)
          );
        }
        callback(null, res);
      })
      .on("error", e => {
        callback(e);
      });
  }
}

module.exports = PollyTTS;
