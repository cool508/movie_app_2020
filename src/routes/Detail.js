import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history} =this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="movie-detail-container">
                    <div className="movie-detail">
                        <img src={location.state.poster} alt={location.state.poster} className="movie-detail__poster" />
                        <h1 className="movie-detail__title">{location.state.title}</h1>
                        <h2 className="movie-detail__year">{location.state.year}</h2>
                        <h3 className="movie-detail__rating">{location.state.rating / 2}</h3>
                        <ul className="movie-detail__gernes">
                            {location.state.genres.map((genre, index) => {
                            return <li key={index} className="movie-detail__genre">{genre}</li>
                            })}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;