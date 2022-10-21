import { makeAutoObservable } from "mobx";

export default class LogsStore {
  constructor() {
    this._telegram_bot_log = [];
    this._telegram_bot_frame_log = [];
    makeAutoObservable(this);
  }

  setTelegramBotLog(telegramBotLog) {
    this._telegram_bot_log = telegramBotLog;
  }

  setTelegramBotFrameLog(frameLog) {
    this._telegram_bot_frame_log = frameLog;
  }

  get telegramBotLog() {
    return this._telegram_bot_log;
  }

  get telegramBotFrameLog() {
    return this._telegram_bot_frame_log;
  }
}
