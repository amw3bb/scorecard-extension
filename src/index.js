import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

export const fetchScorecard = async (repository) => {
    const apiUrl = `https://api.securityscorecards.dev/projects/github.com/${repository}`;
    
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching scorecard: ${error.message}`);
        throw error;
    }
};

export const fetchScorecardHandler = async (req, res) => {
    const { repository } = req.body;
    
    if (!repository) {
        res.status(400).send('Repository URL is required.');
        return;
    }
    
    try {
        const scorecard = await fetchScorecard(repository);
        res.send(scorecard);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

app.post('/scorecard', fetchScorecardHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});