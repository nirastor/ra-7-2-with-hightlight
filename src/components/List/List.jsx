/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import React from 'react';
import Article from '../Article/Article';
import Video from '../Video/Video';
import withHighlight from '../withHighlight/withHighlight';

export default function List(props) {
  const HighlightedVideo = withHighlight(Video);
  const HighlightedArticle = withHighlight(Article);  
  
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <HighlightedVideo {...item} />
        );

      case 'article':
        return (
          <HighlightedArticle {...item} />
        );
    }
  });
};
