import Image from "next/image";
import News1 from "../../public/images/img-1.png";
import News2 from "../../public/images/img-2.png";
import News3 from "../../public/images/img-3.jpg";
import News4 from "../../public/images/img-4.jpg";
import News5 from "../../public/images/img-5.jpg";
import News6 from "../../public/images/img-6.jpg";
import News7 from "../../public/images/img-7.jpg";
const NewsContents = () => {
  return (
    <div class="news-container">
      <div class="news-item">
        <Image src={News1} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 1</h2>
          <p class="news-author">Author: John Doe</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>

      <div class="news-item">
        <Image src={News2} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 2</h2>
          <p class="news-author">Author: Jane Smith</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>
      <div class="news-item">
        <Image src={News3} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 3</h2>
          <p class="news-author">Author: Emily Rudd</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>

      <div class="news-item">
        <Image src={News4} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 4</h2>
          <p class="news-author">Author: Kaylie Johnson</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>
      <div class="news-item">
        <Image src={News5} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 5</h2>
          <p class="news-author">Author: Zell Dincht</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>

      <div class="news-item">
        <Image src={News6} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 6</h2>
          <p class="news-author">Author: Jaden Smith</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>
      <div class="news-item">
        <Image src={News7} alt="News Image" />
        <div class="news-details">
          <h2 class="news-title">News Title 7</h2>
          <p class="news-author">Author: Donnie Yen</p>
          <p class="news-description">Description of the news content goes here. This is a brief summary of the news article.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsContents;
