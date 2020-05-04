import React, { Component } from "react";
import axios from "axios";

const url = "https://post-a-form.herokuapp.com/api/movies/";
class FormMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film: ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FormMovies">
        <h1>my favorite film</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="Title">title film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="url"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">comment</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FormMovies;
