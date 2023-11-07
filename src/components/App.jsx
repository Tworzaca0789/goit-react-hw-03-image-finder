import React, { Component } from "react";
import getAPI from "./ApiPixabay";
import {toast, ToastContainer} from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    imageName: "",
    page: 1,
    images: [],
    loading: false,
  };

  searchImages = () =>{
    const {imageName, page} = this.state;
    this.setState({loading:true});

    getAPI(imageName,page).then((response) => {
      const images = response.data.hits.map(({id, tags, webformatURL, largeImageURL}) =>{
        return {id, tags, webformatURL, largeImageURL};
      }
      );

      if(images.length === 0){
        this.setState({loading:false});
        return toast.error("No found photo");
      }

      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
      }));
      this.setState({loading: false})
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.imageName !== this.state.imageName){
      this.setState({images: []});
      this.searchImages();
    }

    if(prevState.page !== this.state.page && this.state.page !== 1) {
      this.searchImages();
    }
  }

  handleSubmit = (imageName) =>{
    this.setState({imageName, page:1, images: []});
  };

  loadMoreBtn = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render(){
    const {images, loading} = this.state;
    const {handleSubmit, loadMoreBtn} = this;

     return (
    <div>
      <Searchbar onSubmit= {handleSubmit}/>
      {images.length > 0 && <ImageGallery images={images}/>}
      {loading ? (
        <Loader/>
      ) : (
        images.length > 0 &&
        images.length % 12 === 0 && <Button more={loadMoreBtn}/>
      )}
      <ToastContainer autoClose={3000}/>
    </div>
  );
  }
};
 export default App;