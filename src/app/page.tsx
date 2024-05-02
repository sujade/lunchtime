import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Navigation from "@/app/components/landing/Navigation";
import Hero from "@/app/components/landing/Hero";

export default function Home() {
    return (
        <>
            <Navigation/>
            <Hero/>
            <h1 className={"text-center pt-5"}>Woooo early website template!</h1>
        </>
    );
}