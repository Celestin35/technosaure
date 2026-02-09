import ArtistCard from "./ArtistCard";

export default function Programmation() {

    const artists = [
        { name: "Adam beyer", imageUrl: "/images/artists/adam-beyer.jpg" },
        { name: "Marie Vaunt", imageUrl: "/images/artists/marie-vaunt.jpg" },
        { name: "Charlotte de Witte", imageUrl: "/images/artists/charlotte-de-witte.jpg" },
        { name: "Bart Skills", imageUrl: "/images/artists/bart-skills.jpg" },
        { name: "Metodi", imageUrl: "/images/artists/metodi.jpg" },
        { name: "HNTR", imageUrl: "/images/artists/hntr.jpg" },
        { name: "Yellowheads", imageUrl: "/images/artists/yellowheads.jpg" },
        { name: "Space 92", imageUrl: "/images/artists/space92.jpg" },
    ];

    return (
        <section id="programmation" className="container py-10 md:py-15">
            <h2 className="heading-2 text-center mb-10 text-tec-black">Programmation</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
                {artists.map((artist) => (
                    <ArtistCard key={artist.name} name={artist.name} imageUrl={artist.imageUrl} />
                ))}
            </div>
        </section>
    );
}
