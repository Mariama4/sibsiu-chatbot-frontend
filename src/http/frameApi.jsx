import { Host, AuthHost } from "./index";

const getFrames = async () => {
  const { data } = await AuthHost.get("api/frame");
  return data;
};

const updateFrame = async (formData) => {
  const { data } = await AuthHost.patch("api/frame", formData);
  return data;
};

const addFrame = async (formData) => {
  const { data } = await AuthHost.post("api/frame", formData);
  return data;
};

const deleteFrame = async (id) => {
  const { data } = await AuthHost.delete(`api/frame/${id}`);
  return data;
};

export { getFrames, updateFrame, addFrame, deleteFrame };
