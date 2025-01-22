from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from bson.json_util import dumps
from json import loads
import requests
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*']
)

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
GOOGLE_MAPS_API = os.getenv("GOOGLE_MAPS_API")

def fetch_bank_details(query, start):
    try:
        with MongoClient(MONGODB_URI, server_api=ServerApi('1')) as client:
            database = client["bank-details"]
            collection = database["Bank-Data"]
            responses = list(collection.find(query).skip(start).limit(50))
            count = collection.count_documents(query)
            for response in responses:
                response["_id"] = str(response["_id"])
            return loads(dumps(responses)), count
    except Exception as e:
        raise Exception(f"The following error occurred: {e}")

@app.get('/', status_code=200)
async def root():
    return {"Status": "OK", "Message": "Started successfully"}

@app.get('/bank/{bank_name}')
async def get_bank_details(bank_name: str, start: int = Query(10, ge=0, le=100000)):
    try:
        bank_details, count = fetch_bank_details({"BANK":bank_name}, start)
        if bank_details:
            return [bank_details, count]
        raise HTTPException(status_code=404, detail="Bank not found")
    except Exception as e:
        return {"Error": str(e)}
    
@app.get('/bank/{bank_name}/{city_name}')
async def get_bank_details_city(bank_name: str, city_name: str, start: int = Query(10, ge=0, le=1000)):
    try:
        bank_details, count = fetch_bank_details({"BANK":bank_name, "CITY":city_name.upper()}, start)
        if bank_details:
            return [bank_details, count]
        raise HTTPException(status_code=404, detail="No Banks Found In This City")
    except Exception as e:
        return {"Error": str(e)}
    
@app.get('/location/{address}')
def get_bank_coordinates(address):
    try:
        response = requests.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        params={"address": address, "key": GOOGLE_MAPS_API},
        headers={"Content-type": "application/json"}
        ).json()
        if response["status"] == "OK" and len(response["results"]) > 0:
            return response['results'][0]['geometry']['location']
        raise HTTPException(status_code=404, detail="Unable to get coordinates for the given address")
    except Exception:
        return {"Error": "Unable to fetch"}