# time_struct #

# Running Frontend #
install npm
npm install react
cd frontend
npm start


# Running Backend #
install anaconda
cd backend/time_struct
conda create --name myDjangoEnv django
activate myDjangoEnv
conda install django
pip install django-cors-headers
pip install django-allauth
pip install django-rest-auth
python manage.py runserver