export default {
  server: {
    url: process.env.BASE_URL || 'http://localhost',
    port: process.env.PORT || 3000,
  },
  secret: process.env.SECRET || 'interviewv6',
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '27017', 1),
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'interview-v5',
  },
};
