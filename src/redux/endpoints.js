const graphCms = process.env.REACT_APP_GRAPHCMS || "";

export const endpoints = {
  CMS_URL: `https://api-us-east-1.graphcms.com/v2/${graphCms}/master`,
};
