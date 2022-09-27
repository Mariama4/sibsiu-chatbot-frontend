import { Host } from "./index";

const UpdateToken = async (id, token) => {
  const { data } = await Host.patch("api/configuration/token", { id, token });
  return data;
};

const Reload = async () => {
  const { data } = await Host.get("api/configuration");
  return data;
};

export { UpdateToken, Reload };
