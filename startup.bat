@echo off
cd backend
start cmd /k fastapi dev main.py
cd ../frontend
start cmd /k npm start
cd ..
end