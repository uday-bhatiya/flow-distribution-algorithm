import express from 'express';
import distributionRoutes from './routes/distribution.route.js';

const app = express();

// using distribution route
app.use('/api', distributionRoutes);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});