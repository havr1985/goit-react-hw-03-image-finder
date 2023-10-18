import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchImages } from "./Api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMore } from "./LoadMore/LoadMore";
import { loadSpinner } from "./Loader/Loader";
import { ErrMsg } from "./ErrorMassage";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images:[],
    });
    console.log(this.state.query)
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true, error: false });
        const newImg = await fetchImages(this.state.query, this.state.page);
        console.log(newImg)
        this.setState(prevState => ({
          images: [...prevState.images, ...newImg]
        }))
      
      } catch (error) {
        this.setState({ error: true });
      
      } finally {
        this.setState({ loading: false });
      
      }
    }
  }

  render() {
    const { loading, error } = this.state
    console.log(this.state)
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && (loadSpinner)}
        {error && <ErrMsg/>}
        {this.state.images.length > 0 && <ImageGallery addImages={this.state.images} />}
        {this.state.images.length > 0 && <LoadMore onClick={this.handleLoadMore} />}
      </div>
    )
  }
}
