import { createContext, useContext, useState } from "react";

const CardMetaContext = createContext(null);

const COLOR_SETS = [
    ["#000", "#7dc3eb", "#748C70"],
    ["#909225", "#19418e", "#000"],
    ["#d0a5ea", "#909225", "#748C70"],
    ["#CA2929", "#000", "#909225"],
    ["#d0a5ea", "#19418e"],
    ["#000"],
    ["#7dc3eb", "#d0a5ea"]

];

const FALLBACK_IMAGES = [
    "/Modimal-React/images/imageCloth1.png",
    "/Modimal-React/images/imageCloth2.png",
    "/Modimal-React/images/imageCloth3.png"
];

export const CardMetaProvider = ({ children }) => {
    const [cardMeta, setCardMeta] = useState({});

    const initCardMeta = (products) => {
        const meta = {};
        products.forEach((product, index) => {
            meta[product.id] = {
                colors: COLOR_SETS[index % COLOR_SETS.length],
                fallbackImage: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
            };
        });
        setCardMeta(meta);
    };

    const getCardMeta = (productId) => cardMeta[productId] ?? null;

    return (
        <CardMetaContext.Provider value={{ initCardMeta, getCardMeta }}>
            {children}
        </CardMetaContext.Provider>
    );
};

export const useCardMeta = () => {
    const ctx = useContext(CardMetaContext);
    if (!ctx) throw new Error("useCardMeta must be used inside CardMetaProvider");
    return ctx;
};