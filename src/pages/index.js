import Head from "next/head";
import { Game, Footer } from "@/components/list";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Truth 🤔 or Drink 🍸?</title>
                <meta name="description" content="Built by Celebrity Clairmonte" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={utilStyles.main}>
                <Game />
                <Footer />
            </main>
        </>
    );
}
