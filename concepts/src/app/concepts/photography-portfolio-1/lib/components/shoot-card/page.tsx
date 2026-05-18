import Image from "next/image"

export default function ShootCard({
    title,
    description,
    imageLinks,
}: { title: string, description: string, imageLinks: string[],
}) {
    const backgroundImageCount = (imageLinks.slice(0, 4)).length;
    const gridCols = backgroundImageCount <= 2 ? 'grid-cols-1' : 'grid-cols-2';
    const gridRows = backgroundImageCount >= 3 ? 'grid-rows-2' : '';
    return (
        <div className="shoot-card w-[90vw] max-w-100 aspect-9/16 relative border-2 border-white overflow-hidden">
            <div className="w-full h-full relative flex items-center justify-center">
                <div className={`absolute top-0 left-0 w-full h-full grid ${gridCols} ${gridRows}`}>
                    {imageLinks.map((link, index) => {
                        const threeImageLayout = backgroundImageCount === 3 && index == 2;
                        return (
                            <div key={index} className={`card-bg-grid-item relative w-full h-full ${threeImageLayout ? 'col-span-2' : ''}`}>
                                <Image
                                    src={link}
                                    alt="image"
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    fill
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="w-[90%] h-auto text-center text-shadow-[0_0_10px_black] z-1">
                    <div className="text-[25px] uppercase">
                        <p>{title}</p>
                    </div>
                    <div className="text-[17.5px] hidden">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}