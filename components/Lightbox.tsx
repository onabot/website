import React from 'react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, Image, initLightboxJS } from 'lightbox.js-react'

const Lightbox: React.FC<{
  identifier?: string,
  images: {
    src: string,
    alt: string,
  }[]
}> = ({ identifier = 'lightbox1', images }) => {
  React.useEffect(() => {
    initLightboxJS("1AAE-4A46-A5CD-4427", "individual");
  });

  return <div className="nx-my-4">
      <SlideshowLightbox lightboxIdentifier={identifier} framework="next" images={images}>
      {images.map((image, index) => (
        <Image
          key={index}
          image={image}
          data-lightboxjs={identifier}
        />
      ))}
    </SlideshowLightbox>
  </div>
}

export default Lightbox
