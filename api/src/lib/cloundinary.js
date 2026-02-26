import { v2 as cloudinary } from 'cloudinary'

import { config  } from 'dotenv'

config()

cloudinary.config({
    cloud_name:"dmuhmpdkm",
    api_key: "968229794174487",
    api_secret:"DkzEd6rxl3pbG3hg3Y7GKC_zzHw",
})

export default cloudinary