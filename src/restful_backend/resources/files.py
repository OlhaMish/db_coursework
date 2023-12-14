# Files Resource
from sanic_restful_api import Resource

from restful_backend.app import execute_sql


class FilesResource(Resource):
    async def get(self, request, file_id=None):
        if file_id:
            query = "SELECT * FROM files WHERE id = %s"
            args = (file_id,)
        else:
            query = "SELECT * FROM files"
            args = None
        files = await execute_sql(query, args, fetch=True)
        return {'files': files}

    async def post(self, request):
        data = request.json
        dataset_id = data['dataset_id']
        name = data['name']
        path = data['path']
        await execute_sql("""
                 INSERT INTO files (dataset_id, name, path)
                 VALUES (%s, %s, %s)
             """, (dataset_id, name, path))
        return {'message': 'File created'}, 201

    async def put(self, request, file_id):
        data = request.json
        dataset_id = data.get('dataset_id')
        name = data.get('name')
        path = data.get('path')
        await execute_sql("""
                 UPDATE files
                 SET dataset_id = %s, name = %s, path = %s
                 WHERE id = %s
             """, (dataset_id, name, path, file_id))
        return {'message': 'File updated'}

    async def delete(self, request, file_id):
        await execute_sql("DELETE FROM files WHERE id = %s", (file_id,))
        return {'message': 'File deleted'}
