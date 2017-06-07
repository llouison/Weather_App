--connecting to our main database
-- \connect weather_development

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users_search (
  id BIGSERIAL PRIMARY KEY,
  user_ref_id INTEGER REFERENCES users(id),
  search_input VARCHAR(1024)
);