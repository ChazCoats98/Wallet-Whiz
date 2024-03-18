import { ring } from 'ldrs'

ring.register()


const ComponentLoader = () => {
    return (
        <l-ring
        size="400"
        stroke="5"
        bg-opacity="0"
        speed="2" 
        color="rgb(139, 127, 166)" 
      ></l-ring>
    )
};

export default ComponentLoader;