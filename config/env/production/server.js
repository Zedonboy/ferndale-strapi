module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["hsgfygfuwegfuyegduwefgyuewf7rf674rgf764", "hfqwytdrwq6d3fhiuewfhowefoewfonfr"]),
  },
});
