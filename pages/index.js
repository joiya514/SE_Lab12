import { getPostData } from '../lib/posts';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Importing the Image component

export default function Home({ data, content }) {
  // State to control whether the image is displayed or not
  const [showImage, setShowImage] = useState(false);

  // Function to handle button click to show the image
  const handleViewDMC = () => {
    setShowImage(true);
  };

  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta property="og:description" content="This is a sample static site using Next.js." />
      </Head>

      <div className="container">
        {/* Heading centered and larger */}
        <h1 className="main-heading">Welcome to My Static Site</h1>

        <div className="image-section">
          {/* Subheading centered and smaller */}
          <h2 className="sub-heading">Lazy Loaded Image Example</h2>

          {/* Button to trigger the display of the image */}
          <button className="view-button" onClick={handleViewDMC}>
            View DMC
          </button>

          {/* Conditionally render the image when showImage is true */}
          {showImage && (
            <div className="image-container">
              <Image
                src="/images/DMC.png" // Path to your image in the `public` folder
                alt="Example Image"
                width={1200} // Set desired width
                height={1400} // Set desired height
                priority={false} // Optional: false enables lazy loading
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 100vh;
        }

        .main-heading {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .sub-heading {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .view-button {
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .view-button:hover {
          background-color: #45a049;
        }

        .image-container {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}



// Fetch data at build time
export async function getStaticProps() {
  const { data, content } = getPostData();
  return {
    props: {
      data,
      content,
    },
  };
}


