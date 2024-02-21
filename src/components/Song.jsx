import sweetChariotImg from "../assets/sweetChariotImg.jpg";

const Song = ({ title }) => {
  const cssButton =
    "text-stone-50 bg-stone-800 w-32 py-2 rounded-md border border-stone-50/50  hover:border-none  hover:bg-stone-700 hover:font-bold";

  return (
    <section className="flex mx-auto mt-16 bg-stone-900 justify-between w-[650px]  p-4 rounded-lg ">
      <div>
        <img
          className="rounded-md shadow-md shadow-stone-950 "
          src={sweetChariotImg}
          alt="sweetchariot image"
        />
        <div className="flex justify-between m-2 text-stone-50 items-center">
          <h1>{title}</h1>
          <p className="text-2xl font-bold">27%</p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[300px] ">
        <div className="">
          <div className="flex justify-around mb-4 ">
            <p>
              <button className={cssButton}>Video</button>
            </p>
            <p>
              <button className={cssButton}>Lyrics</button>
            </p>
          </div>
          <div className="flex justify-around ">
            <p>
              <button className={cssButton}>Tabs</button>
            </p>
            <p>
              <button className={cssButton}>Tutorial</button>
            </p>
          </div>
        </div>
        <div className=" mb-2 w-full text-center">
          <button className="text-stone-50 text-3xl w-[277px] bg-stone-800 border border-stone-50/40 py-6 rounded-md hover:border-none hover:bg-stone-700 hover:font-semibold  ">
            Progress
          </button>
        </div>
      </div>
    </section>
  );
};

export default Song;
