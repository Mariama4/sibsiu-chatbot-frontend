import { Host } from "./index";

const getFrames = async () => {
  const { data } = await Host.get("api/frame");
  return data;
};

export { getFrames };
