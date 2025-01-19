import jwt from 'jsonwebtoken'

const auth = async(request,response,next)=>{
    try {
        const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1]
       
        if(!token){
            return response.status(401).json({
                message : "Provide token"
            })
        }

        // const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

        const decode = await jwt.verify(token,c559e9117bea57fa7f2379c909759248ca7c419945ef519b614a5314d8b8c246)

        if(!decode){
            return response.status(401).json({
                message : "unauthorized access",
                error : true,
                success : false
            })
        }

        request.userId = decode.id

        next()

    } catch (error) {
        return response.status(500).json({
            message : "You have not login",///error.message || error,
            error : true,
            success : false
        })
    }
}

export default auth