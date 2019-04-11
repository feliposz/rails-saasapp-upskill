# README

Coding along [Upskill](http://upskillcourses.com)'s Software-as-a-Service Ruby on Rails App tutorial.

## Development server

Using Cloud9 service:

```
bundle exec rails server -b $IP -p $PORT 
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

Set `EMAIL` config var on Heroku's Dashboard.
