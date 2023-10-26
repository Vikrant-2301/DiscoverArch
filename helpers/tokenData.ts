import { NextRequest} from "next/server";
import jwt from "jsonwebtoken";
import { log } from "console";

export default function tokenData  (request: NextRequest) {
    try {
        // console.log('run');
        // log(request.cookies.get('token'));
        const token = request.cookies.get("token")?.value || ""
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        // console.log(decodedToken);
        
        return decodedToken.id;

    }
    catch (error: any) {
        throw new Error(error.message)
    }
}