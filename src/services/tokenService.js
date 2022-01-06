const jwt = require('jsonwebtoken')
const {UserToken} = require('../../db/models')

class TokenService {


    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken,
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await UserToken.findOne({where: {user_id: userId}})
        if (tokenData) {
            const updatedToken = await UserToken.update({refresh_token: refreshToken}, {where: {user_id: userId}})
            return updatedToken
        }
        const newToken = await UserToken.create({user_id: userId, refresh_token: refreshToken})
        return newToken
    }

    async removeToken(refreshToken) {
        const currToken = await UserToken.findOne({where: {refresh_token: refreshToken}})
        await currToken.destroy()
        return currToken
    }

    async findToken(refreshToken) {
        const currToken = await UserToken.findOne({where: {refresh_token: refreshToken}})
        return currToken
    }
}

module.exports = new TokenService()
