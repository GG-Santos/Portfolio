import React, { useState, useEffect } from "react";

const fetchRandomBibleVerse = async () => {
    const response = await fetch("https://labs.bible.org/api/?passage=random&type=json&callback=amen");
    const textData = await response.text();
    const startIndex = textData.indexOf("{");
    const endIndex = textData.lastIndexOf("}");
    const jsonString = textData.substring(startIndex, endIndex + 1);
    const verseData = JSON.parse(jsonString);
    return verseData;
};

const getRandomColor = () => {
    const colors = ["var(--clr-blue)", "var(--clr-orange)", "var(--clr-pink)"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomTextColorClass = () => {
    // Replace with logic to get a random CSS class for text color
    return "random-text-color";
};

export const BibleVerse = () => {
    const [verse, setVerse] = useState({ text: "", bookname: "", chapter: "", verse: "" });
    const [loading, setLoading] = useState(true);
    const [buttonColor, setButtonColor] = useState("var(--clr-primary-txt)");

    const loadVerse = async () => {
        setLoading(true);
        const verseData = await fetchRandomBibleVerse();
        setVerse(verseData);
        setLoading(false);
    };

    useEffect(() => {
        loadVerse();
    }, []);

    return (
        <div className="bible-verse">
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={loadVerse}
                onMouseEnter={() => setButtonColor(getRandomColor())}
                onMouseLeave={() => setButtonColor("var(--clr-primary-txt)")}
            >
                Reload Verse
            </button>
            <div>
                {loading ? (
                    "Connecting to the Holy Ghost..."
                ) : (
                    <>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: verse.text
                                    .replaceAll("Jesus", `<span class="${getRandomTextColorClass()}">Jesus</span>`)
                                    .replaceAll("Christ", `<span class="${getRandomTextColorClass()}">Christ</span>`)
                                    .replaceAll("Savior", `<span class="${getRandomTextColorClass()}">Savior</span>`)
                                    .replaceAll("Lord", `<span class="${getRandomTextColorClass()}">Lord</span>`)
                                    .replaceAll("God", `<span class="${getRandomTextColorClass()}">God</span>`)
                                    .replaceAll("Faith", `<span class="${getRandomTextColorClass()}">Faith</span>`),
                            }}
                        />
                        <div className="reference">
                            {verse.bookname} {verse.chapter}:{verse.verse}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
