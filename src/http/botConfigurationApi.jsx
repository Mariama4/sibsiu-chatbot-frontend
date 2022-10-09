import { Host, AuthHost } from "./index";

const UpdateToken = async (id, token) => {
  const { data } = await AuthHost.patch("api/configuration/token", {
    id,
    token,
  });
  return data;
};

const Reload = async () => {
  const { data } = await AuthHost.get("api/configuration");
  return data;
};

const UpdateBotStatus = async (id, status) => {
  const { data } = await AuthHost.patch("api/configuration/status", {
    id,
    status,
  });
  return data;
};

export { UpdateToken, Reload, UpdateBotStatus };
