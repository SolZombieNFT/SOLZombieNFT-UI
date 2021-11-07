export default function Youtube({youtubeId}: any) {
    return (

        <iframe
            style={{
                width: "100%",
                height: "100%"
            }}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=0&amp;modestbranding=1&amp;wmode=transparent`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="1"
        />

    );
};