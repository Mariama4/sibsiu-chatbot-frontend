import { Host, AuthHost } from "./index";

const getFrames = async () => {
  const { result } = await AuthHost.get("api/frame");
  return result;
};

const updateFrame = async (formData) => {
  const { result } = await AuthHost.patch("api/frame", formData);
  return result;
};

const addFrame = async (formData) => {
  const { result } = await AuthHost.post("api/frame", formData);
  return result;
};

const deleteFrame = async (id) => {
  const { result } = await AuthHost.delete(`api/frame/${id}`);
  return result;
};

export { getFrames, updateFrame, addFrame, deleteFrame };
