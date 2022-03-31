const ImageGif = (props) => {
    return (
        <div>
            <img src={props.imgUrl} alt="" />
        </div>
    )
};

const GifLopping = ({ data }) => {
    return data.map((gif) =>  
        (
          <ImageGif
            key={gif.id}
            imgUrl={gif.images.fixed_width.url}
          />
        )
    );
  }

export default GifLopping ;

