require "rails_helper"
RSpec.describe Api::V1::InteractionsController, type: :controller do
  let!(:skibuddy) {User.create(username: "skibud22", email: "skibuddy@aol.com", password: "isuredoloveskiing")}
  let!(:ward) {Mountain.create(name: "Ward Hill", address: "2 Mountain Rd", city: "Shrewsbury", state: "MA", zip: "01590", image_url: "www.skiward.com", creator: skibuddy)}
  let!(:loon) {Mountain.create(name: "Loon", address: "1 Mountain Rd", city: "Lincoln", state: "NH", zip: "05149", image_url: "www.skiloon.com", creator: skibuddy)}
  let!(:suicide_six) {Mountain.create(name: "Suicide Six", address: "3 Mountain Rd", city: "Pomfret", state: "VT", zip: "03981", image_url: "www.suicidesix.com", creator: skibuddy)}
  let!(:ward_review) {Review.create(user: skibuddy, mountain: ward, rating: 1)}
  let!(:loon_review) {Review.create(user: skibuddy, mountain: loon, rating: 5, skiing_review: "Excellent snowmaking", food_review: "Black Diamond Bar is the place to go for apres ski", lodging_review: "We stayed slopeside and it was awesome!")}
  let!(:loon_review2) {Review.create(user: skibuddy, mountain: loon, rating: 4)}

  describe "GET#index" do
    it "should return a list of all of the mountains ordered by rankings" do
      get :index
      returned_json = JSON.parse(response.body)
      mountains = returned_json["mountains"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(mountains.length).to eq 3
      expect(mountains[0]["name"]).to eq "Loon"
      expect(mountains[0]["address"]).to eq "1 Mountain Rd"
      expect(mountains[0]["city"]).to eq "Lincoln"
      expect(mountains[0]["state"]).to eq "NH"
      expect(mountains[0]["zip"]).to eq "05149"
      expect(mountains[0]["image_url"]).to eq "www.skiloon.com"
      expect(mountains[0]["creator_id"]).to eq skibuddy.id

      expect(mountains[1]["name"]).to eq "Ward Hill"
      expect(mountains[1]["address"]).to eq "2 Mountain Rd"
      expect(mountains[1]["city"]).to eq "Shrewsbury"
      expect(mountains[1]["state"]).to eq "MA"
      expect(mountains[1]["zip"]).to eq "01590"
      expect(mountains[1]["image_url"]).to eq "www.skiward.com"
      expect(mountains[1]["creator_id"]).to eq skibuddy.id

      expect(mountains[2]["name"]).to eq "Suicide Six"
      expect(mountains[2]["address"]).to eq "3 Mountain Rd"
      expect(mountains[2]["city"]).to eq "Pomfret"
      expect(mountains[2]["state"]).to eq "VT"
      expect(mountains[2]["zip"]).to eq "03981"
      expect(mountains[2]["image_url"]).to eq "www.suicidesix.com"
      expect(mountains[2]["creator_id"]).to eq skibuddy.id


    end
  end

  describe "GET#show" do
    it "should return the details and review for the specified mountain" do
      get :show, params: { id: loon.id }
      returned_json = JSON.parse(response.body)
      mountain = returned_json["mountain"]
      reviews = mountain["reviews"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(mountain["name"]).to eq "Loon"
      expect(mountain["address"]).to eq "1 Mountain Rd"
      expect(mountain["city"]).to eq "Lincoln"
      expect(mountain["state"]).to eq "NH"
      expect(mountain["zip"]).to eq "05149"
      expect(mountain["image_url"]).to eq "www.skiloon.com"
      expect(mountain["creator_id"]).to eq skibuddy.id

      expect(reviews.length).to eq 2
      expect(reviews[0]["user_id"]).to eq skibuddy.id
      expect(reviews[0]["mountain_id"]).to eq loon.id
      expect(reviews[0]["rating"]).to eq 5
      expect(reviews[0]["skiing_review"]).to eq "Excellent snowmaking"
      expect(reviews[0]["food_review"]).to eq "Black Diamond Bar is the place to go for apres ski"
      expect(reviews[0]["lodging_review"]).to eq "We stayed slopeside and it was awesome!"

    end
  end
  describe "POST#create" do
    it "creates a new mountain" do

      post_json = {
        name: "Steamboat Springs 1",
        address: "1 Mountain Rd",
        city: "Steamboat Springs",
        state: "CO",
        zip: "98945",
        image_url: "www.Steamboat.com",
        creator_id: skibuddy.id
      }.to_json

      expect{ post(:create, body: post_json)}.to change{ Mountain.count }.by 1
    end
    it "returns the json of the newly posted mountain" do

      post_json = {
        name: "Steamboat Springs 2",
        address: "1 Mountain Rd",
        city: "Steamboat Springs",
        state: "CO",
        zip: "98945",
        image_url: "www.Steamboat.com",
        creator_id: skibuddy.id
      }.to_json

      post(:create, body: post_json)
      returned_json = JSON.parse(response.body)

      mountain = returned_json["mountain"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(mountain).to be_kind_of(Hash)
      expect(mountain).to_not be_kind_of(Array)

      expect(mountain["name"]).to eq "Steamboat Springs 2"
      expect(mountain["address"]).to eq "1 Mountain Rd"
      expect(mountain["city"]).to eq "Steamboat Springs"
      expect(mountain["state"]).to eq "CO"
      expect(mountain["zip"]).to eq "98945"
      expect(mountain["image_url"]).to eq "www.Steamboat.com"
      expect(mountain["creator_id"]).to eq skibuddy.id
    end
  end

  describe "GET#edit" do

  end

  describe "PUT#update" do

  end

  describe "DELETE#destroy" do

  end

end
