'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import wikiData from './wikiData'
import '../../styles/wiki.scss'

const Search = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/wiki/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const [activeTag, setActiveTag] = useState('systems');

  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  const uniqueTags = Array.from(new Set(wikiData.map((post) => post.tag)));

  return (

    <div className='wiki'>

      <div className="wiki_header">

        <h1>Wiki</h1>

      </div>

      <div className="wiki_content container_wiki">

        <div className='wiki_content-search'>

          <div>
            <input
              required
              type="text"
              value={searchQuery}
              placeholder='Search articles'
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </button>
          </div>

        </div>

        <div className="wiki_content-title">
          <h1>Articles</h1>
        </div>

        <div className="wiki_content-wrapper">

          <ul className="wiki_content-list">
            {wikiData.filter((post) => post.tag === activeTag).map((post) => (
              <li key={post.id}>
                <Link href={`/wiki/${post.slug}`}>
                  <img src={post.thumb} alt="" />
                  <span>
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="wiki_content-tags">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTag(tag)}
                className={activeTag === tag ? 'active' : ''}
              >
                <span>{tag}</span>
              </button>
            ))}
          </div>


        </div>

      </div>
    </div >
  );
};

export default Search;