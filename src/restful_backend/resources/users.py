# Users Resource
import hashlib

from sanic_restful_api import Resource

from restful_backend.app import execute_sql


class UsersResource(Resource):
    async def get(self, request, name=None):
        if name is None:
            users = await execute_sql("SELECT * FROM users", fetch=True)
        else:
            users = await execute_sql("SELECT * FROM users WHERE name = %s", (name,), True)
        return {'users': users}

    @staticmethod
    def get_password_hash(password: str) -> str:
        return hashlib.sha1(password.encode("utf-8")).hexdigest()

    async def post(self, request, name):
        data = request.json
        password_hash = self.get_password_hash(data['password'])
        await execute_sql("INSERT INTO users (name, password_hash) VALUES (%s, %s)", (name, password_hash))
        return {'message': 'User created'}, 201
