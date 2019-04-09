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
