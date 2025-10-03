import {atom,selector} from "recoil"


export const notificationAtom=atom({
    key:"notificationAtom",
    default:104
})
export const networkAtom=atom({
    key:"networkAtom",
    default:0
})
export const jobsAtom=atom({
    key:"jobsAtom",
    default:104
})
export const messagingAtom=atom({
    key:"messagingAtom",
    default:30
})

export const sumSelector = selector({
    key:"sumSelector",
    get:({get})=>{
     const notification = get(notificationAtom) 
     const jobs = get(jobsAtom)
     const network = get(networkAtom)
     const messaging = get(messagingAtom)

     return notification + jobs + network + messaging
    }
})