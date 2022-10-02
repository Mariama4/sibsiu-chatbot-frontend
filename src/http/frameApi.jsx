import { Host } from "./index";

const getFrames = async () => {
  const { data } = await Host.get("api/frame");
  return data;
};

const updateFrame = async (formData) => {
  const data = await Host.patch("api/frame", formData);
  return data;
};

const addFrame = async (formData) => {
  const data = await Host.post("api/frame", formData);
  return data;
};

const deleteFrame = async (id) => {
  const data = await Host.delete(`api/frame/${id}`);
  return data;
};

export { getFrames, updateFrame, addFrame, deleteFrame };
