import { Host, AuthHost } from "./index";

const getTelegramBotLog = async (formData) => {
  const { data } = await AuthHost.post("api/tgbot_log/between-date", formData);
  return data;
};

const getFrameLog = async (formData) => {
  const { data } = await AuthHost.post("api/frame_log/between-date", formData);
  return data;
};

const getTelegramBotUsers = async (formData) => {
  const { data } = await AuthHost.post("api/tgbot_user/between-date", formData);
  return data;
};

export { getTelegramBotLog, getFrameLog, getTelegramBotUsers };
