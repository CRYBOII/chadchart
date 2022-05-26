import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" text-mif min-h-screen">
      <DefaultSeo
        title="ชัชชาติ สิทธิพันธุ์"
        defaultTitle="ชัชชาติ สิทธิพันธุ์"
        description="เว็บไซต์รวบรวมเนื้อหานโยบายเพื่อกรุงเทพฯที่น่าอยู่สำหรับทุกคน"
        canonical={process.env.URL}
        openGraph={{
          url: process.env.URL,
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [{ url: '20220427_COVER_WEB_VER_2_03_272e789315.jpeg' }],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
