import { useState } from "react";
import EmptySong from "./components/EmptySong";
import Header from "./components/Header";
import Song from "./components/Song";

function App() {
  const [songs, setSongs] = useState(["new"]);

  return (
    <main className="bg-stone-950 h-full">
      <Header />
      {songs.length < 1 ? (
        <EmptySong />
      ) : (
        <Song title="Swing Low, Sweet Chariot" />
      )}

      <p className="pt-16 text-center">
        <button className="text-stone-300  text-3xl font-thin border border-stone-50/30  px-6 py-2 rounded-lg hover:bg-stone-900 mb-40">
          + Add Song
        </button>
      </p>
    </main>
  );
}

export default App;
