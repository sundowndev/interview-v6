export default {
  server: {
    url: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 3000,
  },
  secret: process.env.SECRET || 'interviewv6',
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '27017', 1),
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'interview-v6',
  },
};
