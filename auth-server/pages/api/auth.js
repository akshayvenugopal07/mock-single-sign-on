export default async function handler(req, res) {
    const isLoggedIn = req.cookies.isLoggedIn;

    if (isLoggedIn === "true") {
        return res.status(200).json({
            data: {
                loggedIn: true,
                redirect: 'http://localhost:3001?loggedIn=true'
            },
            success: true
        });
    }

    return res.status(200).json({
        data: {
            loggedIn: false,
        },
        success: true
    });
}