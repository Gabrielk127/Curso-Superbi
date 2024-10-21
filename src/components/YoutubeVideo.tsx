"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const YouTubeVideo = () => {
  const videoUrl = "https://www.youtube.com/watch?v=klf2i7orNPs"; // URL corrigida
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Atualiza o estado quando o componente é montado no cliente
  }, []);

  return (
    <div
      style={{
        display: "flex", // Usar flexbox para centralização
        justifyContent: "center", // Centraliza horizontalmente
        alignItems: "center", // Centraliza verticalmente
        overflow: "hidden",
        borderRadius: "32px", // Arredonda as bordas
        padding: "32px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%", // Ocupa toda a largura disponível
          maxWidth: "1080px", // Limita a largura máxima
          aspectRatio: "16 / 9", // Define a proporção desejada
          borderRadius: "15px", // Arredonda as bordas do iframe
          overflow: "hidden", // Garante que as bordas arredondadas funcionem
        }}
      >
        <ReactPlayer
          url={videoUrl}
          playing={isClient} // Reproduz apenas se for o cliente
          width="100%"
          height="100%"
          style={{ borderRadius: "15px" }} // Adiciona bordas arredondadas ao player
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;
