//Cloudinary

const cloudKey = process.env.REACT_APP_CLOUDINARY_API_KEY
const cloudSKey = process.env.REACT_APP_CLOUDINARY_API_SECRET_KEY

const cloudName = "noe-rolli"

const mediaApi = `curl https://${cloudKey}:${cloudSKey}@api.cloudinary.com/v1_1/${cloudName}`

//terminar de configurar