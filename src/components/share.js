import React from 'react';
import getIcon from './icons';

const share = props => {
  console.log(props);
  return (
    <div>
      <h3>Share this: </h3>
      <a href={getTwitterLink(props)}>{getIcon('twitter')}</a>{' '}
      <a href={getLinkedInLink(props)}>{getIcon('linkedin')}</a>{' '}
      <a href={getFacebookLink(props)}>Facebook</a>
    </div>
  );
}

const getTwitterLink = props => {
  const { url, title } = props;
  return `http://twitter.com/home?status=${title}%20${url.href}`
}

const getFacebookLink = props => {
  const { url, title } = props;
  return `http://www.facebook.com/sharer/sharer.php?u=${title}%20${url.href}`
}

const getLinkedInLink = props => {
  const { url, title } = props;
  return `http://www.linkedin.com/shareArticle?mini=true&url=${url.href}&title=${title}`
}

export default share;