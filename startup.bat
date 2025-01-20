@echo off
cd backend
start cmd /k fastapi dev main.py
cd ..
cd frontend
start cmd /k npm run dev
cd ..
end