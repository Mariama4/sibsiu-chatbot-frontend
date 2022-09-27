import { makeAutoObservable } from "mobx";

export default class BotConfigurationStore {
  constructor() {
    this._setting = {
      id: 0,
      token: "gdfhbr5ybtrybdr",
      bot_name: "@fghfg",
      status: false,
    };
    makeAutoObservable(this);
  }

  setSetting(setting) {
    this._setting = setting;
  }

  get setting() {
    return this._setting;
  }
}
