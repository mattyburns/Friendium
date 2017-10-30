class Api::V1::UserController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
