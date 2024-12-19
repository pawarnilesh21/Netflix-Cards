import seriesData from "../api/seriesData.json";
import "./NetflixSeries.css"; // Import the CSS file

const NetflixSeries = () => {
    return (
        <ul className="series-list">
            {seriesData.map((el) => (
                <li key={el.id} className="series-card">
                    <div className="series-image-container">
                        <img
                            src={el.img_url}
                            alt={`${el.name} cover`}
                            className="series-image"
                        />
                    </div>
                    <h1 className="series-name">Name: {el.name}</h1>
                    <h2 className="series-rating">Rating: {el.rating}</h2>
                    <p className="series-summary">
                        <strong>Summary:</strong> {el.description}
                    </p>
                    <p className="series-genre">
                        <strong>Genre:</strong> {el.genre.join(", ")}
                    </p>
                    <p className="series-cast">
                        <strong>Cast:</strong> {el.cast.join(", ")}
                    </p>
                    <a
                        href={el.watch_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="series-watch-link"
                    >
                        <button className="watch-button">Watch Now</button>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NetflixSeries;
