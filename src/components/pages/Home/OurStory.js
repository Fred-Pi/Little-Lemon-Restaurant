import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg';
import './OurStory.css';

const OurStory = () => {
    return (
        <section className="container grid our-story">
            <div className="our-story-description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="text-center">
                    Little Lemon isn't just a captivating Mediterranean cocktail and wine bar—it's also the perfect
                    venue to host your next event. Whether you're planning a small gathering or a private affair, we
                    have you covered.
                    <br></br>
                    For intimate gatherings, you can easily book online to reserve space for your small group. Enjoy our
                    upscale Mediterranean finger food platters, carefully crafted to impress and satisfy your guests'
                    palates. If you're looking to host a larger event or wish to book the entire venue exclusively, we
                    welcome you to fill out our booking enquiry form. Our dedicated events team will work closely with
                    you to tailor a package that suits your specific requirements. From corporate events to private
                    celebrations, we have the expertise and flexibility to make your event a resounding success.
                </p>
            </div>
            <div className="our-story-chefs">
                <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian"/>
                <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian"/>
            </div>
        </section>
    );
};

export default OurStory;
