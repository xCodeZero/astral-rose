'use client'

import Link from 'next/link'
import React from "react"
import wikiData from "../wikiData"
import { useParams } from "next/navigation"

import '../../../styles/wiki.scss'


const Page = () => {

  const params = useParams();
  const wikiPost = wikiData.find((post) => post.slug === params.slug);

  if (!wikiPost) {
    return <div>Wiki post not found</div>;
  }

  const relatedWikiPosts = wikiData.filter((post) => post.tag === wikiPost.tag && post.slug !== wikiPost.slug);

  return (

    <div className="wiki">

      <div className="wiki_read container_wiki-read">

        <Link href="/wiki" className='wiki_read-back'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
          Back to Wiki
        </Link>

        <h1>{wikiPost.title}</h1>

        <img src={wikiPost.thumb} alt="" />

        {wikiPost.content}

      </div>


      <div className="wiki_related">

        {relatedWikiPosts.length > 0 && (

          <div className="wiki_read-related">

            <h2>Related</h2>

            <ul>

              {relatedWikiPosts.map((relatedPost) => (

                <li key={relatedPost.id}>

                  <Link href={`/wiki/${relatedPost.slug}`}>

                    <img src={relatedPost.thumb} alt="" />

                    <span>
                      {relatedPost.title}
                    </span>
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
