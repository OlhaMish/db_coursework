import aiomysql


# Database configuration
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'olha',
    'password': 'olha_pass',
    'db': 'MyDB',
}

# Create a MySQL connection pool
async def create_db_connection_pool():
    return await aiomysql.create_pool(**DB_CONFIG)
