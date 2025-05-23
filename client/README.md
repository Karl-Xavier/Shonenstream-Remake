html

<div class="ybplayer__container relative outline-none ease-in-out bg-black text-white overflow-hidden cursor-auto h-full w-full snipcss-G1MmF" role="button" tabindex="0">
    <div class="px-2 absolute bottom-0 left-0 w-full z-10 from-black/70 to-black/5 bg-gradient-to-t transform duration-500 translate-y-0 opacity-100">
        <div class="relative">
            <div class="flex justify-center relative tooltip-container bg-zinc-500 rounded-sm ybplayer__slider w-full">
                <div class="tooltip pointer-events-none bg-gray-500 bg-opacity-40 font-bold absolute rounded px-2 style-LAgTo" title="current tooltip" aria-hidden="true" id="style-LAgTo">00:00</div>
                <div class="tooltip pointer-events-none bg-gray-500 bg-opacity-40 font-bold absolute rounded px-2 style-oSpj2" title="hover tooltip" aria-hidden="true" id="style-oSpj2">00:53</div>
                <input class="yubi_video-range w-full h-full style-4efTf" step="0.01" max="1420.015011" min="0" type="range" value="0.288238" id="style-4efTf">
            </div>
            <canvas id="player-buffer-canvas--1" class="overflow-hidden rounded-sm pointer-events-none absolute bottom-0 w-full h-[0.6rem] opacity-50"></canvas>
        </div>
        <div class="ybplayer__controls py-2 flex justify-between w-full">
            <div class="ybplayer__controls-left z-[1] flex gap-3 md:gap-5 items-center"><button title="play" class="pl-2"><svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="w-8 h-8">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(5.3999999999999995,5.3999999999999995), scale(0.55)"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"></path>
                        </g>
                    </svg></button><button title="next"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="w-5 h-5">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.60439 4.23093C4.94586 3.73136 4 4.20105 4 5.02762V18.9724C4 19.799 4.94586 20.2686 5.60439 19.7691L14.7952 12.7967C15.3227 12.3965 15.3227 11.6035 14.7952 11.2033L5.60439 4.23093ZM2 5.02762C2 2.54789 4.83758 1.13883 6.81316 2.63755L16.004 9.60993C17.5865 10.8104 17.5865 13.1896 16.004 14.3901L6.81316 21.3625C4.83758 22.8612 2 21.4521 2 18.9724V5.02762Z" fill="#ffffff"></path>
                            <path d="M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z" fill="#ffffff"></path>
                        </g>
                    </svg></button>
                <div class="ybplayer-time flex gap-1"><span>00:00</span><span class="hidden md:block">/</span><span class="hidden md:block">23:40</span></div>
                <div class="yubi_video__volume items-center align-middle gap-3 group hidden xs:flex"><button aria-label="volume" title="volume"><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="w-6 h-6">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg></button>
                    <div class="flex justify-center relative tooltip-container bg-zinc-500 rounded-sm w-full">
                        <div class="tooltip pointer-events-none bg-gray-500 bg-opacity-40 font-bold absolute rounded px-2 style-pr7ME" title="current tooltip" aria-hidden="true" id="style-pr7ME">100.00</div>
                        <div class="tooltip pointer-events-none bg-gray-500 bg-opacity-40 font-bold absolute rounded px-2 style-Dbk6E" title="hover tooltip" aria-hidden="true" id="style-Dbk6E">0.00</div><input class="yubi_video-range w-full h-full active style-iUKtG" step="0.01" max="1" min="0" type="range" value="1" id="style-iUKtG">
                    </div>
                </div>
            </div>
            <div class="ybplayer__controls-right z-[1] flex gap-3 md:gap-5 items-center align-middle">
                <div class="relative ybplayer__menu flex justify-center font-semibold"><button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="w-7 h-7">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg></button>
                    <div class="absolute bottom-full right-3 w-auto bg-white text-black shadow-sm rounded-sm opacity-0 transition-all duration-500 pointer-events-none transform translate-y-[1rem]">
                        <ul class="w-auto max-w-full text-xs sm:text-md min-w-[5rem] xs:min-w-[10rem] max-h-[12rem] xs:max-h-[13rem] md:max-h-[20rem] overflow-y-auto"><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">Speed<span class="whitespace-nowrap">1x</span></button>
                            <ul class="hidden"><button class="hover:bg-gray-200 w-full py-2 px-4 items-center flex justify-start gap-0"><svg fill="currentColor" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="0 0 42 42" xml:space="preserve" stroke="currentColor" class="w-4 h-4 pr-2 text-black">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <polygon fill-rule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "></polygon>
                                        </g>
                                    </svg>Speed</button>
                                <hr class="rounded"><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">10x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">6x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">4x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">3x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">2x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">1.5x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between bg-gray-200">1x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">0.5x</button><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">0.25x</button>
                            </ul><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between">Subtitle<span class="whitespace-nowrap">disable</span></button>
                            <ul class="hidden"><button class="hover:bg-gray-200 w-full py-2 px-4 items-center flex justify-start gap-0"><svg fill="currentColor" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="0 0 42 42" xml:space="preserve" stroke="currentColor" class="w-4 h-4 pr-2 text-black">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <polygon fill-rule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "></polygon>
                                        </g>
                                    </svg>Subtitle</button>
                                <hr class="rounded"><button class="hover:bg-gray-200 w-full py-2 px-4 flex items-center gap-10 justify-between bg-gray-200">disable</button>
                            </ul>
                        </ul>
                    </div>
                </div><button><svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                        <path d="M216,44H40A20.02229,20.02229,0,0,0,20,64V192a20.02229,20.02229,0,0,0,20,20H216a20.02229,20.02229,0,0,0,20-20V64A20.02229,20.02229,0,0,0,216,44ZM44,68H212v48H144a20.02229,20.02229,0,0,0-20,20v52H44ZM148,188V140h64v48Z"></path>
                    </svg></button><button class="pr-2"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" class="w-6 h-6">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.654v.291a10 10 0 0 0-1.763 1.404l-2.944 2.944a1 1 0 0 0 1.414 1.414l2.933-2.932A9.995 9.995 0 0 0 19.05 6h.296l-.09.39A9.998 9.998 0 0 0 19 8.64v.857a1 1 0 1 0 2 0V4.503a1.5 1.5 0 0 0-1.5-1.5L14.5 3a1 1 0 1 0 0 2h.861a10 10 0 0 0 2.249-.256l.39-.09zM4.95 18a10 10 0 0 1 1.41-1.775l2.933-2.932a1 1 0 0 1 1.414 1.414l-2.944 2.944A9.998 9.998 0 0 1 6 19.055v.291l.39-.09A9.998 9.998 0 0 1 8.64 19H9.5a1 1 0 1 1 0 2l-5-.003a1.5 1.5 0 0 1-1.5-1.5V14.5a1 1 0 1 1 2 0v.861a10 10 0 0 1-.256 2.249l-.09.39h.295z" fill="#ffffff"></path>
                        </g>
                    </svg></button>
            </div>
        </div>
    </div><video class="ybplayer-video h-full w-full select-none" poster="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174802-ILahIZlNWN3R.jpg" autoplay="" src="https://animeyubi.com/api/v4/pahe/videos/742426/download/"></video>
