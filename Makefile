default: 
	rm -rf dist/; \
	rm -rf *.egg-info; \
	cd django_ckeditor_5; \
	rm -rf node_modules/; \
	rm -rf static/dist/; \
	yarn install; \
	yarn run prod; \
	cd ..; \
	python -m build; \
	aws s3 cp dist/ s3://mona-public/python/django-ckeditor-5/ --recursive
