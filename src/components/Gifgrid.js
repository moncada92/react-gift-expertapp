import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const Gifgrid = ({category}) => {

    // reenombramos la variable data como images
    const {data:images, loading} = useFetchGifs(category)
    console.log('images:', images);

    return (
        <>     
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {
                loading && <p className='animate__animated animate__flash'>loading... </p>
            }
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
};

export default Gifgrid;



// 552850