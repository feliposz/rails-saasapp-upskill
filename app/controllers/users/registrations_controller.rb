class Users::RegistrationsController < Devise::RegistrationsController
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          resource.stripe_card_token = params[:stripe_card_token]
          resource.save_with_subscription
        else
          resource.save
        end
      end
    end
  end
end