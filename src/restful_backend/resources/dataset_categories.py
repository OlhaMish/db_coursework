# DatasetCategories Resource
from sanic_restful_api import Resource

from restful_backend.app import execute_sql


class DatasetCategoriesResource(Resource):
    async def get(self, request, category_id=None):
        if category_id:
            query = "SELECT * FROM dataset_categories WHERE id = %s"
            args = (category_id,)
        else:
            query = "SELECT * FROM dataset_categories"
            args = None

        categories = await execute_sql(query, args, fetch=True)
        return {'categories': categories}

    async def post(self, request):
        data = request.json
        category_name = data['name']
        await execute_sql("INSERT INTO dataset_categories (name) VALUES (%s)", (category_name,))
        return {'message': 'Category created'}, 201

    async def put(self, request, category_id):
        data = request.json
        category_name = data['name']
        await execute_sql("UPDATE dataset_categories SET name = %s WHERE id = %s", (category_name, category_id))
        return {'message': 'Category updated'}

    async def delete(self, request, category_id):
        await execute_sql("DELETE FROM dataset_categories WHERE id = %s", (category_id,))
        return {'message': 'Category deleted'}
