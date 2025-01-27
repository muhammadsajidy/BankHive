# BankHive

This project is a comprehensive database for Indian banks that contains detailed information about their branches, including:
- **Branch Names**
- **Addresses**
- **Contact Numbers**
- **IFSC Codes**

The application provides an interactive interface to search and view branch details. It also integrates mapping functionality for enhanced user experience.

## Features
1. **Home Page**
   - A demo input field where users can enter the name of a bank and get details about some of its branches.

2. **Search Page**
   - Allows users to retrieve data for a specific bank's branches across India.
   - Users can filter results to find branches located in specific cities.

3. **About Page**
   - Provides information about the website and its purpose.

4. **API Page**
   - Includes documentation for the API, detailing endpoints and usage.

## Technology Stack
- **Frontend**: React.js
- **Styling**: Tailwind.css
- **Backend**: FastAPI
- **Database**: MongoDB
- **Geocoding**: Google Geocoding API
- **Maps**: React-Leaflet

## Installation
### Prerequisites
- Node.js and npm installed
- Python 3.9+ installed
- MongoDB server running

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/muhammadsajidy/BankHive.git
   cd BankHive
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup**:
   ```bash
   cd backend
   pip install -r requirements.txt
   fastapi dev main.py
   ```

4. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   GOOGLE_API_KEY=<your_google_geocoding_api_key>
   ```

5. **Run the Application**:
   - Access the frontend at `http://localhost:5173`
   - Backend runs at `http://127.0.0.1:8000`

## Usage
1. Navigate to the **Home** page to try the demo input feature.
2. Use the **Search** page to search for branches of a bank across India or filter by city.
3. Explore the **About** page for more information on the project.
4. Visit the **API** page to understand how to interact with the backend programmatically.

## API Documentation
The API exposes endpoints for accessing bank and branch data. Below is an overview:

### Endpoints
1. `GET /banks/{bank_name}` - Fetch a list of all branches of the given bank along with the number of branches across India.
2. `GET /banks/{bank_name}/{city_name}` - Fetch branches of a bank located in a specified city along with the number of branches in the city.
4. `GET /location/{address}` - Fetch coordinates of a branch's address.

## Future Enhancements
- User authentication for personalized experiences.
- Advanced filtering options, like filtering using IFSC code.
- Adding support for more APIs for enhanced data visualization.

## License
This project is licensed under the MIT License.