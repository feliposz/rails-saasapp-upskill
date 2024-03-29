# README

Coding along [Upskill](http://upskillcourses.com)'s Software-as-a-Service Ruby on Rails App tutorial.

## Install development dependencies

```
sudo apt-get update
sudo apt-get install libpq-dev imagemagick
rvm install 2.3.0
bundle install
```

## Development server

Using Cloud9 service:

```
bundle exec rails server -b $IP -p $PORT 
```

Local server:

```
bundle exec rails db:migrate RAILS_ENV=development
bundle exec rails db:seed RAILS_ENV=development
bundle exec rails server -p 5000
```

## Database

Run `rails console` and use *Hirb* to display records on the database.

~~~ruby
Hirb.enable
Contact.all
~~~

Use `rails console --sandbox` to experiment with database without saving (rollback when exiting the console).

~~~ruby
c = Contact.new
c.name = 'Test'
c.email = 'test@example.com'
c.save
~~~

## Deploying on heroku

```
heroku --version
heroku login
(Enter your login credentials)
heroku keys:add
heroku create --stack heroku-16
git push heroku master
heroku run rails db:migrate
```

Set config var on Heroku's Dashboard according to service APIs/keys:

```
heroku config:set SENDGRID_SMTP_LOGIN=apikey
heroku config:set SENDGRID_SMTP_PASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
heroku config:set SENDGRID_SMTP_PORT=25
heroku config:set SENDGRID_SMTP_SERVER=smtp.sendgrid.net
heroku config:set stripe_api_key=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
heroku config:set stripe_publishable_key=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
