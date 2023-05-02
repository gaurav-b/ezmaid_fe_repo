import { useEffect } from "react";
import { Heros } from "./components/Heros";
import { SignUpTile } from "./components/SignUpTile";


export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Heros/>
            <SignUpTile/>
        </>
    );
}