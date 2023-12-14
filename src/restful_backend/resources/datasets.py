# Datasets Resource
import logging

from sanic_restful_api import Resource

from restful_backend.app import execute_sql



class DatasetsResource(Resource):
    @staticmethod
    async def get_files_for_dataset(dataset: dict) -> list:
        files_query = "SELECT * FROM files WHERE dataset_id = %s"
        args = (dataset["id"],)
        related_files = await execute_sql(files_query, args, fetch=True)
        logging.info(related_files)
        return related_files

    async def get(self, request, dataset_id=None):
        if dataset_id:
            query = "SELECT * FROM datasets WHERE id = %s"

        else:
            query = "SELECT * FROM datasets"
            args = None

        datasets = await execute_sql(query, args, fetch=True)
        for dataset in datasets:
            dataset["files"] = await self.get_files_for_dataset(dataset)

        return {'datasets': datasets}

    async def post(self, request):
        data = request.json
        category_id = data['category_id']
        name = data['name']
        description = data['description']
        author_name = data['author_name']
        await execute_sql("""
            INSERT INTO datasets (category_id, name, description, author_name)
            VALUES (%s, %s, %s, %s)
        """, (category_id, name, description, author_name))
        return {'message': 'Dataset created'}, 201

    async def put(self, request, dataset_id):
        data = request.json
        category_id = data.get('category_id')
        name = data.get('name')
        description = data.get('description')
        author_name = data.get('author_name')
        await execute_sql("""
            UPDATE datasets
            SET category_id = %s, name = %s, description = %s, author_name = %s
            WHERE id = %s
        """, (category_id, name, description, author_name, dataset_id))
        return {'message': 'Dataset updated'}

    async def delete(self, request, dataset_id):
        await execute_sql("DELETE FROM datasets WHERE id = %s", (dataset_id,))
        return {'message': 'Dataset deleted'}
