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
end
