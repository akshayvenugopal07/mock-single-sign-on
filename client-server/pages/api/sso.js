export default async function handler(req, res) {
    try {
        const response = await fetch('http://localhost:3000/api/session?client=1&secret=1&redirect=true');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return res.status(200).json({
            redirect: json.data.redirect,
            data: {},
            success: true
        });
    } catch (error) {
        return res.status(200).json({
            data: {},
            success: false
        });
    }
}