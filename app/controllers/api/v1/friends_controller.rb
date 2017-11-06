class Api::V1::FriendsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery except: :destroy, unless: -> { request.format.json? }

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
      render :json => {"friend" => friend, "interactions" => friend.interactions.by_date}
    else
      render :json => {"signed_in" => false}
    end
  end
# need to remeber to add strong params
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

  def edit
    friend = Friend.find(params[:id])
    render :json => {"friend" => friend}
  end

  def update
    friend = Friend.find(params[:id])
    friend_update = JSON.parse(request.body.read)
    friend.update(
      full_name: friend_update["fullName"],
      preferred_name: friend_update["preferredName"],
      preferred_pronouns: friend_update["preferredPronouns"],
      email: friend_update["email"],
      phone_number: friend_update["phoneNumber"],
      street_address: friend_update["streetAddress"],
      city: friend_update["city"],
      state: friend_update["state"],
      zip_code: friend_update["zipCode"],
      user_id: friend_update["userId"]
    )
  end

  def destroy
      friend = Friend.find(params[:id])
      friend.destroy
      render :json => {"friends" => current_user.friends}
  end

end
