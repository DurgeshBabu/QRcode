import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import {GoogleLogin} from 'react-google-login';

export default function GenerateQR() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchedCodes, setSearchedCodes] = useState([]);
  const [savedCodes, setSavedCodes] = useState([]);
  const[isAuhenticated, setIsAuthenticated]=useState(false);

  const saveQRCode = async () => {
    try {
      const response = await fetch('/api/saveQRCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      console.log(data); // Handle the response as needed
      getSavedCodes(); // Refresh saved codes after saving a n ew QR code
    } catch (error) {
      console.error('Error saving QR code:', error);
    }
  };

  const getSavedCodes = async () => {
    try {
      const response = await fetch('/api/getSavedQRCodes');
      const data = await response.json();
      setSavedCodes(data);
    } catch (error) {
      console.error('Error getting saved QR codes:', error);
    }
  };

  const searchQRCode = async () => {
    try {
      const response = await fetch(`/api/searchQRCode?searchText=${searchText}`);
      const data = await response.json();
      setSearchedCodes(data);
    } catch (error) {
      console.error('Error searching for QR codes:', error);
    }
  };

  useEffect(() => {
    getSavedCodes(); // Fetch saved QR codes when the component mounts
  }, []);
  
  const responseGoogle=(response)=>{
    if (response && response.profileObj){
      console.log('Google Sign-In Successful', response.profileObj);
      setIsAuthenticated(true);
    }else{
      console.error('google sign in failed');
    }
  }

  return (
    <div>
      {/* Google Sign-In Button */}
      {!isAuthenticated ? (
        <GoogleLogin
          clientId="951839847080-snnh4teh1oc8e22ridp929uhk21ap8co.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text for QR code"
          />
          <button onClick={saveQRCode}>Save QR Code</button>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for saved QR codes"
          />
          <button onClick={searchQRCode}>Search</button>
          <div>
            <h2>Saved QR Codes</h2>
            {savedCodes.map((code, index) => (
              <div key={index}>
                <QRCode value={code.text} />
                <p>{code.text}</p>
              </div>
            ))}
          </div>
          {searchedCodes.length > 0 && (
            <div>
              <h2>Searched QR Codes</h2>
              {searchedCodes.map((code, index) => (
                <div key={index}>
                  <QRCode value={code.text} />
                  <p>{code.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}