from restful_backend.app import api, app
from restful_backend.resources.dataset_categories import DatasetCategoriesResource
from restful_backend.resources.datasets import DatasetsResource
from restful_backend.resources.files import FilesResource
from restful_backend.resources.users import UsersResource


# Add routes to the API
api.add_resource(UsersResource, '/users', name="users")
api.add_resource(UsersResource, '/users/<name>', name="users_detail")
api.add_resource(DatasetCategoriesResource, '/dataset_categories', name="dataset_categories")
api.add_resource(DatasetCategoriesResource, '/dataset_categories/<category_id>',  name="dataset_categories_detail")
api.add_resource(DatasetsResource, '/datasets', name="datasets")
api.add_resource(DatasetsResource, '/datasets/<dataset_id>', name="datasets_detail")
api.add_resource(FilesResource, '/files', name="files")
api.add_resource(FilesResource, '/files/<file_id>', name="files_detail")

# Other routes would be added in a similar manner for DatasetCategoriesResource, DatasetsResource, and FilesResource.

if __name__ == '__main__':
    app.run(debug=True)


