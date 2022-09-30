import { Host } from "./index";

const UpdateToken = async (id, token) => {
  const { data } = await Host.patch("api/configuration/token", { id, token });
  return data;
};

const UpdateBotName = async (id, name) => {
  const { data } = await Host.patch("api/configuration/botname", { id, name });
  return data;
};

const Reload = async () => {
  const { data } = await Host.get("api/configuration");
  return data;
};

const UpdateBotStatus = async (id, status) => {
  const { data } = await Host.patch("api/configuration/status", { id, status });
  return data;
};

export { UpdateToken, Reload, UpdateBotName, UpdateBotStatus };
