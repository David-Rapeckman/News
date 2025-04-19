import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, link, imageSrc }) => {
  return (
    <div className="news-card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read more ↗</a>
    </div>
  );
};

export default NewsCard;
