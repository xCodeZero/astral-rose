"use client";

import styles from "../../styles/page.module.css"
import "../../styles/faq.scss"
import { useState } from 'react';


const Faq = () => {

  const faqMap = [
    {
      id: 1,
      title: 'Faq 1',
      content: (
        <>
          <p>Something</p>

          <ul>
            <li>Something</li>
          </ul>
        </>
      ),
    },

    {
      id: 2,
      title: 'Faq 2',
      content: (
        <>
          <p>Something</p>
          
          <ul>
            <li>Something</li>
          </ul>
        </>
      ),
    },

    {
      id: 3,
      title: 'Faq 3',
      content: (
        <>
          <p>Something</p>
          
          <ul>
            <li>Something</li>
          </ul>
        </>
      ),
    },

    {
      id: 4,
      title: 'Faq 4',
      content: (
        <>
          <p>Something</p>
          
          <ul>
            <li>Something</li>
          </ul>
        </>
      ),
    },
  ];

  const [faqActive, setActiveFaq] = useState(faqMap[0].id);

  const handleClick = (faqId) => {
    setActiveFaq(faqId);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.faqContainer}>

        <h1>FAQ</h1>

        <div className={styles.faqList}>

          {faqMap.map((faq) => (

            <div
              className={`faqItem ${faqActive === faq.id ? 'active' : ''}`}
              key={faq.id}
              onClick={() => handleClick(faq.id)}
            >

              <div className="faqContentInside">
                <span>
                  {faq.title}

                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                </span>

                <div className='faqContentOpen'>
                  {faq.content}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Faq;
