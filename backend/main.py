from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bson.json_util import dumps
from json import loads
from requests import request
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*']
)

load_dotenv()

def fetch_bank_details(bank_name):
    try:
        with MongoClient(os.getenv("MONGODB_URI"), server_api=ServerApi('1')) as client:
            database = client["bank-details"]
            collection = database["Bank-Data"]
            responses = [response for response in collection.find({ "BANK":bank_name })]
            for response in responses:
                response["_id"] = str(response["_id"])
            return loads(dumps(responses))
    except Exception as e:
        raise Exception(f"The following error occurred: {e}")

def fetchCoordinates(address):
    return

@app.get('/', status_code=200)
async def root():
    return {"Status": "OK", "Message": "Started successfully"}

@app.get('/bank/{bank_name}')
async def get_bank_details(bank_name: str):
    try:
        bank_details = fetch_bank_details(bank_name)
        if bank_details:
            return bank_details
        raise HTTPException(status_code=404, detail="Bank not found")
    except Exception as e:
        return {"Error": str(e)}
    
@app.get('/bank/{bank_name}/{city_name}')
async def get_bank_details_city(bank_name: str, city_name: str):
    try:
        bank_details = fetch_bank_details(bank_name)
        bank_in_city = [bank for bank in bank_details if bank["CITY"] == city_name.upper()]
        if bank_in_city:
            return bank_in_city
        raise HTTPException(status_code=404, detail="No Banks Found In This City")
    except Exception as e:
        return {"Error": str(e)}