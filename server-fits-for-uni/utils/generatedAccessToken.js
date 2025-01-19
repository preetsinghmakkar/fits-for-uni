import jwt from 'jsonwebtoken'

const generatedAccessToken = async(userId)=>{
    // const token = await jwt.sign({ id : userId},
    //     process.env.SECRET_KEY_ACCESS_TOKEN,
    //     { expiresIn : '5h'}
    // )

    const token = await jwt.sign({ id : userId},
        c559e9117bea57fa7f2379c909759248ca7c419945ef519b614a5314d8b8c246,
        { expiresIn : '5h'}
    )

    return token
}

export default generatedAccessToken