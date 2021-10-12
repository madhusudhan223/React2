import React, { Component } from "react";
import Like from "../APP/common/like";
import { getMovies } from "../../services/fakeMovieService";
import "./_.movies.scss";
import Pagination from "./common/pagination";
import { AddService } from "./task";
import { RemoveService } from "./task";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };
  handleDelete(movie) {
    this.setState({
      movies: this.state.movies.filter((i) => i._id !== movie._id),
    });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (i) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(i);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    if (movies[index].liked) {
      AddService(i);
    } else {
      RemoveService(i);
    }
  };
  render() {
    let { length: count } = this.state.movies;
    let { pageSize, currentPage } = this.state;
    if (count === 0)
      return <p className="no-movies">there are no movies in database</p>;
    return (
      <React.Fragment>
        <p className="para">showing {count} movies</p>
        <div>
          <h1 style={{ textAlign: "center" }}>Table component</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Movie</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>rating</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((i) => (
                <tr key={i._id}>
                  <td>{i.title}</td>
                  <td>{i.genre.name}</td>
                  <td>{i.numberInStock}</td>
                  <td>{i.dailyRentalRate}</td>
                  <td>
                    <Like liked={i.liked} onClick={() => this.handleLike(i)} />
                  </td>
                  <td>
                    <button
                      key={i._id}
                      onClick={() => this.handleDelete(i)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
