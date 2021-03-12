import Head from "next/head";

export const Layout = ({ children }) => (
    <div>
        <Head>
            <link
                rel="preload"
                href="/fonts/Montserrat/Montserrat-Light.ttf"
                as="font"
                crossOrigin="" />
            <link
                rel="preload"
                href="/fonts/Montserrat/Montserrat-Regular.ttf"
                as="font"
                crossOrigin="" />
            <link
                rel="preload"
                href="/fonts/Montserrat/Montserrat-Medium.ttf"
                as="font"
                crossOrigin="" />
            <link
                rel="preload"
                href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
                as="font"
                crossOrigin="" />
            <link
                rel="preload"
                href="/fonts/Montserrat/Montserrat-Bold.ttf"
                as="font"
                crossOrigin="" />
            <link
                rel="preload"
                href="/fonts/MonotypeCorsiva/Monotype-Corsiva.ttf"
                as="font"
                crossOrigin="" />
        </Head>
        <body>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </body>
    </div>
)