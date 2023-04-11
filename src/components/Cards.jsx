import React from 'react';



export default function Cards(props) {
  const {
    title,
    description,
    price,
    image,
    category,
  } = props;

//   const renderCategory = (category) => {
//     if (category === 'fish') {
//       return <Icon icon="noto-v1:fish" color="blue" width="40" height="40" hFlip={true} />;
//     } else if (category === 'meat') {
//       return <Icon icon="game-icons:steak" color="red" width="40" height="40" />;
//     } else if (category === 'gluten-free') {
//       return <Icon icon="mdi:gluten-free" color="green" width="40" height="40" />;
//     } else {
//       return null;
//     }
//   };

  return (
    <>
      <div className=' card col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
        <div className='card h-95 shadow rounded my-4'>
          <div className='card-body lead'>
            <div className='d-flex justify-content-center'>

            <img src={image} alt={title} className='img '/>
            </div>
            <h3 className='card-title text-center'>
              {title} 
            </h3>
            <p className='text-center'> {description}</p>
            <p className='text-center'>{price} </p>
            <p className='text-center'>{category} </p>
            {/* <p className=''> 
                Category: {renderCategory(category)}
            </p> */}
            <div className='d-grid justify-content-end mt-'></div>
          </div>
        </div>
      </div>
    </>
  );
}