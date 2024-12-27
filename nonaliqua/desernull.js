const audioCtx = new AudioContext();
const scriptNode = audioCtx.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
