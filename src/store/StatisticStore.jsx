import { makeAutoObservable } from "mobx";

export default class StatisticStore {
  constructor() {
    this._telegram_bot_log = [];
    this._telegram_bot_users = [];
    this._frame_log = [];
    makeAutoObservable(this);
  }

  setTelegramBotLog(telegramBotLog) {
    this._telegram_bot_log = telegramBotLog;
  }

  setTelegramBotUsers(telegramBotUsers) {
    this._telegram_bot_users = telegramBotUsers;
  }

  setFrameLog(frameLog) {
    this._frame_log = frameLog;
  }

  get telegramBotLog() {
    return this._telegram_bot_log;
  }

  get telegramBotUsers() {
    return this._telegram_bot_users;
  }

  get frameLog() {
    return this._frame_log;
  }
}
