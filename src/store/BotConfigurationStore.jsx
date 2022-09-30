import { makeAutoObservable } from "mobx";

export default class BotConfigurationStore {
  constructor() {
    this._setting = {};
    makeAutoObservable(this);
  }

  setSetting(setting) {
    this._setting = setting;
  }

  get setting() {
    return this._setting;
  }
}
