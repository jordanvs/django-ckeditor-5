# 
# This Makefile is used to build and deploy the package to AWS S3 where it can be read by requirements.txt.
#
# These two commands were changed by JVS
# yarn install;
# yarn run prod; 
# 
default: 
	rm -rf dist/; \
	rm -rf *.egg-info; \
	cd django_ckeditor_5; \
	rm -rf node_modules/; \
	rm -rf static/django_ckeditor_5/dist/; \
	npm install --include=dev; \
	npm run build -- --mode=production; \
	cd ..; \
	python -m build; \
	aws s3 cp dist/ s3://mona-public/python/django-ckeditor-5/ --recursive --acl public-read --exclude .DS_Store

	