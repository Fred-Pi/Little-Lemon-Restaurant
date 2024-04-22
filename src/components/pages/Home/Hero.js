import {Link} from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh
                        produce and big flavours, offering bespoke cocktails and a premium wine selection.
                    </p>
                    <Link className="button-primary" to={pages.get('bookings').path}>
                        Reserve a table
                    </Link>
                </div>
                <img
                    className="hero-image"
                    src={restaurantFoodImage}
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
};

export default Hero;
