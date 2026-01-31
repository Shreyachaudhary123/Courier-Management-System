import React from 'react'
import Navbar from './Navbar';
const Tips = () => {
  return (
    <div className='container flex flex-col items-center justify-center'>
      <Navbar />
      <div class="md:ml-20 grid grid-cols-1 mt-6 gap-4 md:grid-cols-2 hover:bg-violet-600">
        <div
          class="block transition duration-500 hover:scale-105 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://th.bing.com/th/id/OIP.agbG0eOG4lytJU0fyuPIxwHaE9?pid=ImgDet&rs=1"
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Earthquake
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Violent seismic activity underground generates powerful waves above the ground that cause ground rupture and lead to a massive collapse of buildings, roads, bridges, or whatever comes in their field of activity.
            </p>
            <button
              onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Earthquake'}
              type="button"
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
        <div
          class="block transition duration-500 hover:scale-105 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://i.pinimg.com/originals/8f/b4/bd/8fb4bda5db76f41126faf15b65eaee71.jpg"
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Tsunami
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Tsunamis are massive water waves produced in seawater due to an earthquake which is generated within the Pacific Ocean floor. Large tsunamis travel from the ocean floor to the sea surface and can cause damage beyond measure. Due to the very high water levels these waves can cause heavy flooding.
            </p>
            <button
              onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Tsunami'}
              type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
        <div
          class="block transition duration-500 hover:scale-105 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://th.bing.com/th/id/OIP.f0XdmPu7nTCP96s78e89CAHaEK?pid=ImgDet&rs=1"
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Hurricane
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Hurricanes are generally tropical cyclones, which are massive low-pressure systems that attract thunderstorm activity. They are the most potent force of nature, causing enormous destruction in one go. Strong winds accompany them at high speeds up to 110mph, and, heavy rainfall, typhoons and surge floods.
            </p>
            <button
              onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Tropical_cyclone'}
              type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
        <div
          class="block transition duration-500 hover:scale-105 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://th.bing.com/th/id/OIP.U71NDj6YJ8_Zzh4D8Sv4pQHaFN?pid=ImgDet&rs=1"
              alt="" />
          </a>
          <div class="p-6">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Landslide
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              A landslide is the movement of rocks or Earth that usually occurs on a large land area on a slope. Landslides are caused by rain, earthquakes, volcanoes, snowmelt or erosion that makes the slope unstable.
            </p>
            <button
              onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Landslide'}
              type="button"
              class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips