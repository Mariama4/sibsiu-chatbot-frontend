import { Host, AuthHost } from "./index";

const getTelegramBotLog = async () => {
  const { data } = await AuthHost.get("api/tgbot_log");
  return data;
};

const getFrameLog = async () => {
  const { data } = await AuthHost.get("api/frame_log");
  return data;
};

const getTelegramBotUsers = async () => {
  const { data } = await AuthHost.get("api/tgbot_user");
  return data;
};

export { getTelegramBotLog, getFrameLog, getTelegramBotUsers };
