import React from 'react'
import Cards from './Cards'

export default function Home(props) {
    const {details} = props
    console.log(details)
  return (
    <>
        <h1 className='text-center m-3'>Kente Couture</h1>
        <p className='text-center lead'>
            Welcome to Kente Couture! Our e-commerce store is dedicated to bringing you the 
            finest and most diverse collection of African clothing available online. Our store 
            offers a wide variety of clothing items including tops, bottoms, bridal collections, 
            shoes, and more, all inspired by the vibrant and rich culture of Africa.Our website is 
            designed to be user-friendly, with a search bar that allows you to quickly find the
            items you're looking for. We also offer a cart and likes section where you can keep
            track of your favorite items. Our menu bar features easy navigation to all of our 
            clothing options, including the ability to filter by color and size. We also offer
            a "Brand" section where you can browse our curated selection of clothing items from top
             designers. When you click on one of our clothing options, you will be alerted with 
             a message that by continuing to use the site you agree to the use of cookies. 
             Once you've accepted, you will be able to see a slideshow of up to 6 images for each 
             outfit. Each outfit will display the price, a detailed description, the name of the 
             outfit, and an "add to cart" button. Our website is designed to be responsive, with 
             display options that adjust to one or two columns based on whether you're using a
              phone or computer screen. Thank you for choosing Kente Couture for your African 
              clothing needs. We hope you find the perfect outfit that makes you feel confident 
              and proud of your heritage.
              </p>
              <div>
    <h1 className='text-center lead display-4 text-decoration-underline py-5'>Our Recipes</h1>

      <div className='container-fluid '>
        <div className='container '>
          <div className='row '>

       {details.map((detail,id) =>{
        return(
             <Cards 
             />
        )
       })}
      
        </div>
        </div>

  </div>

    </div>
    </>
  )
}
