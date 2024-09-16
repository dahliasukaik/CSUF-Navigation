// knexfile.js

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // Configuration for the development environment
  development: {
    client: 'sqlite3', // Specifies that we are using SQLite as our database
    connection: {
      filename: './data/database.sqlite' // Path to the SQLite database file
    },
    useNullAsDefault: true, // SQLite-specific setting to handle default values
    migrations: {
      directory: './migrations', // Directory where Knex will store migration files
      tableName: 'knex_migrations' // Table to keep track of migrations
    },
    seeds: {
      directory: './seeds' // Directory for seed files
    }
  },

  // Configuration for testing environment, if needed
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:' // Use an in-memory database for testing purposes
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  // Optional configuration for production if you plan to use SQLite or another DB
  production: {
    client: 'sqlite3', // Use 'postgresql' or another client for production if needed
    connection: {
      filename: './data/database.sqlite' // Adjust the path if deploying with different DB needs
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};


/*

// Update with your config settings.

 * @type { Object.<string, import("knex").Knex.Config> }

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
*/