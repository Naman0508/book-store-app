import React,{useState} from "react";
import axios from "axios";

const Navbar=({setBooks})=>{
    let [query,setQuery]=useState("");

    async function showData(){
        try{
            let response=await axios.get("https://www.googleapis.com/books/v1/volumes",{
                params: {
                    q:query,
                }
            })
            setBooks(response.data.items)
            console.log(response.data.items)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="navbar">
                <div className="logo">
                    <svg width="95" height="65" viewBox="0 0 95 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.6744 31.8935C65.7037 35.3311 65.0885 38.7436 63.8605 41.9545C75.7147 39.5931 82.9649 35.951 82.9595 31.8738V31.8694C82.9516 27.7932 75.694 24.1718 63.8369 21.8405C65.0719 25.0471 65.6952 28.4568 65.6744 31.893V31.8935Z" fill="url(#paint0_linear_5_69)"/>
                        <path d="M9.64459 32.1325L9.6377 26.9446C1.51629 28.2534 -0.0029335 30.1038 2.28882e-05 32.1493C0.00297928 34.1948 1.52762 36.0324 9.651 37.3234L9.64459 32.1325Z" fill="url(#paint1_linear_5_69)"/>
                        <path d="M32.7414 44.7466C38.8089 44.5342 45.1854 44.1144 51.8369 43.426C55.2459 43.0731 58.5639 42.6699 61.791 42.2162C64.3558 35.5767 64.3472 28.2183 61.7668 21.5847C58.5089 21.1422 55.1597 20.748 51.7192 20.4021C45.0174 19.7319 38.5906 19.3278 32.4723 19.1287C28.2345 13.3978 20.1964 9.4408 9.65148 9.4541L9.6638 18.978C9.6638 20.7204 10.1073 21.7577 11.8847 21.7577L11.9182 21.7518L11.931 31.963L11.9444 42.5084C10.0625 42.5084 9.69435 43.5048 9.69681 45.2546L9.70864 54.8145C20.4551 54.7997 28.6312 50.6663 32.7414 44.7466ZM58.6904 31.9019C58.6915 32.6852 58.4603 33.4511 58.026 34.1029C57.5918 34.7548 56.974 35.2632 56.2508 35.5638C55.5276 35.8645 54.7314 35.944 53.9631 35.7922C53.1947 35.6405 52.4886 35.2642 51.9341 34.7111C51.3795 34.158 51.0014 33.4529 50.8476 32.6849C50.6938 31.9169 50.7713 31.1206 51.0701 30.3966C51.3689 29.6726 51.8757 29.0536 52.5263 28.6176C53.177 28.1816 53.9423 27.9484 54.7255 27.9474C55.7757 27.9462 56.7833 28.3622 57.5268 29.1038C58.2703 29.8453 58.6889 30.8518 58.6904 31.9019ZM45.7901 31.9187C45.791 32.7018 45.5599 33.4676 45.1253 34.1193C44.6912 34.771 44.0737 35.2792 43.3503 35.5798C42.6274 35.8804 41.8311 35.9598 41.0629 35.808C40.2946 35.6561 39.589 35.2799 39.0346 34.7269C38.4798 34.1738 38.1018 33.4688 37.948 32.7009C37.7943 31.933 37.8722 31.1368 38.1708 30.413C38.4694 29.6891 38.976 29.0701 39.6269 28.6342C40.2774 28.1983 41.0427 27.9652 41.8257 27.9642C42.8758 27.963 43.8835 28.379 44.6266 29.1205C45.3702 29.8622 45.7886 30.8686 45.7901 31.9187ZM24.9704 31.9453C24.9694 31.1622 25.2005 30.3964 25.6351 29.7447C26.0692 29.0931 26.6867 28.5848 27.4101 28.2842C28.133 27.9836 28.9293 27.9043 29.6975 28.0561C30.4658 28.2079 31.1714 28.5841 31.7263 29.1372C32.2807 29.6902 32.6586 30.3952 32.8124 31.1631C32.9661 31.931 32.8887 32.7272 32.5896 33.451C32.291 34.1749 31.7844 34.7939 31.1335 35.2298C30.483 35.6657 29.7177 35.8989 28.9347 35.8998C28.4148 35.9005 27.8999 35.7987 27.4189 35.6003C26.9385 35.4019 26.5014 35.1107 26.1333 34.7435C25.7652 34.3762 25.473 33.9401 25.2734 33.4598C25.0738 32.9796 24.9703 32.4648 24.9699 31.9448L24.9704 31.9453Z" fill="url(#paint2_linear_5_69)"/>
                        <path d="M57.0391 31.9064C57.0295 31.3 56.7817 30.7217 56.3492 30.2966C55.9167 29.8714 55.3343 29.6335 54.7278 29.6343C54.1214 29.6351 53.5395 29.8745 53.1081 30.3007C52.6767 30.727 52.4304 31.3059 52.4223 31.9123C52.4231 32.5245 52.6671 33.1113 53.1005 33.5437C53.534 33.9761 54.1215 34.2185 54.7337 34.2177C55.3459 34.2169 55.9328 33.973 56.3651 33.5395C56.7975 33.1061 57.0399 32.5186 57.0391 31.9064Z" fill="url(#paint3_linear_5_69)"/>
                        <path d="M44.1388 31.9231V31.9187C44.1294 31.3123 43.8816 30.734 43.4489 30.3088C43.0162 29.8837 42.4338 29.6458 41.8277 29.6466C41.2211 29.6474 40.6391 29.8867 40.2079 30.313C39.7763 30.7393 39.5299 31.3182 39.522 31.9246C39.5225 32.5369 39.7664 33.1238 40.2 33.5563C40.6332 33.9888 41.2211 34.2314 41.8331 34.2308C42.4456 34.2301 43.0325 33.9863 43.4647 33.5528C43.8973 33.1194 44.1398 32.5319 44.1393 31.9197L44.1388 31.9231Z" fill="url(#paint4_linear_5_69)"/>
                        <path d="M31.2379 31.9394V31.9369C31.2286 31.3305 30.9807 30.7522 30.548 30.3271C30.1154 29.902 29.5329 29.664 28.9268 29.6648C28.3202 29.6656 27.7382 29.905 27.3071 30.3313C26.8754 30.7575 26.629 31.3364 26.6211 31.9428C26.6221 32.555 26.8655 33.1419 27.2992 33.5743C27.7328 34.0067 28.3202 34.2492 28.9322 34.2485C29.5442 34.2478 30.1311 34.0039 30.5638 33.5705C30.996 33.1371 31.2384 32.5496 31.2379 31.9374V31.9394Z" fill="url(#paint5_linear_5_69)"/>
                        <path d="M64.1335 44.4031C73.9274 42.4517 85.6062 38.6933 85.6062 31.8664V31.7989C85.5426 26.3439 78.3087 22.1627 64.1045 19.3702L64.0739 19.3643L59.632 18.5837C57.623 18.2678 55.5376 17.987 53.4152 17.746C52.9931 17.6981 52.5676 17.6515 52.1389 17.6065C49.2917 17.3079 46.3015 17.0729 43.2315 16.9053C43.8835 16.0602 44.5881 15.2572 45.3416 14.5011C48.9201 10.9179 53.5085 8.51432 58.4916 7.61249C63.4748 6.71067 68.6145 7.35369 73.2218 9.45542C77.8292 11.5571 81.684 15.017 84.2695 19.3713C86.855 23.7256 88.0475 28.7663 87.6874 33.8175C87.3273 38.8688 85.4316 43.6892 82.2546 47.6327C79.0775 51.5764 74.7709 54.4542 69.9119 55.8808C65.053 57.3079 59.874 57.2152 55.0693 55.6157C50.2645 54.0157 46.0635 50.9856 43.0295 46.931C46.1783 46.7556 49.2488 46.5078 52.1749 46.1919C52.602 46.1456 53.0274 46.0981 53.4512 46.0495C55.5701 45.8031 57.656 45.5192 59.6601 45.198L64.1335 44.4031Z" fill="url(#paint6_linear_5_69)"/>
                        <path d="M94.999 32.0236C94.9799 24.9327 92.6141 18.0475 88.2708 12.4424C83.9275 6.8372 77.851 2.82739 70.9894 1.03855C64.1278 -0.750281 56.867 -0.217525 50.3399 2.55371C43.813 5.32493 38.3866 10.1788 34.9081 16.3578C36.245 16.4235 37.5671 16.4965 38.8735 16.5766C41.2886 12.8393 44.5384 9.71392 48.3673 7.44652C52.7087 4.88408 57.6505 3.51528 62.6917 3.47895C67.7327 3.44263 72.6938 4.74007 77.0717 7.2397C81.4496 9.7393 85.0886 13.3522 87.6197 17.7119C90.1508 22.0717 91.484 27.0233 91.484 32.0645C91.484 37.1058 90.1508 42.0574 87.6197 46.4171C85.0886 50.7766 81.4496 54.3897 77.0717 56.8895C72.6938 59.3889 67.7327 60.6863 62.6917 60.6499C57.6505 60.6139 52.7087 59.245 48.3673 56.6825C44.4379 54.3557 41.12 51.126 38.6877 47.2607C37.3878 47.3409 36.075 47.4149 34.749 47.4829C38.1752 53.7367 43.5864 58.6719 50.1283 61.5093C56.6705 64.3467 63.9712 64.9252 70.8784 63.1527C77.7856 61.3807 83.906 57.3586 88.2738 51.7218C92.6417 46.0853 95.0082 39.1546 95 32.0236H94.999Z" fill="url(#paint7_linear_5_69)"/>
                        <defs>
                        <linearGradient id="paint0_linear_5_69" x1="1.45905" y1="31.8975" x2="64.5444" y2="31.8975" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_5_69" x1="1.44779" y1="32.134" x2="64.5363" y2="32.134" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_5_69" x1="1.43496" y1="32.1343" x2="64.5192" y2="32.1343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_5_69" x1="1.45269" y1="31.926" x2="64.5415" y2="31.926" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_5_69" x1="1.45221" y1="31.9387" x2="64.5385" y2="31.9387" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_5_69" x1="1.4502" y1="31.9567" x2="64.5389" y2="31.9567" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_5_69" x1="1.48371" y1="32.0513" x2="64.5402" y2="32.0513" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_5_69" x1="1.43004" y1="32.08" x2="64.513" y2="32.08" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1153FC"/>
                        <stop offset="1" stop-color="#5581F1"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="storename">KeazoN<span>BOOKS</span></div>
                </div>
                <div className="search">
                    <div className="searchbar">
                        <div className="searchinput">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." onChange={(e)=>setQuery(e.target.value)} value={query}/></div>
                        <button onClick={showData}>Search</button>
                    </div>
                    <div className="ficons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v3zm3-4h13v12H5V5c0-.806.55-.988 1-1z"/><path fill="currentColor" d="m11.997 14l3.35-3.289a2.129 2.129 0 0 0 0-3.069a2.225 2.225 0 0 0-3.126 0l-.224.218l-.224-.219a2.224 2.224 0 0 0-3.125 0a2.129 2.129 0 0 0 0 3.069L11.997 14z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M5.5 3a.5.5 0 0 0-.429.243l-3 5a.5.5 0 0 0 .045.577l7.494 8.993a.5.5 0 0 0 .856-.132L13.842 9h3.892l.15-.18a.5.5 0 0 0 .045-.577l-3-5A.5.5 0 0 0 14.5 3h-9Zm7.27 6L10 16.12L7.231 9h5.538ZM3.382 8l2.4-4h1.979l-1.6 4H3.383Zm2.775 1l2.267 5.829L3.568 9h2.59Zm1.08-1l1.6-4h2.323l1.6 4H7.24Zm6.6 0l-1.6-4h1.979l2.4 4h-2.779Zm1.662 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2Zm5.5 10a4.5 4.5 0 0 0-4.475 4.975a4.5 4.5 0 0 0 4.95-4.95A4.565 4.565 0 0 0 17.5 12Zm-11 0c-.16 0-.319.008-.475.025a4.5 4.5 0 0 0 4.95 4.95A4.5 4.5 0 0 0 6.5 12Z"/></svg>
                    </div>
                </div>
        </div>
    )
}

export default Navbar


