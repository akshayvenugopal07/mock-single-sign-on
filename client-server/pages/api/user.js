export default async function handler(req, res) {
    return res.status(200).json({
        data: {
            username: "Akshay",
            session: "1234567890",
        },
        success: true
    });
}