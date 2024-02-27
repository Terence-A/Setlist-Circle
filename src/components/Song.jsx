import sweetChariotImg from "../assets/sweetChariotImg.jpg";

const Song = ({ title, progress, btnOne, btnTwo }) => {
  const cssButton =
    "text-stone-50 bg-stone-800 w-32 py-2 rounded-md border border-stone-50/50  hover:border-none  hover:bg-stone-700 hover:font-bold";

  return (
    <>
      <p className="text-stone-50 text-xl mt-12 font-semibold border-b border-b-stone-50/30 w-3/4 mx-auto">
        <span className="ml-4">Setlist One</span>
      </p>
      <section className="flex mx-auto mt-16 bg-stone-900 justify-between w-[625px]  p-4 rounded-lg ">
        <div>
          <img
            className="rounded-md shadow-md shadow-stone-950 w-72 h-44"
            src={sweetChariotImg}
            alt="sweetchariot image"
          />
          <div className="flex justify-between m-2 text-stone-50 items-center">
            <h1>{title}</h1>
            <p className="text-2xl font-bold">{progress}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[300px] ">
          <div>
            <div className="flex justify-around mb-4 ">
              <p>
                <a
                  href="https://www.youtube.com/watch?v=b0q-LyGiCbs&t=1s"
                  target="_blank"
                >
                  <button className={cssButton}>{btnOne}</button>
                </a>
              </p>
              <p>
                <a
                  href="https://www.songsforteaching.com/folk/swinglowsweetchariot.htm"
                  target="_blank"
                >
                  <button className={cssButton}>{btnTwo}</button>
                </a>
              </p>
            </div>
            <div className="flex justify-around ">
              <p>
                <button className={cssButton}>Tabs</button>
              </p>
              <p>
                <button className="text-stone-600 bg-stone-800 w-32 py-2 rounded-md border border-stone-50/20  hover:border-none  hover:bg-stone-700 hover:font-bold font-bold hover:text-stone-50 ">
                  EMPTY
                </button>
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
    </>
  );
};

export default Song;
