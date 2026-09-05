html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: #000;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-height: 100vh;
}

.gymmy-home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000;
  padding: 40px 20px;
  box-sizing: border-box;
}

.gymmy-overlay {
  max-width: 900px;
}

.gymmy-logo {
  font-size: clamp(48px, 10vw, 110px);
  font-weight: 700;
  letter-spacing: 12px;
}

.gymmy-vip {
  font-size: 16px;
  letter-spacing: 8px;
  margin-top: -5px;
  margin-bottom: 55px;
}

.gymmy-content h1,
.gymmy-home h1 {
  font-size: clamp(30px, 5vw, 58px);
  letter-spacing: 2px;
  margin: 0 0 18px;
}

.gymmy-home h2 {
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 400;
  letter-spacing: 3px;
  margin: 0 0 30px;
}

.gymmy-home p {
  font-size: 16px;
  letter-spacing: 4px;
  margin: 10px 0;
}

.gymmy-button {
  display: inline-block;
  margin-top: 45px;
  padding: 16px 32px;
  border: 1px solid #888;
  color: #fff;
  text-decoration: none;
  letter-spacing: 3px;
  font-size: 13px;
}

.gymmy-button:hover {
  background: #fff;
  color: #000;
    }
