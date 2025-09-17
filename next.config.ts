/* import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

export default nextConfig;
 */

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    //domains: ["strapi.groupeblanchettemorency.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);