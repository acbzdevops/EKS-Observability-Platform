const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/status', (req, res) => {
    res.json({ status: "Backend is running!", cluster: "EKS" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
