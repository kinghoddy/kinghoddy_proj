import client from "../../api/client";
export const getProjects = async (dispatch) => {
  try {
    const data = (await client.get("/projects")).data;
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};

export const geySingleProject = async (_id, dispatch) => {
  try {
    const data = (await client.get("/project/" + _id)).data;
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};

export const addProject = async () => {
  // Kim, Add your code here
};