</div>




css


@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'); 
  body {  
    line-height:inherit;
    font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-weight:500;
  }  
body { 
/* CSS Variables that may have been missed get put on body */ 
    --tw-translate-x:  0;  
    --tw-translate-y:  0;  
    --tw-rotate:  0;  
    --tw-skew-x:  0;  
    --tw-skew-y:  0;  
    --tw-scale-x:  1;  
    --tw-scale-y:  1;  
    --tw-ring-offset-shadow:  0 0 #0000;  
    --tw-ring-shadow:  0 0 #0000;  
    --tw-shadow:  0 0 #0000;  
    --tw-bg-opacity:  1;  
    --tw-text-opacity:  1;  
    --tw-translate-x:  0;  
    --tw-translate-y:  0;  
    --tw-rotate:  0;  
    --tw-skew-x:  0;  
    --tw-skew-y:  0;  
    --tw-scale-x:  1;  
    --tw-scale-y:  1;  
    --tw-ring-offset-shadow:  0 0 #0000;  
    --tw-ring-shadow:  0 0 #0000;  
    --tw-shadow:  0 0 #0000;  
    --tw-translate-x:  0;  
    --tw-translate-y:  0;  
    --tw-rotate:  0;  
    --tw-skew-x:  0;  
    --tw-skew-y:  0;  
    --tw-scale-x:  1;  
    --tw-scale-y:  1;  
    --tw-ring-offset-shadow:  0 0 #0000;  
    --tw-ring-shadow:  0 0 #0000;  
    --tw-shadow:  0 0 #0000;  
    --tw-translate-y:  0px;  
    --tw-gradient-from:  rgb(0 0 0 / .7) var(--tw-gradient-from-position);  
    --tw-gradient-to:  rgb(0 0 0 / 0) var(--tw-gradient-to-position);  
    --tw-gradient-stops:  var(--tw-gradient-from), var(--tw-gradient-to); 
    --tw-gradient-to:  rgb(0 0 0 / .05) var(--tw-gradient-to-position); 
    --tw-bg-opacity:  1;  
    --tw-bg-opacity:  1;  
    --tw-bg-opacity:  .4; 
    --range-height:  .6rem;  
    --range-height-hover:  .6rem;  
    --range-fill-color:  hsla(0, 0%, 69%, 0);  
    --range-fill-progress-color:  rgba(236, 72, 153, 1);  
    --tw-translate-y:  1rem;  
    --tw-bg-opacity:  1;  
    --tw-text-opacity:  1;  
    --tw-shadow:  0 1px 2px 0 rgb(0 0 0 / .05);  
    --tw-shadow-colored:  0 1px 2px 0 var(--tw-shadow-color);  
    --tw-bg-opacity:  1;  
    --tw-bg-opacity:  1;  
} 

