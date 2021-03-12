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
            <title>Liliya Luts | professional certified coach</title>
            <meta name="description" content="Lilia Luts - organizational consultant, business coach, transformational coach, NLP Master, member of the International Coaching Federation (ICF)" />
            <meta name="keywords" content="coach, business coach, transformational coach, NLP, ICF" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </body>
    </div>
)