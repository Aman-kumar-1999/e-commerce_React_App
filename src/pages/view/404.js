import { Link } from 'react-router-dom';
import '../css/404.css'


const B404 = () => {

    return (
        <>
            <h1 style={{color :'#8394'}}>404 Error Page </h1>
            {/* <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p> */}
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <Link to={'/'} class="more-link">Visit Our website</Link>
            </div>
        </>
    )

};
export default B404;