* { 
    --tw-translate-x: 0; 
    --tw-translate-y: 0; 
    --tw-rotate: 0; 
    --tw-skew-x: 0; 
    --tw-skew-y: 0; 
    --tw-scale-x: 1; 
    --tw-scale-y: 1; 
    --tw-ring-offset-shadow: 0 0 #0000; 
    --tw-ring-shadow: 0 0 #0000; 
    --tw-shadow: 0 0 #0000; 
} 

* { 
    box-sizing: border-box; 
    border-width: 0; 
    border-style: solid; 
    border-color: #e5e7eb;
} 

.relative { 
    position: relative;
} 

.w-full { 
    width: 100%;
} 

.overflow-hidden { 
    overflow: hidden;
} 

.bg-black { 
    --tw-bg-opacity: 1; 
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
} 

@media (min-width: 768px){ 
  .md\:h-\[40rem\] { 
    height: 40rem;
  } 
}     

.flex { 
    display: flex;
} 

.transition-all { 
    transition-property: all; 
    transition-timing-function: cubic-bezier(.4,0,.2,1); 
    transition-duration: .15s;
} 

body { 
    margin: 0; 
    line-height: inherit;
} 

body { 
    padding-bottom: 0!important;
} 

html { 
    line-height: 1.5; 
    -webkit-text-size-adjust: 100%; 
    -moz-tab-size: 4; 
    -o-tab-size: 4; 
    tab-size: 4; 
    font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"; 
    font-feature-settings: normal; 
    font-variation-settings: normal; 
    -webkit-tap-highlight-color: transparent;
} 

html { 
    font-family: Poppins,system-ui,sans-serif;
} 

html { 
    scroll-behavior: smooth!important; 
    font-weight: 500;
} 

:root { 
    --toastify-color-info: #3498db; 
    --toastify-color-success: #07bc0c; 
    --toastify-color-warning: #f1c40f; 
    --toastify-color-error: hsl(6, 78%, 57%); 
    --toastify-icon-color-info: var(--toastify-color-info); 
    --toastify-icon-color-success: var(--toastify-color-success); 
    --toastify-icon-color-warning: var(--toastify-color-warning); 
    --toastify-icon-color-error: var(--toastify-color-error); 
    --toastify-toast-offset: 16px; 
    --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top)); 
    --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right)); 
    --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left)); 
    --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom)); 
    --toastify-color-progress-info: var(--toastify-color-info); 
    --toastify-color-progress-success: var(--toastify-color-success); 
    --toastify-color-progress-warning: var(--toastify-color-warning); 
    --toastify-color-progress-error: var(--toastify-color-error); 
} 

:root { 
    --color-nav: 255, 255, 255; 
    --background-color-primary: 237, 241, 245; 
    --background-color-nav: 21, 34, 50;
} 

[role="button"] { 
    cursor: pointer;
} 

.h-full { 
    height: 100%;
} 

.cursor-auto { 
    cursor: auto;
} 

.text-white { 
    --tw-text-opacity: 1; 
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
} 

.outline-none { 
    outline: 2px solid transparent; 
    outline-offset: 2px;
} 

.ease-in-out { 
    transition-timing-function: cubic-bezier(.4,0,.2,1);
} 

*,:before,:after { 
    --tw-translate-x: 0; 
    --tw-translate-y: 0; 
    --tw-rotate: 0; 
    --tw-skew-x: 0; 
    --tw-skew-y: 0; 
    --tw-scale-x: 1; 
    --tw-scale-y: 1; 
    --tw-ring-offset-shadow: 0 0 #0000; 
    --tw-ring-shadow: 0 0 #0000; 
    --tw-shadow: 0 0 #0000; 
} 

