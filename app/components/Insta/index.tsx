import Image from "next/image";
import Link from "next/link";


const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/ins1.svg" width={306} height={306} alt="instaOne" />
                    <Link href={"https://www.instagram.com/archishastra_/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/ins2.svg" width={306} height={306} alt="instaTwo" />
                    <Link href={"https://www.instagram.com/archishastra_/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/in3.svg" width={306} height={306} alt="instaThree" />
                    <Link href={"https://www.instagram.com/archishastra_/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/ins4.jpg" width={306} height={306} alt="instaFour" />
                    <Link href={"https://www.instagram.com/archishastra_/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Insta
