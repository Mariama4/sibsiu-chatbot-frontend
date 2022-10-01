import { Host } from "./index";

const getFrames = async () => {
  const { data } = await Host.get("api/frame");
  return data;
};

const updateFrame = async (id, frame) => {
  const data = await Host.patch("api/frame", { id, data: frame });
  return data;
};

const addFrame = async (frame) => {
  const data = await Host.post("api/frame", { data: frame });
  return data;
};

const deleteFrame = async (id) => {
  const data = await Host.delete(`api/frame/${id}`);
  return data;
};

export { getFrames, updateFrame, addFrame, deleteFrame };
