/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    }
};


export default nextConfig;
