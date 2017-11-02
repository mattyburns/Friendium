class Api::V1::FriendsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user
      render :json => {"friends" => current_user.friends}
    else
      render :json => {"signed_in" => false}
    end
  end

  def show
    if current_user
      friend = Friend.find(params[:id])
      render :json => {"friend" => friend, "interactions" => friend.interactions}
    else
      render :json => {"signed_in" => false}
    end
  end

  def create
      friend = JSON.parse(request.body.read)
      new_friend = Friend.create(
        full_name: friend["fullName"],
        preferred_name: friend["preferredName"],
        preferred_pronouns: friend["preferredPronouns"],
        email: friend["email"],
        phone_number: friend["phoneNumber"],
        street_address: friend["streetAddress"],
        city: friend["city"],
        state: friend["state"],
        zip_code: friend["zipCode"],
        user_id: friend["userId"]
      )
      render json: new_friend
  end

end
