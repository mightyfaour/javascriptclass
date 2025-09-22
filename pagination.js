const { appendFile } = require("fs");

appendFile.get("/users", async (req, res) => {
    let {page = 1, limit = 5} = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const users = await User.find()
        .skip((page - 1) * limit)
        .limit(limit);

        res.json(users);
});