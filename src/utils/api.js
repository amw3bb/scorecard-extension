// src/utils/api.js
import axios from 'axios';

export const fetchScorecard = async (repoUrl) => {
    const apiUrl = `https://api.securityscorecards.dev/projects/${repoUrl}`;
    
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(`Error fetching scorecard: ${error.message}`);
        throw error;
    }
};