import Link from "next/link";

const Hero : React.FC = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">E-Matdaan</h1>
                <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit commodi ratione quia incidunt cum aut! Minus ullam quasi autem ex sequi, consectetur architecto illo quibusdam voluptatum sed fugit illum vel?</p>
                <button className="btn btn-primary"><Link href="/signup">Register Now !</Link></button>
            </div>
        </div>
        </div>
    );
};

export default Hero;