import Head from 'next/head';
import { useEffect } from 'react';

import axios from 'axios';

import styles from '../styles/Home.module.css';

export default function Home() {

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedIn = urlParams.get('loggedIn')
    if (loggedIn === 'true') {
      alert('User is logged in');
      axios.get('http://localhost:3001/api/user')
      .then(response => {
        console.log('User API called', response.data);
      })
      .catch(error => {
        console.error('Error fetching User', error);
      });
    }
  }, []);

  const handleButtonClick = () => {
    axios.get('http://localhost:3001/api/sso')
      .then(response => {
        console.log('SSO API called', response.data);
        let res = response.data;
        if (res.redirect) {
          window.location.href = res.redirect;
        }
      })
      .catch(error => {
        console.error('Error fetching SSO', error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Client Page</a>
        </h1>

        <p className={styles.description}>
          Lets get you started by logging in
        </p>

        <button className="button-8" role="button" onClick={() => handleButtonClick()}>Login</button>
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
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
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
