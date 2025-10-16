import { useState, useEffect } from "react";

type ImageType = "normal" | "elite2" | "skin";

export function useCharacterImage() {
  const [operatorName, setOperatorName] = useState("");
  const [imageType, setImageType] = useState<ImageType>("normal");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skinUrls, setSkinUrls] = useState<string[]>([]);
  const [skinIndex, setSkinIndex] = useState(0);

  const base = "https://arknights.wiki.gg/images";

  const buildImageUrl = (type: ImageType, index = 1) => {
    const suffix =
      type === "normal" ? "" : type === "elite2" ? "_Elite_2" : `_Skin_${index}`;
    return `${base}/${operatorName}${suffix}.png?format=original`;
  };

  const checkImageExists = (url: string): Promise<boolean> =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });

  useEffect(() => {
    if (!operatorName) return;
    setLoading(true);
    setError("");
    setSkinUrls([]);
    setSkinIndex(0);

    const loadImage = async () => {
      if (imageType === "skin") {
        const foundSkins: string[] = [];
        for (let i = 1; i <= 6; i++) {
          const url = buildImageUrl("skin", i);
          const exists = await checkImageExists(url);
          if (exists) foundSkins.push(url);
          else break; // stop if not found
        }
        if (foundSkins.length > 0) {
          setSkinUrls(foundSkins);
          setImageUrl(foundSkins[0]);
        } else {
          setImageUrl("");
          setError("No skins found for this operator.");
        }
      } else {
        const url = buildImageUrl(imageType);
        const exists = await checkImageExists(url);
        if (exists) setImageUrl(url);
        else setError("Image not found for this version.");
      }
      setLoading(false);
    };

    loadImage();
  }, [operatorName, imageType]);

  const nextSkin = () => {
    if (skinUrls.length > 0)
      setSkinIndex((prev) => (prev + 1) % skinUrls.length);
  };

  useEffect(() => {
    if (imageType === "skin" && skinUrls.length > 0)
      setImageUrl(skinUrls[skinIndex]);
  }, [skinIndex]);

  const setType = (type: ImageType) => setImageType(type);

  return {
    operatorName,
    setOperatorName,
    imageType,
    setType,
    imageUrl,
    loading,
    error,
    skinUrls,
    nextSkin,
    skinIndex,
  };
}