*,:before,:after { 
    box-sizing: border-box; 
    border-width: 0; 
    border-style: solid; 
    border-color: #e5e7eb;
} 

:backdrop { 
    --tw-translate-x: 0; 
    --tw-translate-y: 0; 
    --tw-rotate: 0; 
    --tw-skew-x: 0; 
    --tw-skew-y: 0; 
    --tw-scale-x: 1; 
    --tw-scale-y: 1; 
    --tw-ring-offset-shadow: 0 0 #0000; 
    --tw-ring-shadow: 0 0 #0000; 
    --tw-shadow: 0 0 #0000; 
} 

:-webkit-scrollbar { 
    width: 7px; 
    height: 7px;
} 

:-webkit-scrollbar-thumb { 
    background: rgb(var(--color-nav));
} 

:-webkit-scrollbar-track { 
    background: rgb(var(--background-color-nav));
} 

:-webkit-scrollbar-track-piece { 
    background: transparent;
} 

:-webkit-scrollbar-thumb:hover { 
    background: rgb(var(--color-nav));
} 

.absolute { 
    position: absolute;
} 

.bottom-0 { 
    bottom: 0;
} 

.left-0 { 
    left: 0;
} 

.z-10 { 
    z-index: 10;
} 

.translate-y-0 { 
    --tw-translate-y: 0px; 
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} 

.transform { 
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} 

.bg-gradient-to-t { 
    background-image: linear-gradient(to top,var(--tw-gradient-stops));
} 

.from-black\/70 { 
    --tw-gradient-from: rgb(0 0 0 / .7) var(--tw-gradient-from-position); 
    --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position); 
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
} 

.to-black\/5 { 
    --tw-gradient-to: rgb(0 0 0 / .05) var(--tw-gradient-to-position);
} 

.px-2 { 
    padding-left: .5rem; 
    padding-right: .5rem;
} 

.opacity-100 { 
    opacity: 1;
} 

.duration-500 { 
    transition-duration: .5s;
} 

video { 
    display: block; 
    vertical-align: middle;
} 

video { 
    max-width: 100%; 
    height: auto;
} 

.select-none { 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    user-select: none;
} 

.justify-between { 
    justify-content: space-between;
} 

.py-2 { 
    padding-top: .5rem; 
    padding-bottom: .5rem;
} 

.justify-center { 
    justify-content: center;
} 

.rounded-sm { 
    border-radius: .125rem;
} 

.bg-zinc-500 { 
    --tw-bg-opacity: 1; 
    background-color: rgb(113 113 122 / var(--tw-bg-opacity, 1));
} 

canvas { 
    display: block; 
    vertical-align: middle;
} 

.pointer-events-none { 
    pointer-events: none;
} 

.h-\[0\.6rem\] { 
    height: .6rem;
} 

.opacity-50 { 
    opacity: .5;
} 

.z-\[1\] { 
    z-index: 1;
} 

.items-center { 
    align-items: center;
} 

.gap-3 { 
    gap: .75rem;
} 

@media (min-width: 768px){ 
  .md\:gap-5 { 
    gap: 1.25rem;
  } 
}     

.align-middle { 
    vertical-align: middle;
} 

.rounded { 
    border-radius: .25rem;
} 

.bg-gray-500 { 
    --tw-bg-opacity: 1; 
    background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));
} 

.bg-opacity-40 { 
    --tw-bg-opacity: .4;
} 

.font-bold { 
    font-weight: 700;
} 

.tooltip-container .tooltip  { 
    visibility: hidden;
} 

.tooltip-container:hover .tooltip { 
    visibility: visible;
} 

input { 
    font-family: inherit; 
    font-feature-settings: inherit; 
    font-variation-settings: inherit; 
    font-size: 100%; 
    font-weight: inherit; 
    line-height: inherit; 
    letter-spacing: inherit; 
    color: inherit; 
    margin: 0; 
    padding: 0;
} 

input[type="range"].yubi_video-range { 
    --range-height: .6rem; 
    --range-height-hover: .6rem; 
    --range-fill-color: hsla(0, 0%, 69%, 0); 
    --range-fill-progress-color: rgba(236, 72, 153, 1); 
    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none; 
    width: 100%; 
    cursor: pointer; 
    outline: none; 
    border-radius: .1rem; 
    height: var(--range-height); 
    background: var(--range-fill-color); 
    background: linear-gradient(to right,var(--range-fill-progress-color) var(--value, 100%),var(--range-fill-color) var(--value, 100%)); 
    transition: all .2s ease-in-out; 
    z-index: 1;
} 

