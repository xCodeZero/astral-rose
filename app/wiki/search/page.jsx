'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import wikiData from '../wikiData'
import '../../../styles/wiki.scss'


const SearchPage = () => {

  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query') || '';
    setQueryString(queryParam);
  }, []);

  const filteredWikiPosts = wikiData.filter(wikiPost =>
    wikiPost.title.toLowerCase().includes(queryString.toLowerCase())
  );

  return (

    <div className='wiki'>

      <div className="wiki_search container_search-wiki">

        <Link href="/wiki" className='wiki_search-back'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
          Back to Wiki
        </Link>

        <h1>Search Results for &apos;<span>{queryString}</span>&apos;</h1>

        <ul>
          
          {filteredWikiPosts.length === 0 ? (

            <p>No results found</p>

          ) : (

            <ul>
              {filteredWikiPosts.map(wikiPost => (
                <li key={wikiPost.id}>
                  <Link href={`/wiki/${encodeURIComponent(wikiPost.slug)}`}>
                    {wikiPost.title}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
