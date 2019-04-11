# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :port           => ENV['SENDGRID_SMTP_PORT'],
  :address        => ENV['SENDGRID_SMTP_SERVER'],
  :user_name      => ENV['SENDGRID_SMTP_LOGIN'],
  :password       => ENV['SENDGRID_SMTP_PASSWORD'],
  :domain         => ENV['HEROKU_APP_DOMAIN'],
  :authentication => :plain,
}
ActionMailer::Base.delivery_method = :smtp
