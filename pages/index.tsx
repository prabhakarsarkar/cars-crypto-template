import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import LuxuryRental from "../components/LuxuryRental";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
    return (
        <div className={"flex body-container"}>
            <Head>
                <title>Cars & Rentals</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Sidebar />
            <main id="main-container" className="main-container minimise" >
                <Header />
                <LuxuryRental />
            </main>
        </div>
    );
};

export default Home;
