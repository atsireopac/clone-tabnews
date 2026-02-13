/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/api/**/*": ["./infra/migrations/**/*"],
  },
};

module.exports = nextConfig;
