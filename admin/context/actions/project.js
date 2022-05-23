import client from "../../api/client";
export const getProjects = async () => {
  const data = (await client.get("/projects")).data;
};
