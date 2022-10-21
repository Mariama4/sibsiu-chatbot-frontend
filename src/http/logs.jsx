import { AuthHost } from "./index";

const getTelegramBotLogLimit = async (formData) => {
  const { data } = await AuthHost.post("api/tgbot_log/limit", formData);
  return data;
};

const getFrameLogLimit = async (formData) => {
  const { data } = await AuthHost.post("api/frame_log/limit", formData);
  return data;
};

export { getTelegramBotLogLimit, getFrameLogLimit };
