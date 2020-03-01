import Server from "./classes/server";
import userRoutes from "./routes/user";
import mongoose from 'mongoose';


const server = new Server();

mongoose.connect('mongodb://localhost:27017/fotosgram',
                 { useNewUrlParser: true, useCreateIndex: true },
                 (error) => {
                     if (error) throw error;

                     console.log('MONGO DB ONLINE');
                 });

server.app.use('/users', userRoutes);

server.start(() => {
    console.log(`Server running on port ${server.port}`);
})