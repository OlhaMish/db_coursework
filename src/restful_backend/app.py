import asyncio

import aiomysql
from sanic import Sanic
from sanic_restful_api import Api

from restful_backend.db import create_db_connection_pool


app = Sanic("restful_backend")
api = Api(app)

# app.ctx.db_pool = asyncio.run(create_db_connection_pool())

async def execute_sql(query, args=None, fetch=False):
    pool = await create_db_connection_pool()
    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cur:
            await cur.execute(query, args)
            if fetch:
                return await cur.fetchall()
            await conn.commit()

    pool.close()
    await pool.wait_closed()
