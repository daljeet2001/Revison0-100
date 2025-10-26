import {getServerSession} from "next-auth"
import {AUTH_OPTIONS} from "../lib/auth"
const Home = async()=>{
    const session = await getServerSession(AUTH_OPTIONS);
    return(
        <div>
            {JSON.stringify(session?.user)}
        </div>
    )
}

export default Home;