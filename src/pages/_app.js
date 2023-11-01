import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>IQ academy</title>
                <meta
                    name="description"
                    content="iq academy маркетплейс"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>
            <Component {...pageProps} />


        </>
    )
}