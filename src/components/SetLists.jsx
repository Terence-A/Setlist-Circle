const SetLists = () => {
  const cssButton =
    "text-stone-50 bg-stone-800 w-64 h-20  py-2 rounded-md border text-lg  border-stone-50/50  hover:border-none  hover:bg-stone-700 hover:font-bold ";

  const listCss =
    "flex justify-between items-center bg-stone-600 px-4 py-2 rounded-sm border-stone-50/60 border hover:border-stone-600 hover:bg-stone-700 hover:font-semibold";
  return (
    <div className="bg-stone-950 h-full mt-20 flex justify-center ">
      <section className="rounded-lg border-2  border-stone-50/40  h-[700px] w-[1200px] p-12">
        <div className="flex justify-between  ">
          <div className="flex flex-col space-y-6 ">
            <button className={cssButton}>SetList One</button>
            <button className={cssButton}>SetList One</button>
            <button className={cssButton}>SetList One</button>
            <button className={cssButton}>SetList One</button>
            <button className={cssButton}>SetList One</button>
            <button className={cssButton}>SetList One</button>
          </div>

          <div className="bg-stone-800 rounded-lg p-8 h-[600px]">
            <div className="bg-stone-950 h-full p-6 rounded-lg shadow-md shadow-stone-900">
              <div className="border-b border-b-stone-50/40 pb-4 flex justify-between w-[700px] ">
                <h2 className="text-stone-50 text-xl font-semibold">
                  Setlist One
                </h2>
                <button className="text-stone-50 bg-stone-800 w-24 h-8  rounded-md border border-stone-50/50  hover:border-none  hover:bg-stone-700 hover:font-bold">
                  List
                </button>
              </div>
              <div className="mt-8 space-y-4 flex flex-col">
                <button className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </button>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
                <div className={listCss}>
                  <h2 className="text-stone-300 ">Song One</h2>
                  <p className="text-stone-300 ">60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetLists;
