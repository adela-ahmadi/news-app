import image from "../assets/news.jpg";
import "../App.css";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className='news-card card bg-dark text-light h-100'>
      <img src={src || image} className='card-img-top' alt={title} />

      <div className='card-body d-flex flex-column'>
        <h5 className='card-title'>
          {title ? title.slice(0, 60) : "No title available"}
        </h5>

        <p className='card-text flex-grow-1'>
          {description
            ? description.slice(0, 100)
            : "Latest updates and breaking news from reliable sources."}
        </p>

        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-danger mt-auto'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
