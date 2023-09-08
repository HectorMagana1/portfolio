import './app.css'
import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">

          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            {/* <h1 className="font-burtons text-xl">developedbyed</h1> */}
            <ul className="flex items-center">
              <li>
                {/* <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                /> */}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hector Magaña
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Dedicated to learning and implementing creative solutions with a strong skillset in HTML, CSS, 
            JavaScript, React, Express JS, Node JS, MongoDB, and git.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/hector8423/"><AiFillLinkedin /></a>
              <a href="https://github.com/HectorMagana1"><AiFillGithub /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              {/* <Image src={null} layout="fill" objectFit="cover" /> */}
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit aliquam quo 
              quibusdam id nemo distinctio laborum, accusamus autem culpa?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={null} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Front End
              </h3>
              <p className="py-2">
                Describing my front end experience and listing technologies I use.
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={null} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Back End
              </h3>
              <p className="py-2">
              Describing my back end experience and listing technologies I use.
              </p>
              {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
            </div>
            {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={null} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Text describing my projects Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Harum, reiciendis?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Further describing my abilities Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Cumque magni nostrum illum esse, tempore consequatur!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <div className='bg-white rounded-lg object-cover h-96'>Project1</div>
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              <div className='bg-white rounded-lg object-cover h-96'>Project2</div>
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              <div className='bg-white rounded-lg object-cover h-96'>Project3</div>
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              <div className='bg-white rounded-lg object-cover h-96'>Project4</div>
              {/* <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              /> */}
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={null}
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
