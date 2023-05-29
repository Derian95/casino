import axios from "axios";



export const casinoApi = axios.create({
    baseURL:'http://192.168.1.32:9998/api',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZFVzZXIiOiIxIiwiTmFtZSI6IkRlcmlhbiBGcmFuY3Vpc2NvIiwiUGF0ZXJuYWxMYXN0bmFtZSI6IkhlcnJlcmEiLCJNYXRlcm5hbExhc3RuYW1lIjoiQW1lenF1aXRhIiwiRW1haWwiOiJkZXJpYW5kYXJAZ21haWwuY29tIiwiUGhvbmVOdW1iZXIiOiI5NTE1OTE5NTEiLCJVc2VybmFtZSI6ImRlcmlhbiIsIlN0YXRlIjoiVHJ1ZSIsIklkUm9sZSI6IjE4IiwiUm9sZU5hbWUiOiJhZWEiLCJleHAiOjE2ODU0MDU5NzksImlzcyI6Imh0dHBzOi8vY2hhbm8uYXp1cmVzd2Vic2l0ZS5uZXQiLCJhdWQiOiJodHRwczovL2NoYW5vLmF6dXJlc3dlYnNpdGUubmV0In0.nHUzoL2eeLffdWZw8L4HTJfrDmSPbi-DajyxAIR5o08' 
    }
})


