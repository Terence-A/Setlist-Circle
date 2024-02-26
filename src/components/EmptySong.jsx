const EmptySong = () => {
  return (
    <section className="flex flex-col items-center mt-32">
      <h2 className="text-stone-200 text-3xl font-bold mb-6">
        No Songs in your Setlist yet!
      </h2>
      <p className="text-stone-400 mb-6">Add songs to your setlist</p>
      <p className="text-stone-400">Try Adding some songs to learn!</p>
    </section>
  );
};

export default EmptySong;
