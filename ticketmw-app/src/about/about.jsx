import style from './about.module.css'
import {Link, Outlet} from 'react-router-dom'
//import images
import image1 from '../assets/1693330525825_test.png'
import close from '../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg'
function  About(){
    return(
        <div className={style.about_cont}>
            <Link to="/"><img onClick={close} className={style.closeBtn} src={close} alt="close icon" width='30px' height='30px' /></Link>
            <Outlet/>

            <p className={style.head_txt}>Ticket Malawi</p>
            <hr/>
            <p className={style.head_tittle_txt}>About Us</p>
            <div className={style.text_container}>
                <p className={style.paragraphs}>
                Ticket Malawi is an innovative online platform that operates under the umbrella of Ticket Star. As a company dedicated to the distribution of e-tickets, we are committed to revolutionizing the ticket purchasing experience in Malawi. Our primary objective is to streamline the process, making it as simple and accessible as possible for every user. In today's rapidly advancing technological landscape, it is essential to keep up with the latest developments, and Ticket Malawi is at the forefront of this change. We aim to harness the power of technology to create a seamless, user-friendly experience for our customers, ensuring that purchasing tickets is no longer a cumbersome or time-consuming task but rather a quick and efficient process. By embracing digital solutions, we are positioning ourselves as leaders in the industry, offering a service that meets the evolving needs of the modern consumer.
                </p>
                
                <p className={style.paragraphs}>
                The inception of Ticket Malawi was driven by the vision of our co-founders, who recognized a significant gap in the market. They saw an opportunity to introduce a groundbreaking advancement in the ticketing industry, specifically tailored to the Malawian market. This vision was inspired by the noticeable increase in ticket-based events throughout the country, ranging from concerts and sports events to conferences and cultural festivals. With this growing demand, it became clear that there was a need for a more efficient and accessible method of purchasing tickets. Traditional ticketing methods were no longer sufficient to meet the needs of event-goers, and the time was ripe for a digital transformation. Our co-founders envisioned a platform that would not only cater to the existing demand but also drive further growth in the industry by making it easier for people across the country to access and purchase event tickets. The convenience of e-tickets is undeniable, especially in an era where almost all aspects of our lives are transitioning to digital formats. By offering e-tickets, we are aligning with global trends and ensuring that Malawi is not left behind in the digital revolution. Our platform represents a significant step forward for the country, as we encourage more people to embrace the digital world and enjoy the benefits of modern technology.
                </p>

                <p className={style.paragraphs}>
                One of the key factors driving the success of Ticket Malawi is our commitment to customer satisfaction. We understand that purchasing tickets for events should be a hassle-free experience, and we have designed our platform with the user in mind. From the moment a customer visits our website, they are guided through an intuitive and straightforward process that allows them to select their desired event, choose their preferred seating, and complete their purchase with just a few clicks. This level of convenience is something that traditional ticketing methods simply cannot offer. Moreover, by going digital, we are reducing the need for physical tickets, which can be easily lost or damaged. With e-tickets, customers can have peace of mind knowing that their tickets are securely stored on their devices and can be accessed at any time.
                </p>

                <p className={style.paragraphs}>
                In addition to our focus on customer convenience, Ticket Malawi is also committed to supporting the local events industry. We believe that by making it easier for people to purchase tickets, we can help boost attendance at events and contribute to the growth of the entertainment and cultural sectors in Malawi. Our platform provides event organizers with a powerful tool to reach a wider audience and increase their ticket sales. By partnering with us, event organizers can take advantage of our extensive network and promotional capabilities to ensure that their events are well-attended and successful. This, in turn, creates a positive feedback loop, as more successful events lead to increased demand for tickets, further fueling the growth of the industry.
                </p>

                
                <p className={style.paragraphs}>
                Furthermore, Ticket Malawi is dedicated to staying ahead of the curve when it comes to technological advancements. We are constantly exploring new ways to enhance our platform and improve the user experience. Whether it's through the integration of mobile payment options, the development of a mobile app, or the implementation of cutting-edge security features, we are always looking for ways to better serve our customers and ensure that they have the best possible experience when purchasing tickets. Our commitment to innovation is what sets us apart from other ticketing platforms and positions us as a leader in the industry.
                </p>

                
                <p className={style.paragraphs}>
                As we continue to grow and expand our services, Ticket Malawi remains focused on our core mission: to make ticket purchasing as easy and accessible as possible for everyone in Malawi. We are proud of the progress we have made so far and are excited about the future. With each new event we support and each new customer we serve, we are one step closer to achieving our goal of transforming the ticketing industry in Malawi. We invite you to join us on this journey and experience the convenience and efficiency of e-tickets for yourself.
                </p>
                

                {/*<p className={style.head_tittle_txt2}>Our Founders</p>*/}

                {/*<div className={style.images}>
                
                <div className={style.founder_div}>
                <img className={style.images_png} src={image1} loading='lazy' alt="image1" width='150px' height='175px' />
                <a href="#"><p className={style.img_tittle}>Samuel Chilinda</p></a>
                <p className={style.role_txt}>Co-Founder</p>
                </div>
                
                <div className={style.founder_div}>
                <img className={style.images_png} src={image1} loading='lazy' alt="image1" width='150px' height='175px' />
                <a href="#"><p className={style.img_tittle}>Kizito Witmos</p></a>
                <p className={style.role_txt}>Co-Founder</p>
                </div>
                </div>*/}
            </div>
            <hr/>
            <div className={style.footer}>
                &copy; 2024 Ticket Malawi | <a href="/bluegalaxy" target="_blank">ticketstar/malawi.oasis.co</a>
                </div>
        </div>
    )
}

export default About;