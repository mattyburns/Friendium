class Api::V1::FriendsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Friend.all
  end

  def show
    render json: Friend.find(params[:id])
  end

end
