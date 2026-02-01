import Image from 'next/image';

export default function ArtistCard({ name, imageUrl } : { name?: string; imageUrl?: string }) {
    return (
        <div className="relative w-full aspect-square">
            <Image
                src={imageUrl || '/images/artists/default.jpg'}
                alt={name || 'Artist'}
                fill
                className="w-full h-full object-cover object-center"
            />
            {name && (
                <div className="absolute text-[19px] font-gothic bottom-2 left-1/2 -translate-x-1/2 text-tec-white text-center uppercase text-stroke-black-1 w-[95%]">
                    {name}
                </div>
            )}
        </div>
    );
}