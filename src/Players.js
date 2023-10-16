import React, { useState } from 'react';

const players = [
  { name: "Thibaut Courtois", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406706&ssbinary=true" },
  { name: "Andriy Lunin", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406814&ssbinary=true" },
  { name: "Kepa Arrizabalaga", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436558378&ssbinary=true" },
  { name: "Dani Carvajal", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406531&ssbinary=true" },
  { name: "Éder Militão", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406760&ssbinary=true" },
  { name: "David Alaba", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406870&ssbinary=true" },
  { name: "Nacho", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436406592&ssbinary=true" },
  { name: "Lucas Vázquez", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407511&ssbinary=true" },
  { name: "Fran García", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436699613&ssbinary=true" },
  { name: "Antonio Rüdiger", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407681&ssbinary=true" },
  { name: "Ferland Mendy", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407573&ssbinary=true" },
  { name: "Jude Bellingham", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436699663&ssbinary=true" },
  { name: "Toni Kroos", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407348&ssbinary=true" },
  { name: "Luka Modrić", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407421&ssbinary=true" },
  { name: "Eduardo Camavinga", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407627&ssbinary=true" },
  { name: "Federico Valverde", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436407293&ssbinary=true" },
  { name: "Aurélien Tchouaméni", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436408398&ssbinary=true" },
  { name: "Dani Ceballos", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436408158&ssbinary=true" },
  { name: "Arda Güler", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436700361&ssbinary=true" },
  { name: "Vinícius Júnior", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436700361&ssbinary=true" },
  { name: "Rodrygo", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436408310&ssbinary=true" },
  { name: "Joselu", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203436701166&ssbinary=true" },
  { name: "Brahim Díaz", image: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203437215117&ssbinary=true" },
];

function Players() {
  const [currentPlayer, setCurrentPlayer] = useState("");

  const displayRandomPlayer = () => {
    const randomIndex = Math.floor(Math.random() * players.length);
    setCurrentPlayer(players[randomIndex].name);
  };

  return (
    <div className="Players">
      <h1 className="centeredText">{currentPlayer}</h1>
      <img src={players.find(player => player.name === currentPlayer)?.image} alt={currentPlayer} />
      <button onClick={displayRandomPlayer}>Display Random Real Madrid Player</button>
    </div>
  );
}

export default Players;
