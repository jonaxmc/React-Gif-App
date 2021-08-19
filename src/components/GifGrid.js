
import React from 'react'
import GifGridItem from './GifGridItem';
import useFetchGif from '../hooks/useFetchGifs';
const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGif(category);

    // const [images, setImages] = useState([]);







    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{category}</h3>
            {loading && <p>Loading...</p>}

            <div className="card-grid animate__animated animate__bounce animate__fadeIn">


                {
                    images.map(img => (
                       
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                    ))
                }



            </div>
        </>
    )
}

export default GifGrid;
