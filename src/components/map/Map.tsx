import { useEffect, useRef, useState } from "react";

type Point = {
  coords: [number, number];
  title: string;
};

export default function Map() {
  const VITE_YANDEX_MAPS_API_KEY = import.meta.env.VITE_YANDEX_MAPS_API_KEY;
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [height, setHeight] = useState(window.innerHeight);

  const points: Point[] = [
    { coords: [49.806, 73.085], title: "Центр Караганды" },
    { coords: [49.810, 73.100], title: "Рынок" },
    { coords: [49.800, 73.070], title: "Парк" },
    { coords: [49.820, 73.090], title: "ЖК Новый" },
  ];

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${VITE_YANDEX_MAPS_API_KEY}&lang=ru_RU`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        const map = new window.ymaps.Map(mapRef.current, {
          center: [49.806, 73.085],
          zoom: 13,
        });

        points.forEach((point) => {
          // @ts-ignore
          map.geoObjects.add(
            new window.ymaps.Placemark(
              point.coords,
              {
                balloonContent: point.title,
              },
              {
                preset: "islands#dotIcon", 
                iconColor: "#136E65",
              }
            )
          );
        });

        mapInstanceRef.current = map;
      });
    };
  }, [VITE_YANDEX_MAPS_API_KEY]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: `${height}px`,
        overflow: "hidden",
      }}
    />
  );
}
