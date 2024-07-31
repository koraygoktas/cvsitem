import Image from 'next/image';

const Logo = () => {
    return (
        <div className="flex items-center">
            <Image src="/cv-foto-son.jpg" alt="Logo" width={116} height={40} />
        </div>
    );
};

export default Logo;