button { 
    font-family: inherit; 
    font-feature-settings: inherit; 
    font-variation-settings: inherit; 
    font-size: 100%; 
    font-weight: inherit; 
    line-height: inherit; 
    letter-spacing: inherit; 
    color: inherit; 
    margin: 0; 
    padding: 0;
} 

button { 
    text-transform: none;
} 

button { 
    -webkit-appearance: button; 
    background-color: transparent; 
    background-image: none;
} 

button { 
    cursor: pointer;
} 

.pl-2 { 
    padding-left: .5rem;
} 

.gap-1 { 
    gap: .25rem;
} 

.hidden { 
    display: none;
} 

@media (min-width: 400px){ 
  .xs\:flex { 
    display: flex;
  } 
}     

.font-semibold { 
    font-weight: 600;
} 

.pr-2 { 
    padding-right: .5rem;
} 

svg { 
    display: block; 
    vertical-align: middle;
} 

.h-8 { 
    height: 2rem;
} 

.w-8 { 
    width: 2rem;
} 

.h-5 { 
    height: 1.25rem;
} 

.w-5 { 
    width: 1.25rem;
} 

@media (min-width: 768px){ 
  .md\:block { 
    display: block;
  } 
}     

.bottom-full { 
    bottom: 100%;
} 

.right-3 { 
    right: .75rem;
} 

.w-auto { 
    width: auto;
} 

.translate-y-\[1rem\] { 
    --tw-translate-y: 1rem; 
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} 

.bg-white { 
    --tw-bg-opacity: 1; 
    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
} 

.text-black { 
    --tw-text-opacity: 1; 
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
} 

.opacity-0 { 
    opacity: 0;
} 

.shadow-sm { 
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05); 
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color); 
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
} 

.h-6 { 
    height: 1.5rem;
} 

.w-6 { 
    width: 1.5rem;
} 

input[type="range"].yubi_video-range.active { 
    height: var(--range-height-hover);
} 

.h-7 { 
    height: 1.75rem;
} 

.w-7 { 
    width: 1.75rem;
} 

ul { 
    list-style: none; 
    margin: 0; 
    padding: 0;
} 

.max-h-\[12rem\] { 
    max-height: 12rem;
} 

.min-w-\[5rem\] { 
    min-width: 5rem;
} 

.max-w-full { 
    max-width: 100%;
} 

.overflow-y-auto { 
    overflow-y: auto;
} 

.text-xs { 
    font-size: .8rem;
} 

@media (min-width: 400px){ 
  .xs\:max-h-\[13rem\] { 
    max-height: 13rem;
  } 

  .xs\:min-w-\[10rem\] { 
    min-width: 10rem;
  } 
}     

@media (min-width: 640px){ 
  .sm\:text-md { 
    font-size: 1rem;
  } 
}     

@media (min-width: 768px){ 
  .md\:max-h-\[20rem\] { 
    max-height: 20rem;
  } 
}     

.gap-10 { 
    gap: 2.5rem;
} 

.px-4 { 
    padding-left: 1rem; 
    padding-right: 1rem;
} 

.hover\:bg-gray-200:hover { 
    --tw-bg-opacity: 1; 
    background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
} 

.whitespace-nowrap { 
    white-space: nowrap;
} 

.justify-start { 
    justify-content: flex-start;
} 

.gap-0 { 
    gap: 0px;
} 

hr { 
    height: 0; 
    color: inherit; 
    border-top-width: 1px;
} 

hr { 
    margin: 0;
} 

.bg-gray-200 { 
    --tw-bg-opacity: 1; 
    background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
} 

.h-4 { 
    height: 1rem;
} 

.w-4 { 
    width: 1rem;
} 


/* These were inline style tags. Uses id+class to override almost everything */
#style-LAgTo.style-LAgTo {  
   top: -30px;  
    left: -30.7449px;  
}  
#style-oSpj2.style-oSpj2 {  
   top: -30px;  
    left: 16px;  
}  
#style-4efTf.style-4efTf {  
   --value: 0.020298236128998216%;  
}  
#style-pr7ME.style-pr7ME {  
   top: -30px;  
    left: 95px;  
}  
#style-Dbk6E.style-Dbk6E {  
   top: -30px;  
}  
#style-iUKtG.style-iUKtG {  
   --value: 100%;  
}  
