import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '.././../assets/me.jpg'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Fotabong Fualefac Puissance</h1>
<h5 className='text-light'>Software Engineering Student In The Faculty of Engineering and Technology </h5>
<CTA/>
{/* here we are using the imported CTA component */}
<HeaderSocial/>
{/* same here */}
<div className='my_image'>

{/* <img src= "./src/assets/me.jpg" alt='Nyando'/> */}
 <img src= {me} alt="puissance" width={900} height={400} />

</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;