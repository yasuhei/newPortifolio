import MyPhoto from "../../assets/eu.png";

export function About() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section>
        <div className="h-auto bg-gray-100 flex justify-center items-center flex-col w-full py-10  ">
          <div className="flex justify-around items-center w-full">
            <figure>
              <img
                src={MyPhoto}
                alt="Yasuhei nakamura"
                className="rounded-full w-96 h-96 object-cover brightness-[45%]"
              />
            </figure>
            <aside>
              <div className="w-80 ">
                <h3 className="text-[#1a1a1a] text-2xl font-bold">
                  Hi! I'm Yasuhei Nakamura,
                </h3>
                <p className="text-[#1a1a1a] ml-1 text-lg font-normal">
                  {`${
                    currentYear - 1991
                  } years old, my academic background is Production Engineering.
                  
                  ith the Reactjs library, typescript, tailwindcss and the angular framework, I develop modern and high quality interfaces, focused on performance, animations, responsiveness and SEO. I'm improving on the backend to be a fullstack programmer in the future. 


                  `}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
