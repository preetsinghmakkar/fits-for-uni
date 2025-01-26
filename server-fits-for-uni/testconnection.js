import mongoose from 'mongoose';

// MongoDB Atlas connection string
const DB_URI = 'mongodb+srv://preet:preet@cluster0.i3jli.mongodb.net/myDatabase?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    mongoose.connection.close(); // Close the connection
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
    mongoose.connection.close(); // Close the connection
  });
