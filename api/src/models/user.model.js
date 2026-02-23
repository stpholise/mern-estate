import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String, 
        required: true,
        unique: true,
    },
    email: {
        type:String, 
        required: true,
        unique: true,
    },
    password: {
        type:String, 
        required: true,
         
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAP1BMVEX6+vqPj4////+MjIzX19eJiYmFhYXx8fHPz8/AwMDt7e2xsbG6urqhoaGTk5PKysqqqqre3t5/f3/n5+ebm5uM+kD6AAADUklEQVR4nO2b23KjMAxAsXwDczX4/791DUlbdkuIlWBEZnWeOunLGRnZRhJFwTAMwzAMwzAMwzAMcxxwh9rjIdHNqr5qmqr39pKiULiy1aPRMqLNqAflimt5Avi6M1KskKZr/JXCCS7IvwxvaNHaq1iCbcyG4i2c1TU0YQp6W3GJZusuYAlqa6VXwRSe3BLKR0v9bakVsSWonaX+spS0sUxxnFd8orS04sla39CB0BGGlEDOlg1ZKGNipznGFadLnjZZUg9EinH3SXUUwhBlOKQrxvUOJJLgEYGMoXQkknXyE7mEkiTBbcBJtgSO4DuMoxDdRCBZJm7k36Gk2CorpKTuCSRrrGRzviPiuLlL1gSSuOSOzyTFyfgRkujlppAcPuGZbLDZXZ2/BUGPlSwJJNOv5XcobpRTQCnKYM93xKa3HCiuasiHkqiOYVE3c02hiHjrXhyJ3rzBpUvKjiRtZtL3c11RORYu9Q2CaP9ZAJWYO1SlgZtlnWRpCI7tNSkZTnL/WQG2fWppqIpVK8u93sPNkS5pfth9bZQU18gNoJcPNbUguEVuAm7Y7pNIU1+jIbYAfhD/RjOGd6DvM62Bwjdi/ImnNGNXTRfrJS8t+akfQrcQht5dqY28YplrsM7Z4tITDgxDBLzBWYbOq5eZJ4byK9oqLLM/r6JDn32PVx3qbXvzQA95T0uoNLZMtaUpc16NoB/fV5wZ89VcYDpGMdLlmxbCtm4ek6+pMx3wPH7RZeosoyYFnmEyPZVw3GrnK/MDtnOzK1mzJEu+L4lt1O1KZipPA7ZRt4fJNEcA/Sfsk7hppX10rtmW5BL5czIW0Y/LnHzFX+gPk8x37QV3lKPI2Hs6bKfM2sTD9Tx3JPMpzvv5IZa5dvI7yHnEbWSbtx8B/v2jMf9s/AFno8nfkADsSOKvQJ4yovheLE+I40xc8ZezR57k+Oxbpj3O/M4JbP1K4Urq5tzOjg9YTanD2Z/lAJTD477nb7QcFEFvBwpVm7QUkkbXnqiHFyPTt3EZ97+2i/9uy4KyQwbgyqbttNkylfHnbqjUGbX8p57W+b5phRnH0dyZ/xRtU3p3AcMvlhaNtZP3qlTK+8nef6MW2+DsnhLDMAzDMAzDMAzDMP8HfwCAsyXGSQihOwAAAABJRU5ErkJggg==",
    },
    
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

export default  User;