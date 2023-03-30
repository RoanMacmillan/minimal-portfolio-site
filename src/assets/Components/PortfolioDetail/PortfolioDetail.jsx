import { useEffect, useState } from "react";
import { useParams, Link,  } from "react-router-dom";
import "./PortfolioDetail.css";
import PortfolioNavigation from "../PortfolioNavigation/PortfolioNavigation";
import Button from "../Button/Button";

const PortfolioDetail = ({ portfolioItemsData, className }) => {
  const { id } = useParams();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 30);
  }, []);

  const portfolioItem = portfolioItemsData.find((item) => item.id === id);
  const currentIndex = portfolioItemsData.findIndex((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  const {
    imgSrc,
    title,
    description,
    detailSrc,
    tools,
    method,
    backgroundDescription,
    staticOne,
    staticTwo,
    websiteUrl,
    staticThree,
  } = portfolioItem;

  

  return (
    <div
      className={`portfolioDetail ${className} ${loaded ? "loaded" : ""}`}
      data-id={id}
    >
      <div className="detailImageContainer">
        <div className="siteWrapper detail">
          <img className="detailHero" src={detailSrc} alt={title} />
        </div>
      </div>
      <div className="line detailLine"></div>
      <div className="contentsContainer">
        <div className="desktopDetailWrapper">
          <div className="titleWrapper">
            <div className="titleChild">
              <h2>{title}</h2>
              <p className="testtt">{description}</p>
              <p className="method">{method}</p>
              <p className="tools">{tools}</p>

              {/* Add more details as needed */}
              <Link to={websiteUrl}>
                <Button
                  text="visit website"
                  className="navBtn visit"
                  
                />
              </Link>
            </div>
            <div className="titleChild">
              <p className="desktopTest">{description}</p>
            </div>
          </div>
          <div className="line detailLine"></div>
          <div className="backgroundContainer">
            <h3>Project Background</h3>
            <p>{backgroundDescription}</p>
          </div>
        </div>
        <h4>Static Previews</h4>
        <div className="staticContainer">
          <div className="staticWrapper">
            <img src={staticOne} alt={title} />
          </div>
          <div className="staticWrapper">
            <img className="staticTwo" src={staticTwo} alt={title} />
          </div>
          {/* <div className="staticWrapper three">
          <img className="staticThree" src={staticThree} alt={title} />
        </div> */}
        </div>
      </div>
      <PortfolioNavigation
        currentIndex={currentIndex}
        portfolioItemsData={portfolioItemsData}
      />
    </div>
  );
};

export default PortfolioDetail;
