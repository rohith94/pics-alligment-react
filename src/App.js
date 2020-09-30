import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList/ImageList";

class App extends React.Component {
  state = { images: [] };

  // axios first type to make a network call
  // onSearchSubmit = (term) => {
  //   console.log(term);

  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: {
  //         query: term,
  //       },
  //       headers: {
  //         Authorization:
  //           "Client-ID EEWq8o34TU7MQM7YRVicQPEJSjjTLBQs-DEYqgJoE-M",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // };

  onSearchSubmit = async (term) => {
    console.log(term);

    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
