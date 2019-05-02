import React from 'react';
import getIcon from './icons';

const share = props => {
  return (
    <div>
      <h3 className="mb-4">Share this: </h3>
      <a className="mr-4" href={getTwitterLink(props)} title="Share on Twitter" onClick={handleClick}>{getIcon('twitter')}</a>{' '}
      <a className="mr-4" href={getLinkedInLink(props)} title="Share on LinkedIn" onClick={handleClick}>{getIcon('linkedin')}</a>{' '}
      <a className="mr-4" href={getFacebookLink(props)} title="Share on Facebook" onClick={handleClick}>{getIcon('facebook')}</a>
    </div>
  );
}

const handleClick = e => {
  e.persist()
  e.preventDefault();
  const { href, title } = e.currentTarget;
  openInNewWindow(href, title);
}

const openInNewWindow = (url, title) => {
  const width = '500';
  const height = '400';
  const params =  `width=${width},height=${height},resizable=yes`;
  window.open(url, title, params).focus();
}

const getTwitterLink = props => {
  const { url, title } = props;
  return `http://twitter.com/home?status=${title}%20${url}`
}

const getFacebookLink = props => {
  const { url, title } = props;
  return `http://www.facebook.com/sharer/sharer.php?u=${url}`
}

const getLinkedInLink = props => {
  const { url, title, description } = props;
  return `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}&source=LinkedIn`
}

export default share;