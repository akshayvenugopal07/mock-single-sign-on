import * as cookie from 'cookie';

export default async function handler(req, res) {
    res.setHeader('Set-Cookie', cookie.serialize('isLoggedIn', 'true'))
    return res.status(200).json({
        data: {
            loggedIn: true,
            redirect: 'http://localhost:3001?loggedIn=true',
        },
        success: true
    });
}