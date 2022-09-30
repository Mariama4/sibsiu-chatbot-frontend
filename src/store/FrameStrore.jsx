import { makeAutoObservable } from "mobx";

export default class FrameStore {
  constructor() {
    this._frames = {};
    makeAutoObservable(this);
  }

  setFrames(frames) {
    this._frames = frames;
  }

  get frames() {
    return this._frames;
  }
}
