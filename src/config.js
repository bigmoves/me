console.log(process.env.NODE_ENV);
export default {
  API_HOST:
    process.env.NODE_ENV !== 'development'
      ? 'http://165.227.208.76'
      : 'http://localhost:9000'
};
