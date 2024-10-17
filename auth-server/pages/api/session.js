export default async function handler(req, res) {
    if (req.query.client && req.query.secret && req.query.redirect) {
        return res.status(200).json({
            data: {
                loggedIn: true,
                redirect: 'http://localhost:3000',
                metadata: { hello: 'world' }
            },
            success: true
        });
    }
    return res.status(200).json({
        data: {},
        success: false
    });
}