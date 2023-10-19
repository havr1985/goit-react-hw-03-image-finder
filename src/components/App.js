import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { fetchImages } from "./Api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMore } from "./LoadMore/LoadMore";
import { loadSpinner } from "./Loader/Loader";
import { ErrMsg } from "./ErrorMassage/ErrorMassage";
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from "./Layout";

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
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true, error: false });
        const apiData = await fetchImages(this.state.query, this.state.page);
        const newImg = apiData.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...newImg]
        }))

        if (newImg.length > 0) {
          toast.success(`Hooray! We found totalHits images: ${apiData.totalHits}`);
        } else {
          toast.error('Sorry, there are no images matching your search query. Please try again.');
        }
      
      } catch (error) {
        this.setState({ error: true });
      
      } finally {
        this.setState({ loading: false });
      
      }
    }
  }

  render() {
    const { loading, error } = this.state
    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && (loadSpinner)}
        {error && <ErrMsg/>}
        {this.state.images.length > 0 && <ImageGallery addImages={this.state.images} />}
        {this.state.images.length > 0 && <LoadMore onClick={this.handleLoadMore} />}
        <Toaster position="top-right"/>
      </Layout>
    )
  }
}
