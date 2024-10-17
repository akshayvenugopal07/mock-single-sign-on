import { useEffect } from 'react';
import Head from 'next/head';

import axios from 'axios';

import styles from '../styles/Home.module.css';

export default function Home() {

  useEffect(() => {
    axios.get('http://localhost:3000/api/auth')
      .then(response => {
        console.log('Auth API called', response.data);
        let res = response.data.data;
        if (res.loggedIn) {
          window.location.href = res.redirect;
        }
      })
      .catch(error => {
        console.error('Error fetching Auth:', error);
      });
  }, []);

  const handleButtonClick = () => {
    axios.get('http://localhost:3000/api/login')
      .then(response => {
        console.log('Login API called', response.data);
        let res = response.data.data;
        if (res.loggedIn) {
          window.location.href = res.redirect;
        }
      })
      .catch(error => {
        console.error('Error fetching Login', error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Client App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">the Server App</a>
        </h1>

        <p className={styles.description}>
          This is where we will authenticate the user by checking if the cookie exists <br /> or use phone number and OTP. If you see the authenticate button <br /> below you need to login since the cookie is not there or it expired.
        </p>

        <button className="button-8" role="button" onClick={() => handleButtonClick()}>Authenticate</button>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextJS and NodeJS
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        
        .button-8 {
          background-color: #e1ecf4;
          border-radius: 3px;
          border: 1px solid #7aa7c7;
          box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
          box-sizing: border-box;
          color: #39739d;
          cursor: pointer;
          display: inline-block;
          font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.15385;
          margin: 0;
          outline: none;
          padding: 8px .8em;
          position: relative;
          text-align: center;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: baseline;
          white-space: nowrap;
        }

        .button-8:hover,
        .button-8:focus {
          background-color: #b3d3ea;
          color: #2c5777;
        }

        .button-8:focus {
          box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
        }

        .button-8:active {
          background-color: #a0c7e4;
          box-shadow: none;
          color: #2c5777;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
