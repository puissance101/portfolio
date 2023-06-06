import React from 'react'
import './portfolio.css'
import Portfolio4 from '../../assets/naldo.jpeg'
import LMS from '../../assets/happy.jpeg'
import dog from '../../assets/sic.jpeg'
import twitter from '../../assets/OIP.jpeg'
import basketball from '../../assets/curry.jpeg'
import cats from '../../assets/best4.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LMS} alt="Library System" />
          </div>
          <h3>This is a portfolio  of a happy place</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=0AYUA%2bhe&id=6789698116642E5FCE5894D2CAFFD1175C5E5617&thid=OIP.0AYUA-heRjV_3N5-g_cKuQAAAA&mediaurl=https%3a%2f%2fis4-ssl.mzstatic.com%2fimage%2fthumb%2fPodcasts123%2fv4%2fb5%2f58%2f97%2fb558974e-0677-fa73-c4ab-c8e4dd7085ff%2fmza_17937659762207187395.jpg%2f400x400bb.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d0061403e85e46357fdcde7e83f70ab9%3frik%3dF1ZeXBfR%252f8rSlA%26pid%3dImgRaw%26r%3d0&exph=400&expw=400&q=happy+place&simid=608043678865508341&FORM=IRPRST&ck=17483F74BA420C9FACAD20C84389C45F&selectedIndex=4" className='btn'>Happy place</a>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=0AYUA%2bhe&id=6789698116642E5FCE5894D2CAFFD1175C5E5617&thid=OIP.0AYUA-heRjV_3N5-g_cKuQAAAA&mediaurl=https%3a%2f%2fis4-ssl.mzstatic.com%2fimage%2fthumb%2fPodcasts123%2fv4%2fb5%2f58%2f97%2fb558974e-0677-fa73-c4ab-c8e4dd7085ff%2fmza_17937659762207187395.jpg%2f400x400bb.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d0061403e85e46357fdcde7e83f70ab9%3frik%3dF1ZeXBfR%252f8rSlA%26pid%3dImgRaw%26r%3d0&exph=400&expw=400&q=happy+place&simid=608043678865508341&FORM=IRPRST&ck=17483F74BA420C9FACAD20C84389C45F&selectedIndex=4" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio4} alt="Slider" />
          </div>
          <h3>This is Ronaldo</h3>

          <a href="https://www.bing.com/images/search?view=detailV2&ccid=M0u4kzue&id=46673F050145C6798D71000DC9919DC3F8C9553F&thid=OIP.M0u4kzuem3n8SXJz17WocAHaEK&mediaurl=https%3a%2f%2fi.redd.it%2fluprfmefavp01.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.334bb8933b9e9b79fc497273d7b5a870%3frik%3dP1XJ%252bMOdkckNAA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=ronaldo&simid=608021529710758865&FORM=IRPRST&ck=C205B261F2164F103190D27CE85DC174&selectedIndex=43" className='btn'>Ronaldo</a>
          <a href="https://www.bing.com/videos/riverview/relatedvideo?&q=ronaldo+bicycle+kick&&mid=5DDDE9AFC8F6D02250305DDDE9AFC8F6D0225030&&FORM=VRDGAR" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={cats} alt="A cat pet website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://wallpapercave.com/" className='btn'>Github</a>
          <a href="https://wallpapercave.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={twitter} alt="Twitter home page" />
          </div>
          <h3>This is a portfolio for the migos</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=f7rDvuGb&id=AC2E8D669084D3508922530795D317542650F484&thid=OIP.f7rDvuGbl6m1soBVEtpJCgAAAA&mediaurl=https%3a%2f%2fi.scdn.co%2fimage%2fab6761610000e5ebf4593f7b778219838d858c34&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7fbac3bee19b97a9b5b2805512da490a%3frik%3dhPRQJlQX05UHUw%26pid%3dImgRaw%26r%3d0&exph=474&expw=474&q=migos&simid=607990150693813146&FORM=IRPRST&ck=2A3DB0ED744BAA5302A24EDA83049B3F&selectedIndex=31" className='btn'>Migos</a>
          <a href="https://www.bing.com/ck/a?!&&p=3aa81bc49f6c9939JmltdHM9MTY4NTkyMzIwMCZpZ3VpZD0wOTE2NWJjMC00ODg1LTY4Y2EtMzNkMi00OTJjNDkyZjY5MmImaW5zaWQ9NTE3NQ&ptn=3&hsh=3&fclid=09165bc0-4885-68ca-33d2-492c492f692b&psq=migos+spotify&u=a1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC82b011SW1kcDVaY0ZoV1AwRVNlNm1H&ntb=1" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={basketball} alt="Outstanding dunk from the king" />
          </div>
          <h3>This is a portfolio for steph curry</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=y4F8pq59&id=C335B54F1F6B14BEFFA8B25220BB259CE287778D&thid=OIP.y4F8pq59gSrjJBY_hXestAHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.cb817ca6ae7d812ae324163f8577acb4%3frik%3djXeH4pwluyBSsg%26riu%3dhttp%253a%252f%252fhdwpro.com%252fwp-content%252fuploads%252f2019%252f06%252fWonderful-Stephen-Curry-1.jpg%26ehk%3d5irjwbnarceJHPVAP%252fhDOKsJhN6xj1W%252bkdbKSMOrlzM%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=850&expw=1274&q=stephen+curry&simid=608017273395900784&FORM=IRPRST&ck=D9C7DD2E0DDA9AAA8EF282F136DC6D0C&selectedIndex=9s" className='btn'>Curry</a>
          <a href="https://www.bing.com/ck/a?!&&p=9927c5ea791c24b5JmltdHM9MTY4NTkyMzIwMCZpZ3VpZD0wOTE2NWJjMC00ODg1LTY4Y2EtMzNkMi00OTJjNDkyZjY5MmImaW5zaWQ9NTQzNA&ptn=3&hsh=3&fclid=09165bc0-4885-68ca-33d2-492c492f692b&u=a1L3ZpZGVvcy9yaXZlcnZpZXcvcmVsYXRlZHZpZGVvP3E9c3RlcGgrY3Vycnkrd2lsZCtzaG90Jm1pZD00Q0VCNjFCQzk3MDhCNkJBNDM3RjRDRUI2MUJDOTcwOEI2QkE0MzdG&ntb=1" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={dog} alt="Lovely pics of animals." />
          </div>
          <h3>This is a portfolio for a dancing dog</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=uVaGZ%2fGH&id=1AA0544758D1D8EBB1AA49E9C169CF9EC8F87AF8&thid=OIP.uVaGZ_GHZ8-6sRu6p7248AHaFj&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2f_q-iud04rio%2fhqdefault.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b9568667f18767cfbab11bbaa7bdb8f0%3frik%3d%252bHr4yJ7PacHpSQ%26pid%3dImgRaw%26r%3d0&exph=360&expw=480&q=dancing+puppy&simid=608055017568558413&FORM=IRPRST&ck=14ED2B16E6E49E9353915A5E8D6A2358&selectedIndex=30" className='btn'>PUPPY</a>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=uVaGZ%2fGH&id=1AA0544758D1D8EBB1AA49E9C169CF9EC8F87AF8&thid=OIP.uVaGZ_GHZ8-6sRu6p7248AHaFj&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2f_q-iud04rio%2fhqdefault.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b9568667f18767cfbab11bbaa7bdb8f0%3frik%3d%252bHr4yJ7PacHpSQ%26pid%3dImgRaw%26r%3d0&exph=360&expw=480&q=dancing+puppy&simid=608055017568558413&FORM=IRPRST&ck=14ED2B16E6E49E9353915A5E8D6A2358&selectedIndex=30" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
