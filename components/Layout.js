import Head from "next/head";

import { Header } from './Header';
import { Footer } from './Footer';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const Layout = ({ children }) => (
    <div>
        <Head>
            <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-ExtraLight.ttf`}
                // href="/fonts/Montserrat/Montserrat-ExtraLight.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-Light.ttf`}
                // href="/fonts/Montserrat/Montserrat-Light.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-Regular.ttf`}
                // href="/fonts/Montserrat/Montserrat-Regular.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-Medium.ttf`}
                // href="/fonts/Montserrat/Montserrat-Medium.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-SemiBold.ttf`}
                // href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-Bold.ttf`}
                // href="/fonts/Montserrat/Montserrat-Bold.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-ExtraBold.ttf`}
                // href="/fonts/Montserrat/Montserrat-ExtraBold.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Montserrat/Montserrat-Black.ttf`}
                // href="/fonts/Montserrat/Montserrat-Black.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href={`${prefix}/fonts/Monotype/Monotype-Corsiva.ttf`}
                // href="/fonts/Monotype/Monotype-Corsiva.ttf"
                as="font"
                type="truetype"
                crossOrigin="anonymous" />
            <title>Liliya Luts | professional certified coach</title>
            <meta name="description" content="Lilia Luts - organizational consultant, business coach, transformational coach, NLP Master, member of the International Coaching Federation (ICF)" />
            <meta name="keywords" content="coach, business coach, transformational coach, NLP, ICF" />
        </Head>
        <body>
            <div className="root">
                <Header />
                {children}
                <Footer />
            </div>
        </body>
    </div>
)